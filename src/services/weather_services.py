from src.api.weather_api import (
    get_weather_data
)

def fetch_weather(city: str):

    return get_weather_data(city)