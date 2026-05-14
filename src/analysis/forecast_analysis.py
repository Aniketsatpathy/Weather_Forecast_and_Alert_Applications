def summarize_forecast(forecast_data):

    summary = []

    forecasts = forecast_data["list"][:5]

    for item in forecasts:

        date = item["dt_txt"]

        temp = item["main"]["temp"]

        condition = item["weather"][0]["description"]

        summary.append({
            "date": date,
            "temperature": temp,
            "condition": condition
        })

    return summary