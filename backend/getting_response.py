from google import genai 
from dotenv import load_dotenv 

# get the .env variable 
load_dotenv()

the_ai = genai.Client()

response = the_ai.interactions.create(
    model="gemini-3.6-flash", 
    input="In 300 words or less, give overview of stock market today."
)

the_newsletter = response.output_text

print(response.output_text)