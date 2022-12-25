from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
from tasks.sentiment_analysis import analyse
from tasks.token_classification import token_class

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/')
@cross_origin()
def root():
  return jsonify({'flask-running': True})

@app.route('/sent-anal', methods = ['POST'])
def text_classify():
  data = request.json
  preds = analyse(data['text'])
  return jsonify({'predictions': preds.tolist()})

@app.route('/token-class', methods = ['POST'])
def token_classify():
  data = request.json
  preds = token_class(data['text'])
  for pred in preds:
    pred['score'] = pred['score'].item()
  return jsonify({'predictions': preds})