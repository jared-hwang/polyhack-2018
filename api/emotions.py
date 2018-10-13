def hello():
    return "This is my secret message to you"

def get_sentiment(userId, timeScale="2018-10-10"):

    #today = date.today().strftime("%Y-%m-%d")

    #tweets = getTweets(timeScale, today, userId)

    ##model_test = load_model('best_weights.h5')
    #text = []
    #for values in tweets[userId]:
    #    text.append(values['text'])


    #parsedTweets = []
    #for tweet in text:
    #    res = re.sub("((?:https?\:\/\/|www\.|pic\.|http?\:\/\/)(\s)?(?:[-a-z0-9A-Z]+\.)*[-a-z0-9A-Z]+.*)", '', tweet)
    #    res = re.sub('(\\u2019)', '\'', res)
    #    if res != '':
    #        parsedTweets.append(res)
    #

    #pprint.pprint(parsedTweets)
    
    ret = { "id": 12345, "txt": "my tweet", "date": "01-01-1990", "happy": 1.0, "angry": 0.57, "sad": 0.23 }
    ok = ()
    ok.append(ret)
    return ok
