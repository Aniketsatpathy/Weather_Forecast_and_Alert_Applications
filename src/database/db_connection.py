import sqlite3


def create_connection():

    connection = sqlite3.connect(
        "data/weather.db"
    )

    return connection