import numpy as np
import pandas as pd
import re, sys, os, csv, pickle

from datetime import date
from datetime import time
from datetime import datetime

from tweetScraper import *
import pprint
import re

# from keras import regularizers, initializers, optimizers, callbacks
# from keras.preprocessing.text import Tokenizer
# from keras.preprocessing.sequence import pad_sequences
# from keras.utils.np_utils import to_categorical
# from keras.layers import Embedding
# from keras.layers import Dense, Input, Flatten, Concatenate
# from keras.layers import Conv1D, MaxPooling1D, Embedding, Dropout, LSTM, GRU, Bidirectional
# from keras.models import Model
# from keras import backend as K
# from keras.engine.topology import Layer, InputSpec



def get_sentiment(userId, timeScale="2018-10-10"):

    today = date.today().strftime("%Y-%m-%d")

    tweets = getTweets(timeScale, today, userId)

    #model_test = load_model('best_weights.h5')
    text = []
    for values in tweets[userId]:
        text.append(values['text'])


    parsedTweets = []
    for tweet in text:
        res = re.sub("((?:https?\:\/\/|www\.|pic\.|http?\:\/\/)(\s)?(?:[-a-z0-9A-Z]+\.)*[-a-z0-9A-Z]+.*)", '', tweet)
        res = re.sub('(\\u2019)', '\'', res)
        if res != '':
            parsedTweets.append(res)
    

    pprint.pprint(parsedTweets)
    