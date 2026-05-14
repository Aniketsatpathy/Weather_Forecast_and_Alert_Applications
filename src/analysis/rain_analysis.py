from src.config.constants import RAIN_KEYWORDS


def check_rain_alert(condition):

    for keyword in RAIN_KEYWORDS:

        if keyword in condition.lower():

            return "🌧 Rain Alert"

    return None