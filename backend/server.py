from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
from tasks.sentiment_analysis import analyse
from tasks.token_classification import token_class
from tasks.fill_mask import predict_mask
from tasks.question_answering import answer_question

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/')
@cross_origin()
def root():
  return jsonify({'flask-running': True})

@app.route('/sent-anal', methods = ['POST'])
def sentiment_analysis():
  data = request.json
  preds = analyse(data['text'])
  return jsonify({'predictions': preds.tolist()})

@app.route('/token-class', methods = ['POST'])
def token_classification():
  data = request.json
  preds = token_class(data['text'])
  for pred in preds:
    pred['score'] = pred['score'].item()
  return jsonify({'predictions': preds})

@app.route('/fill-mask', methods = ['POST'])
def fill_mask():
  data = request.json
  preds = predict_mask(data['text'])
  return jsonify({'predictions': preds})

@app.route('/question-answering', methods = ['POST'])
def question_answering():
  data = request.json
  answer = answer_question(data['context'], data['question'])
  return jsonify({'answer': answer})