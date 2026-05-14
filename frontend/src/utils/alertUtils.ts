import {
  WeatherData,
  ForecastData,
} from "../types/weather";

import { calculateRisks }
from "./riskEngine";

export function generateAlerts(
  weather: WeatherData,
  forecast: ForecastData
) {
  return calculateRisks(weather, forecast);
}