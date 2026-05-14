import requests

from src.config.settings import (
    API_KEY,
    BASE_URL,
)

# =========================
# CURRENT WEATHER
# =========================

def fetch_current_weather(city: str):

    url = (
        f"{BASE_URL}/weather"
        f"?q={city}"
        f"&appid={API_KEY}"
        f"&units=metric"
    )

    response = requests.get(url)

    data = response.json()

    return {
        "city": data["name"],

        "temperature": data["main"]["temp"],

        "humidity": data["main"]["humidity"],

        "pressure": data["main"]["pressure"],

        "wind_speed": data["wind"]["speed"],

        "visibility": data.get("visibility", 0) / 1000,

        "condition": data["weather"][0]["main"],

        "description": data["weather"][0]["description"],

        "icon": data["weather"][0]["icon"],

        "lat": data["coord"]["lat"],

        "lon": data["coord"]["lon"],

        "sunrise": data["sys"]["sunrise"],

        "sunset": data["sys"]["sunset"],
    }


# =========================
# FORECAST API
# =========================

def fetch_forecast(city: str):

    url = (
        f"{BASE_URL}/forecast"
        f"?q={city}"
        f"&appid={API_KEY}"
        f"&units=metric"
    )

    response = requests.get(url)

    data = response.json()

    hourly = []

    for item in data["list"][:8]:

        hourly.append({
            "time": item["dt_txt"],

            "temp": item["main"]["temp"],

            "condition": item["weather"][0]["main"],

            "icon": item["weather"][0]["icon"],
        })

    daily = []

    used_days = set()

    for item in data["list"]:

        day = item["dt_txt"].split(" ")[0]

        if day not in used_days:

            used_days.add(day)

            daily.append({
                "date": day,

                "temp": item["main"]["temp"],

                "condition": item["weather"][0]["main"],

                "icon": item["weather"][0]["icon"],
            })

        if len(daily) == 5:
            break

    return {
        "city": data["city"]["name"],
        "hourly": hourly,
        "daily": daily,
    }