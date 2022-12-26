import torch
from transformers import DistilBertTokenizer, DistilBertForQuestionAnswering

def answer_question(context: str, question: str):
  MODEL_NAME = 'distilbert-base-cased-distilled-squad'
  
  # Get DistilBERT question answering model
  model = DistilBertForQuestionAnswering.from_pretrained(MODEL_NAME)
  # Get DistilBERT tokenizer
  tokenizer = DistilBertTokenizer.from_pretrained(MODEL_NAME)
  # Tokenize sequences
  inputs = tokenizer(question, context, return_tensors = 'pt')
  # Inference
  with torch.no_grad():
      outputs = model(**inputs)
      
  # Extracting best answer
  answer_start_index = outputs.start_logits.argmax()
  answer_end_index = outputs.end_logits.argmax()

  # decoding answer
  predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
  answer = tokenizer.decode(predict_answer_tokens, skip_special_tokens = True)
  
  return answer