import os
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("API_KEY")
USE_MOCK_DATA = True

BASE_URL = "https://api.openweathermap.org/data/2.5"

# print(API_KEY)