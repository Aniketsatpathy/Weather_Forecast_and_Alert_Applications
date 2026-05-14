from fastapi import FastAPI

from fastapi.middleware.cors import CORSMiddleware

from src.api.weather_api import (
    fetch_current_weather,
    fetch_forecast,
)

app = FastAPI()

# =========================
# CORS
# =========================

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():

    return {
        "message": "Weather Forecast API Running Successfully"
    }





# =========================
# CURRENT WEATHER
# =========================

@app.get("/weather/{city}")
def get_weather(city: str):

    return fetch_current_weather(city)


# =========================
# FORECAST
# =========================

@app.get("/forecast/{city}")
def get_forecast(city: str):

    return fetch_forecast(city)