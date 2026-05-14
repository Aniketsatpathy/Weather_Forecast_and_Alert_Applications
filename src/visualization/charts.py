import matplotlib.pyplot as plt


def plot_temperature_chart(forecast_summary):

    dates = []

    temperatures = []

    for item in forecast_summary:

        dates.append(item["date"])

        temperatures.append(item["temperature"])

    plt.figure(figsize=(10, 5))

    plt.plot(dates, temperatures, marker="o")

    plt.title("Temperature Forecast")

    plt.xlabel("Date")

    plt.ylabel("Temperature °C")

    plt.xticks(rotation=45)

    plt.tight_layout()

    plt.show()