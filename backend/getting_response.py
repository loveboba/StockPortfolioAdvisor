from google import genai 
from dotenv import load_dotenv
import os 

from datetime import date 

# import sqlalchemy
import psycopg2 


from sqlalchemy import create_engine, text, connectors

# get the .env variable 
load_dotenv()



# NEWSLETTER STRUCTURE 

# connect to database 
DATABASE_CONNECT = os.getenv("DATABASE_CONNECTION")

the_engine = create_engine(DATABASE_CONNECT, echo=True)

# with the_engine.connect() as dbconnect: 

#     dbconnect.execute(text("INSERT INTO newsletter_table (the_date, the_newsletter) VALUES ('08/08/2004', 'bye')"))
#     dbconnect.commit()

#     newsletter_table = dbconnect.execute(text("SELECT * FROM newsletter_table"))

#     for row in newsletter_table:
#         print(row)

# Check the current date 

current_date = date.today() 

date_in_newsletter = False

# see if entry in table that matches current date 

the_query = text("SELECT EXISTS(SELECT 1 FROM newsletter_table WHERE the_date = :date_variable)")

with the_engine.connect() as dbconnect: 
    date_in_newsletter = dbconnect.execute(the_query, {"date_variable": current_date}).scalar()


# if not, ask ai and get new entry, insert into the tabel 

if not date_in_newsletter: 
    the_ai = genai.Client()

    response = the_ai.interactions.create(
        model="gemini-3.6-flash", 
        input="In 50 words or less, give overview of stock market today."
    )

    the_newsletter = response.output_text

    insert_query = text("INSERT INTO newsletter_table (the_date, the_newsletter) VALUES (:date_variable, :newsletter_variable)")

    with the_engine.connect() as dbconnect: 
        dbconnect.execute(insert_query, {"date_variable": current_date, "newsletter_variable": the_newsletter})
        dbconnect.commit()

else: 
    get_from_database_query = text("SELECT the_newsletter FROM newsletter_table WHERE the_date=:current_date")

    with the_engine.connect() as dbconnect: 
        the_newsletter_from_db = dbconnect.execute(get_from_database_query, {"current_date": current_date})

        # print("key checking")
        # print(the_newsletter_from_db.keys())

        the_row_from_table = the_newsletter_from_db.fetchone()
        # print("HERE")
        print(the_row_from_table)
        

        # the_newsletter = the_newsletter_from_db
        # print("debug stuff")

        the_newsletter = the_row_from_table.the_newsletter

# the_newsletter = "this is printing"

print(the_newsletter)








# otherwise, return the table entry 

# connect to database 
# DATABASE_CONNECT = os.getenv("DATABASE_CONNECTION")

# the_engine = create_engine(DATABASE_CONNECT, echo=True)

# with the_engine.connect() as dbconnect: 

#     dbconnect.execute(text("INSERT INTO newsletter_table (the_date, the_newsletter) VALUES ('08/08/2004', 'bye')"))
#     dbconnect.commit()

#     newsletter_table = dbconnect.execute(text("SELECT * FROM newsletter_table"))

#     for row in newsletter_table:
#         print(row)
    # print(newsletter_table.fetchall())


# the_ai = genai.Client()

# response = the_ai.interactions.create(
#     model="gemini-3.6-flash", 
#     input="In 300 words or less, give overview of stock market today."
# )

# change back later 
# the_newsletter = response.output_text
# the_newsletter = "basic"; 

# print(response.output_text)