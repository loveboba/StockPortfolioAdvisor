from fastapi import FastAPI
from fastapi import File, UploadFile 
from fastapi.middleware.cors import CORSMiddleware 
# stock newsletter stuff 
from getting_response import the_newsletter

my_application = FastAPI()

my_application.add_middleware(
    CORSMiddleware, 
    allow_origins=["http://localhost:5173"], 
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
        
        return {"working_or_not": "Good job!"}

# Function to get stock newsletter and send to the frontend
@my_application.get("/stockNewsletter")
def sendNewsletter(): 
    return {"the_newsletter": the_newsletter}

