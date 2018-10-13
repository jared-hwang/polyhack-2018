from got.manager import TweetCriteria
from got.manager import TweetManager


tweetCriteria = TweetCriteria().setUsername('realdonaldtrump').setMaxTweets(10)
tweets = TweetManager.getTweets(tweetCriteria)


for tweet in tweets:
    print(tweet.text)