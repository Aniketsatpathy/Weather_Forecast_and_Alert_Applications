export function generateAlerts(weather: any, forecast: any) {

  if (!weather) return [];

  const alerts = [];

  const condition =
    weather.condition?.toLowerCase() || "";

  // =========================================
  // FORECAST ANALYSIS
  // =========================================

  const hourlyTemps =
    forecast?.hourly?.map((item: any) => item.temp) || [];

  const maxForecastTemp =
    hourlyTemps.length > 0
      ? Math.max(...hourlyTemps)
      : weather.temperature;

  // =========================================
  // HEAT ALERTS
  // =========================================

  if (maxForecastTemp >= 42) {

    alerts.push({
      title: "Extreme Heatwave Warning",
      description:
        `Forecast temperatures may reach ${Math.round(maxForecastTemp)}°. Avoid direct afternoon exposure and stay hydrated.`,
      severity: "HIGH",
    });

  } else if (maxForecastTemp >= 36) {

    alerts.push({
      title: "High Temperature Advisory",
      description:
        `Forecast temperatures may reach ${Math.round(maxForecastTemp)}°. Limit prolonged outdoor activity.`,
      severity: "MEDIUM",
    });

  } else {

    alerts.push({
      title: "Comfortable Temperature",
      description:
        "Temperature conditions are currently stable for outdoor movement.",
      severity: "LOW",
    });
  }

  // =========================================
  // AIR QUALITY
  // =========================================

  if (
    condition.includes("smoke") ||
    condition.includes("haze")
  ) {

    alerts.push({
      title: "Air Quality Risk",
      description:
        "Air quality may affect breathing. Masks recommended outdoors.",
      severity: "HIGH",
    });

  } else {

    alerts.push({
      title: "Air Quality Stable",
      description:
        "Air conditions currently appear normal and breathable.",
      severity: "LOW",
    });
  }

  // =========================================
  // VISIBILITY
  // =========================================

  if (weather.visibility <= 4) {

    alerts.push({
      title: "Driving Visibility Alert",
      description:
        "Visibility is reduced. Drive carefully and avoid high-speed travel.",
      severity: "MEDIUM",
    });

  } else {

    alerts.push({
      title: "Road Visibility Clear",
      description:
        "Road and travel visibility conditions are currently normal.",
      severity: "LOW",
    });
  }

  // =========================================
  // WIND
  // =========================================

  if (weather.wind_speed >= 20) {

    alerts.push({
      title: "Strong Wind Advisory",
      description:
        "Strong winds detected. Outdoor activities may be affected.",
      severity: "MEDIUM",
    });

  } else {

    alerts.push({
      title: "Wind Conditions Stable",
      description:
        "Wind speed is within a comfortable operational range.",
      severity: "LOW",
    });
  }

  // =========================================
  // RAIN
  // =========================================

  const hasRainForecast =
    forecast?.hourly?.some((item: any) =>
      item.condition?.toLowerCase().includes("rain")
    );

  if (
    condition.includes("rain") ||
    hasRainForecast
  ) {

    alerts.push({
      title: "Rainfall Advisory",
      description:
        "Rain conditions are expected within upcoming forecast hours.",
      severity: "MEDIUM",
    });

  } else {

    alerts.push({
      title: "No Rain Threat",
      description:
        "No major rainfall activity detected in current conditions.",
      severity: "LOW",
    });
  }

  // =========================================
  // HUMIDITY
  // =========================================

  if (weather.humidity >= 80) {

    alerts.push({
      title: "High Humidity",
      description:
        "Humidity levels are high and may feel uncomfortable outdoors.",
      severity: "MEDIUM",
    });

  } else {

    alerts.push({
      title: "Humidity Levels Normal",
      description:
        "Atmospheric moisture levels are currently balanced.",
      severity: "LOW",
    });
  }

  return alerts;
}