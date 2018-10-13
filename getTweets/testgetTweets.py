from tweetScraper import * 
from datetime import date
from datetime import time
from datetime import datetime
import pprint 

begin = datetime.strptime("2018-10-11", "%Y-%m-%d")
upto = date.today().strftime("%Y-%m-%d")

test = getTweets("2018-10-11", upto, "realDonaldTrump")

pp = pprint.PrettyPrinter(indent=4)
pp.pprint(test)