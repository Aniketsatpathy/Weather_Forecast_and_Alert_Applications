import {
  WeatherData,
  ForecastData,
  AlertData,
} from "@/types/weather";

import {
  HEATWAVE_TEMP,
  LOW_VISIBILITY,
  HIGH_HUMIDITY,
  HIGH_WIND,
  HEAVY_RAIN_KEYWORDS,
} from "../constants/threshold";

export function calculateRisks(
  weather: WeatherData,
  forecast: ForecastData
): AlertData[] {

  const alerts: AlertData[] = [];

  const maxForecastTemp = Math.max(
    ...forecast.hourly.map((h) => h.temp)
  );

  if (maxForecastTemp >= HEATWAVE_TEMP) {
    alerts.push({
      title: "Extreme Heatwave Warning",
      description: `Forecast temperatures may reach ${maxForecastTemp}°. Avoid direct afternoon exposure and stay hydrated.`,
      severity: "HIGH",
    });
  }

  if (weather.visibility <= LOW_VISIBILITY) {
    alerts.push({
      title: "Driving Visibility Alert",
      description:
        "Visibility is reduced. Drive carefully and avoid high-speed travel.",
      severity: "MEDIUM",
    });
  }

  if (
    weather.condition.toLowerCase().includes("smoke") ||
    weather.condition.toLowerCase().includes("haze")
  ) {
    alerts.push({
      title: "Air Quality Risk",
      description:
        "Air quality may affect breathing. Masks recommended outdoors.",
      severity: "HIGH",
    });
  }

  if (weather.wind_speed >= HIGH_WIND) {
    alerts.push({
      title: "Strong Wind Advisory",
      description:
        "Strong wind conditions detected. Secure outdoor objects.",
      severity: "MEDIUM",
    });
  }

  if (weather.humidity >= HIGH_HUMIDITY) {
    alerts.push({
      title: "High Humidity Alert",
      description:
        "Humidity levels are high and may feel uncomfortable outdoors.",
      severity: "MEDIUM",
    });
  }

  const rainDetected = forecast.hourly.some((item) =>
    HEAVY_RAIN_KEYWORDS.some((keyword) =>
      item.condition.toLowerCase().includes(keyword)
    )
  );

  if (rainDetected) {
    alerts.push({
      title: "Rainfall Activity Expected",
      description:
        "Rain conditions detected in upcoming forecast hours.",
      severity: "MEDIUM",
    });
  }

  return alerts;
}