[عمق](https://alplatform.ai/ar)
[AL API](https://alapi.deep.sa/docs)


## Setup
```bash
python3 -m venv .venv

source venv/bin/activate

# ChatGPT
pip install openai

# Claude API
pip install anthropic

# Google AI
pip install google-genai

# [Old] Google AI
pip install google-generativeai
```

> Usage data may take up to 15 minutes to update.


# ChatGPT
[Get your API key](https://platform.openai.com/api-keys)
```python
from openai import OpenAI


client = OpenAI(api_key="your-api-key-here")
# You exceeded your current quota, please check your plan and billing details.

response = client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {"role": "user", "content": "Hello, ChatGPT!"}
    ]
)

print(response.choices[0].message.content)
```


# Gemini
[Get your API key](https://aistudio.google.com/app/apikey).
```python
from google import genai


client = genai.Client(api_key="your-api-key-here")
# You exceeded your current quota, please check your plan and billing details.


response = client.models.generate_content(
    model="gemini-2.5-flash-lite",         #       Peak requests per minute: 15 | 1000/day
    model="gemini-2.5-flash",              #       Peak requests per minute: 10 |  250/day
    model="gemini-2.5-pro",                #       Peak requests per minute:  5 |  100/day
    model="gemini-3-flash-preview",        #       limited                      |  limited
    model="gemini-3.1-flash-lite-preview", #       limited                      |  limited
    model="gemini-2.0-flash",
    contents="Hello, Gemini!"
)

print(response.text)
```


# Claude API
[Get your API key](https://console.anthropic.com).
```python
import anthropic as claude


client = claude.Anthropic(api_key="your-api-key-here")
# Your credit balance is too low to access the Anthropic API.


message = client.messages.create(
    model="claude-sonnet-4-5",
    max_tokens=1024,
    messages=[
        {"role": "user", "content": "Hello, Claude!"}
    ]
)

print(message.content[0].text)
```



# Gemini MP3
> Gemini supports MP3, WAV, FLAC, AAC, and OGG formats up to 9.5 hours of audio.
```python
import os
import base64
from google import genai


client = genai.Client(api_key="GEMINI_API_KEY")


def analyze_arabic_audio(file_path: str, task: str = "transcribe"):
    with open(file_path, "rb") as f:
        audio_data = base64.b64encode(f.read()).decode("utf-8")

    prompts = {
        "transcribe": "افهم هذا الملف الصوتي واكتب النص كاملاً بالعربية",
        "summarize":  "افهم هذا الملف الصوتي وقدم ملخصاً مفصلاً بالعربية",
        "translate":  "افهم هذا الملف الصوتي واكتب النص بالعربية ثم ترجمه للإنجليزية",
        "analyze":    "افهم هذا الملف الصوتي وحدد: المتحدثين، المواضيع، المشاعر، والنقاط الرئيسية",
    }

    response = client.models.generate_content(
        model="gemini-2.5-flash-lite",
        contents=[
            {
                "parts": [
                    {
                        "inline_data": {
                            "mime_type": "audio/ogg",
                            "data": audio_data
                        }
                    },
                    {"text": prompts.get(task, prompts["transcribe"])}
                ]
            }
        ]
    )

    return response.text


if __name__ == "__main__":
    file_path = "WhatsApp Audio 2026-04-13 at 6.06.13 PM.ogg"

    print("=== النص الكامل ===")
    print(analyze_arabic_audio(file_path, task="transcribe"))

    # print("\n=== الملخص ===")
    # print(analyze_arabic_audio(file_path, task="summarize"))

    # print("\n=== الترجمة ===")
    # print(analyze_arabic_audio(file_path, task="translate"))

    # print("\n=== التحليل ===")
    # print(analyze_arabic_audio(file_path, task="analyze"))
```


# Huawei Cloud AI API
```py
import os
import requests

# Credentials - get from Huawei Cloud Console
ENDPOINT   = "https://infer-modelarts-<region>.myhuaweicloud.com"
PROJECT_ID = "your-project-id"
AUTH_TOKEN = "your-auth-token"

url = f"{ENDPOINT}/v1/{PROJECT_ID}/alg-infer/3rdnlp/service/<deployment_id>/v1/chat/completions"

headers = {
    "Content-Type": "application/json",
    "X-Auth-Token": AUTH_TOKEN
}

payload = {
    "model": "DeepSeek-V3",   # or "Pangu-NLP"
    "messages": [
        {"role": "user", "content": "مرحباً، كيف حالك؟"}
    ]
}

response = requests.post(url, headers=headers, json=payload)
result = response.json()

print(result["choices"][0]["message"]["content"])
```

> **Tip:** For Arabic NLP, use `DeepSeek-V3` on Huawei Cloud — it has excellent Arabic understanding and runs on Huawei's Ascend infrastructure.
