"use client";

import { useState } from "react";

import {
  fetchWeather,
  fetchForecast,
} from "../../services/weather";

import {
  WeatherData,
  ForecastData,
  AlertData,
} from "../types/weather";

import { generateAlerts }
from "../utils/alertUtils";

export function useWeather() {

  const [weather, setWeather] =
    useState<WeatherData | null>(null);

  const [forecast, setForecast] =
    useState<ForecastData | null>(null);

  const [alerts, setAlerts] =
    useState<AlertData[]>([]);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  async function searchCity(city: string) {

    try {

      setLoading(true);
      setError("");

      const weatherData =
        await fetchWeather(city);

      const forecastData =
        await fetchForecast(city);

      setWeather(weatherData);
      setForecast(forecastData);

      const dynamicAlerts =
        generateAlerts(
          weatherData,
          forecastData
        );

      setAlerts(dynamicAlerts);

    } catch (err) {

      setError("Failed to fetch weather");

    } finally {

      setLoading(false);

    }
  }

  return {
    weather,
    forecast,
    alerts,
    loading,
    error,
    searchCity,
  };
}