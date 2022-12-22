import torch
from torch import nn
from transformers import pipeline, DistilBertTokenizer, DistilBertForSequenceClassification

def analyse(text: list):
  class_model = DistilBertForSequenceClassification.from_pretrained('distilbert-base-uncased-finetuned-sst-2-english')
  tokenizer = DistilBertTokenizer.from_pretrained('distilbert-base-uncased-finetuned-sst-2-english')
  inputs = tokenizer(text, padding = True, truncation = True, max_length = 512, return_tensors = 'pt')
  with torch.no_grad():
    logits = class_model(**inputs).logits
  predictions = nn.functional.softmax(logits, dim = -1)
  return predictions.numpy()