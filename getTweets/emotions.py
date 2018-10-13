import numpy as np
import pandas as pd
import re, sys, os, csv, pickle

from datetime import date
from datetime import time
from datetime import datetime

import itertools
import pprint
import re
import os
import json
from keras import regularizers, initializers, optimizers, callbacks
from keras.models import load_model
from keras.preprocessing.text import Tokenizer
from keras.preprocessing.sequence import pad_sequences
from keras.utils.np_utils import to_categorical
from keras.layers import Embedding
from keras.layers import Dense, Input, Flatten, Concatenate
from keras.layers import Conv1D, MaxPooling1D, Embedding, Dropout, LSTM, GRU, Bidirectional
from keras.models import Model
from keras import backend as K
from keras.engine.topology import Layer, InputSpec


MAX_NB_WORDS = 40000 # max no. of words for tokenizer
MAX_SEQUENCE_LENGTH = 30 # max length of text (words) including padding
VALIDATION_SPLIT = 0.2
EMBEDDING_DIM = 200 # embedding dimensions for word vectors (word2vec/GloVe)


def hello():
    return "hello dylan"

def get_sentiment(**kwargs):

    # userId='realDonaldTrump', timeScale="2018-10-10"

    userId = kwargs['user_id']
    timeScale="2018-10-10"
    today = date.today().strftime("%Y-%m-%d")

    command = "./tweetScraper.py " + timeScale + " " + today + " " + userId
    os.system(command)

    f = open(userId+timeScale+".tweet")
    res = f.read()
    tweets = json.loads(res)
    #model_test = load_model('best_weights.h5')
    text = []
    for values in tweets[userId]:
        text.append(values['text'])


    parsedTweets = []
    for tweet in text:
        res = re.sub("((?:https?\:\/\/|www\.|pic\.|http?\:\/\/)(\s)?(?:[-a-z0-9A-Z]+\.)*[-a-z0-9A-Z]+.*)", '', tweet)
        if res != '':
            parsedTweets.append(res)
    
    with open('tokenizer.pickle', 'rb') as handle:
        tokenizer = pickle.load(handle)

    #print(parsedTweets)
    classes = ["neutral", "happy", "sad", "hate","anger"]
    model_test = load_model('checkpoint-1.097.h5')
    sequences_test = tokenizer.texts_to_sequences(parsedTweets)
    #print(sequences_test)
    data_int_t = pad_sequences(sequences_test, padding='pre', maxlen=(MAX_SEQUENCE_LENGTH-5))
    data_test = pad_sequences(data_int_t, padding='post', maxlen=(MAX_SEQUENCE_LENGTH))
    y_prob = model_test.predict(data_test)
    
    ret_list = []
    for tweet,org, prob in zip(parsedTweets, tweets[userId], y_prob.tolist()):
        inner = {}
        inner['id'] = org['id']
        inner['txt'] = tweet
        inner['date'] = org['date']
        inner['happy'] = prob[1]
        inner['angry'] = prob[4]
        inner['sad'] = prob[2]
        ret_list.append(inner)

    return json.dumps(ret_list)
    