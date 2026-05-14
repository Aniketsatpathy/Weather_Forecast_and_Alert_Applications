from src.config.constants import HUMIDITY_ALERT_THRESHOLD


def check_humidity_alert(humidity):

    if humidity > HUMIDITY_ALERT_THRESHOLD:

        return "💧 High Humidity Alert"

    return None