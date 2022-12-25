import torch
from transformers import pipeline

def parse_output(preds: list):
  label_map = {
    'LABEL_0': 'None',
    'LABEL_1': 'B-PER',
    'LABEL_2': 'I-PER',
    'LABEL_3': 'B-ORG',
    'LABEL_4': 'I-ORG',
    'LABEL_5': 'B-LOC',
    'LABEL_6': 'I-LOC',
    'LABEL_7': 'B-MISC',
    'LABEL_8': 'I-MISC'
  }
  
  output = []
  for pred in preds:
    if pred['word'].startswith('#'):
      output[-1]['word'] += pred['word'].replace('#', '')
      output[-1]['end'] = pred['end']
    else:
      output.append(pred)
      output[-1]['entity'] = label_map[output[-1]['entity']]
  return output

def token_class(text: str):
  pipe = pipeline(task = 'ner', model = 'malduwais/distilbert-base-uncased-finetuned-ner')
  preds = pipe(text)
  return parse_output(preds)