from src.database.db_connection import (
    create_connection
)


def create_weather_table():

    connection = create_connection()

    cursor = connection.cursor()

    cursor.execute("""

        CREATE TABLE IF NOT EXISTS weather_history (

            id INTEGER PRIMARY KEY AUTOINCREMENT,

            city TEXT,

            temperature REAL,

            humidity REAL,

            condition TEXT,

            alert TEXT
        )

    """)

    connection.commit()

    connection.close()


def save_weather_data(weather_data, alerts):

    connection = create_connection()

    cursor = connection.cursor()

    cursor.execute("""

        INSERT INTO weather_history (
            city,
            temperature,
            humidity,
            condition,
            alert
        )

        VALUES (?, ?, ?, ?, ?)

    """, (

        weather_data["name"],

        weather_data["main"]["temp"],

        weather_data["main"]["humidity"],

        weather_data["weather"][0]["description"],

        ", ".join(alerts)

    ))

    connection.commit()

    connection.close()

    print("✅ Weather Data Saved")