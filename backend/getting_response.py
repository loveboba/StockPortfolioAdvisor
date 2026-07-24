from google import genai 
from dotenv import load_dotenv 

# get the .env variable 
load_dotenv()

the_ai = genai.Client()

response = the_ai.interactions.create(
    model="gemini-3.6-flash", 
    input="What is the difference between rasmalai and rasgulla in less than 50 words?"
)

print(response.output_text)