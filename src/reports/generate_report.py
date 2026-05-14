import pandas as pd

from datetime import datetime

import os


def generate_csv_report(weather_data, alerts):

    report = {

        "Date": [
            datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        ],

        "City": [
            weather_data["name"]
        ],

        "Temperature": [
            weather_data["main"]["temp"]
        ],

        "Humidity": [
            weather_data["main"]["humidity"]
        ],

        "Condition": [
            weather_data["weather"][0]["description"]
        ],

        "Alerts": [
            ", ".join(alerts) if alerts else "No Alerts"
        ]
    }

    df = pd.DataFrame(report)

    os.makedirs("reports", exist_ok=True)

    file_path = "reports/weather_report.csv"

    if os.path.exists(file_path):

        existing_df = pd.read_csv(file_path)

        updated_df = pd.concat(
            [existing_df, df],
            ignore_index=True
        )

        updated_df.to_csv(file_path, index=False)

    else:

        df.to_csv(file_path, index=False)

    print("✅ Report Generated Successfully")