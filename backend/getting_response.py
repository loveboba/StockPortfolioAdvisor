from google import genai 
from dotenv import load_dotenv
import os 

# import sqlalchemy
import psycopg2 


from sqlalchemy import create_engine, text, connectors

# get the .env variable 
load_dotenv()

# connect to database 
DATABASE_CONNECT = os.getenv("DATABASE_CONNECTION")

the_engine = create_engine(DATABASE_CONNECT, echo=True)

with the_engine.connect() as dbconnect: 

    dbconnect.execute(text("INSERT INTO newsletter_table (the_date, the_newsletter) VALUES ('08/08/2004', 'bye')"))
    dbconnect.commit()

    newsletter_table = dbconnect.execute(text("SELECT * FROM newsletter_table"))

    for row in newsletter_table:
        print(row)
    # print(newsletter_table.fetchall())


# the_ai = genai.Client()

# response = the_ai.interactions.create(
#     model="gemini-3.6-flash", 
#     input="In 300 words or less, give overview of stock market today."
# )

# change back later 
# the_newsletter = response.output_text
the_newsletter = "basic"; 

# print(response.output_text)