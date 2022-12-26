import torch
from torch import nn
from transformers import DistilBertTokenizer, DistilBertForMaskedLM

def predict_mask(masked_text: str):
  MODEL_NAME = 'distilbert-base-uncased'
  # Get DistilBERT mask model
  class_model = DistilBertForMaskedLM.from_pretrained(MODEL_NAME)
  # Get DistilBERT tokenizer
  tokenizer = DistilBertTokenizer.from_pretrained(MODEL_NAME)
  # Tokenize sequences
  inputs = tokenizer(masked_text, return_tensors = 'pt')
  # Inference
  with torch.no_grad(): # No need for gradient calculation (inference)
    logits = class_model(**inputs).logits
  predictions = nn.functional.softmax(logits, dim = -1)

  # Decode top 3 predicted tokens
  mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple = True)[0]
  predicted_token_ids = predictions[0, mask_token_index].sort(descending = True).indices[0, :3]
  decoded_tokens = [tokenizer.decode(token_id) for token_id in predicted_token_ids]
  
  return [token.replace(' ', '') for token in decoded_tokens]