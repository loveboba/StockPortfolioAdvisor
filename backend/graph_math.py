# define funciton that takes in the json and returns yfinance stuff 

import yfinance 


def graph_calculations(the_file_dictionary): 
    # the_file_dictionary["stock"][]

    print("Hello")

first_stock = yfinance.Ticker("AAPL")

print(first_stock.info)