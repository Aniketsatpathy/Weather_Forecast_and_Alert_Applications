from src.config.constants import HEAT_ALERT_THRESHOLD


def check_temperature_alert(temperature):

    if temperature > HEAT_ALERT_THRESHOLD:

        return "🔥 Heatwave Alert"

    return None