#!/usr/bin/env python
from datetime import date
from datetime import time
from datetime import datetime
from got.manager import TweetCriteria
from got.manager import TweetManager

import sys
import json



# beginDate and uptoDate are strings "Year-Month-Day"
# username is string of the EXACT username
# maxtweets is optional max tweets
def getTweets(beginDate, uptoDate, username, maxTweets=False):

    if (maxTweets != False):
        tweetCriteria = TweetCriteria().setUsername(username).setSince(beginDate).setUntil(uptoDate)
    else:
        tweetCriteria = TweetCriteria().setUsername(username).setSince(beginDate).setUntil(uptoDate).setMaxTweets(maxTweets)

    tweets = TweetManager.getTweets(tweetCriteria)

    tweetList = [{"id": tweet.id, "date": str(tweet.date), "text": tweet.text} for tweet in tweets]

    return {username: tweetList}





res = getTweets(sys.argv[1], sys.argv[2], sys.argv[3])

filename = sys.argv[3] + sys.argv[1] + '.tweet'

f = open(filename, 'w')

f.write(json.dumps(res))








