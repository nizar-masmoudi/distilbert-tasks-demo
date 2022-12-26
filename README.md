# Get Started with DistilBERT-Board

[Insert description here]

## Flask API (Backend)

A REST API was developed using Python's Flask library. This API contains multiple tasks supported by HuggingFace's DistilBERT. 

The source code of this API is in the [backend](/backend) folder. The latter is organised as follows,
```
.
├── tasks
│   ├── sentiment_analysis.py
│   └── token_classification.py
└── server.py
```

In order to start Flask server API use the following command inside backend folder,
```
> flask --app server run
```
For development, use the debug option as follows;
```
> flask --app server --debug run
```

## React UI (Frontend)

[Insert description here]

## Issues

[ ] Token classification (backend) $\rightarrow$ Mutliple sentences
[ ] Sentiment Analysis (frontend) $\rightarrow$ State `data` making issues when switching to Sentiment Analysis tab