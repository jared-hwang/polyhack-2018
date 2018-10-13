from datetime import date
from datetime import time
from datetime import datetime
from got.manager import TweetCriteria
from got.manager import TweetManager


# beginDate and uptoDate are strings "Year-Month-Day"
# username is string of the EXACT username
# maxtweets is optional max tweets
def getTweets(beginDate, uptoDate, username, maxTweets=False):

    if (maxTweets != False):
        tweetCriteria = TweetCriteria().setUsername(username).setSince(beginDate).setUntil(uptoDate)
    else:
        tweetCriteria = TweetCriteria().setUsername(username).setSince(beginDate).setUntil(uptoDate).setMaxTweets(maxTweets)

    tweets = TweetManager.getTweets(tweetCriteria)

    tweetList = [{"id": tweet.id, "date": tweet.date, "text": tweet.text} for tweet in tweets]

    return {username: tweetList}




