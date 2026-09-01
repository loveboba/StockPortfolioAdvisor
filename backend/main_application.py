from fastapi import Body, FastAPI
from fastapi import File, UploadFile 
from fastapi.middleware.cors import CORSMiddleware 
# stock newsletter stuff 
from getting_response import the_newsletter
# parsing json file 
import json 
import yfinance


# set up AI chat
from google import genai 
from dotenv import load_dotenv
import os 

# set up AI model 
the_ai = genai.Client()



my_application = FastAPI()

my_application.add_middleware(
    CORSMiddleware, 
    allow_origins=["http://localhost:5173", "http://localhost:3000"], 
    allow_credentials = True, 
    allow_methods=["*"], 
    allow_headers=["*"],
)

@my_application.get("/")
def home_page(): 
    return {"test_message": "Home page working!"}

@my_application.get("/test")
def test_function(): 
    return {"test_message": "Everything is working!"}

# Function to get JSON file to backend 
@my_application.post("/json")
async def uploadJSON(theJSONfile: UploadFile = File(...)):
    # check file is JSON file; TODO: check file type in backend or frontend decide, make sure JSOn correct structure 
    if theJSONfile.content_type != "application/json": 
        return {"working_or_not": "Not a JSON file!"}
    else: 
        # PARSE JSON DATA - hash map/dict or array; create object 

        the_readable_file = json.load(theJSONfile.file) 

        # parse through the readable file - name of sectors, quantity in each sector - COST , total cost of the stocks
        # 
        # risk dictionary 
        risk_dictionary = {"low_risk": 0, "avg_risk": 0, "high_risk": 0} 

        # sector dictionary 
        # sector_dictionary = {stock: []}

        # stock money dictionary

        # money_dictionary = {stock: []}

        # for risk stuff 
        list_of_stocks = the_readable_file["stock"]


        for stock in list_of_stocks: 
            the_name = stock["stock_name"]
            # LOOK UP THE TICKER USING yfinance 
            stock_ticker = yfinance.Ticker(the_name)

            # RISK VALUE STUFF 
            risk_value = stock_ticker.info.get("beta")

            if risk_value < 1: 
                the_risk_level = "low_risk"
                # add stock quantity to dictionary 
                risk_dictionary["low_risk"] += stock["quantity"]
            elif risk_value > 1:
                the_risk_level = "high_risk"
                risk_dictionary["high_risk"] += stock["quantity"]
            else:
                the_risk_level = "average_risk"
                risk_dictionary["avg_risk"] += stock["quantity"]


            # VALUE STUFF 
            
            # Parse through stock array, if doesn't exist, add it; if exist, inc quantity 
            


            # risk_item = {"stock_name":the_name, "risk_level": risk_value}

            # add to risk dictionary 
            # risk_dictionary["stock"].append(risk_item)

            # the_quantity = stock["quantity"]

        # create risk stuff as dictionary and return it 

        # print(the_readable_file)

        # GET THE DATA and return it 

        return {"json_file": the_readable_file, "working_or_not": "Good job!", "risk_file": risk_dictionary}
        # return {"working_or_not": "Good job!"}

# Function to communicate with AI assistant 
@my_application.post("/aichat")
async def theChat(the_message: str = Body(...)): 
    # send the_message to AI 
    
    ai_response = the_ai.interactions.create(
        model="gemini-3.6-flash", 
        input=the_message
    )

    return_message = ai_response.output_text

    return {"ai_response": return_message}

    


# Function to get graph data and send it to frontend 
@my_application.get("/graph")
def sendGraphInfo(): 
    return ""

# Function to get stock newsletter and send to the frontend
@my_application.get("/stockNewsletter")
def sendNewsletter(): 
    return {"the_newsletter": the_newsletter}

