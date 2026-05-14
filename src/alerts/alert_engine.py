from src.analysis.temperature_analysis import (
    check_temperature_alert
)

from src.analysis.humidity_analysis import (
    check_humidity_alert
)

from src.analysis.rain_analysis import (
    check_rain_alert
)


def generate_alerts(weather_data):

    alerts = []

    temperature = weather_data["main"]["temp"]

    humidity = weather_data["main"]["humidity"]

    condition = weather_data["weather"][0]["description"]

    temp_alert = check_temperature_alert(temperature)

    humidity_alert = check_humidity_alert(humidity)

    rain_alert = check_rain_alert(condition)

    if temp_alert:
        alerts.append(temp_alert)

    if humidity_alert:
        alerts.append(humidity_alert)

    if rain_alert:
        alerts.append(rain_alert)

    return alerts