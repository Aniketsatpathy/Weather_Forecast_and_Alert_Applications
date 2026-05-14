"use client";

import { useEffect, useMemo, useState } from "react";

import {
  Thermometer,
  Droplets,
  Wind,
  Sun,
  AlertTriangle,
  Gauge,
  CloudRain,
} from "lucide-react";

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

import { fetchWeather, fetchForecast } from "../../../services/weather";

import type {
  WeatherData,
  ForecastData,
} from "@/types/weather";

export default function InteractiveSection() {

  const [city, setCity] = useState("Ahmedabad");

  const [weather, setWeather] =
    useState<WeatherData | null>(null);

  const [forecast, setForecast] =
    useState<ForecastData | null>(null);

  const [loading, setLoading] = useState(false);

  /*
  ==========================================
  SEARCH FUNCTION
  ==========================================
  */

  const searchCity = async (searchCity: string) => {

    try {

      setLoading(true);

      const weatherData = await fetchWeather(searchCity);

      const forecastData = await fetchForecast(searchCity);

      setWeather(weatherData);

      setForecast(forecastData);

    } catch (error) {

      console.error("Weather Fetch Error:", error);

    } finally {

      setLoading(false);

    }

  };

  /*
  ==========================================
  INITIAL LOAD
  ==========================================
  */

  useEffect(() => {

    searchCity("Ahmedabad");

  }, []);

  /*
  ==========================================
  CHART DATA
  ==========================================
  */

  const chartData = useMemo(() => {

    if (!forecast) return [];

    return forecast.hourly.slice(0, 8).map((hour) => ({

      time: new Date(hour.time).toLocaleTimeString(
        "en-US",
        {
          hour: "numeric",
        }
      ),

      temp: hour.temp,

    }));

  }, [forecast]);

  /*
  ==========================================
  ALERT ENGINE
  ==========================================
  */

  const alerts = useMemo(() => {

    if (!weather || !forecast) return [];

    const alertList = [];

    const maxForecastTemp = Math.max(
      ...forecast.hourly.map((h) => h.temp)
    );

    /*
    ======================================
    HEAT ALERT
    ======================================
    */

    if (maxForecastTemp >= 40) {

      alertList.push({
        title: "Extreme Heatwave Warning",
        description: `Forecast temperatures may reach ${maxForecastTemp.toFixed(
          1
        )}°. Avoid afternoon outdoor exposure and stay hydrated.`,
        severity: "HIGH",
      });

    } else if (maxForecastTemp >= 34) {

      alertList.push({
        title: "Warm Weather Advisory",
        description:
          "Temperatures are rising during daytime hours. Stay hydrated outdoors.",
        severity: "MEDIUM",
      });

    } else {

      alertList.push({
        title: "Comfortable Temperature",
        description:
          "Temperature conditions are currently stable for outdoor movement.",
        severity: "LOW",
      });

    }

    /*
    ======================================
    AIR QUALITY
    ======================================
    */

    if (
      weather.condition.toLowerCase().includes("smoke") ||
      weather.condition.toLowerCase().includes("haze")
    ) {

      alertList.push({
        title: "Air Quality Risk",
        description:
          "Air quality may affect breathing. Masks recommended outdoors.",
        severity: "HIGH",
      });

    } else {

      alertList.push({
        title: "Air Quality Stable",
        description:
          "Air conditions currently appear normal and breathable.",
        severity: "LOW",
      });

    }

    /*
    ======================================
    VISIBILITY
    ======================================
    */

    if (weather.visibility <= 5) {

      alertList.push({
        title: "Driving Visibility Alert",
        description:
          "Visibility is reduced. Drive carefully and avoid high-speed travel.",
        severity: "MEDIUM",
      });

    } else {

      alertList.push({
        title: "Road Visibility Clear",
        description:
          "Road and travel visibility conditions are currently normal.",
        severity: "LOW",
      });

    }

    /*
    ======================================
    WIND
    ======================================
    */

    if (weather.wind_speed >= 20) {

      alertList.push({
        title: "Strong Wind Advisory",
        description:
          "High wind activity detected. Outdoor operations should remain cautious.",
        severity: "MEDIUM",
      });

    } else {

      alertList.push({
        title: "Wind Conditions Stable",
        description:
          "Wind speed is within a comfortable operational range.",
        severity: "LOW",
      });

    }

    /*
    ======================================
    RAIN
    ======================================
    */

    const rainyHours = forecast.hourly.filter((hour) =>
      hour.condition.toLowerCase().includes("rain")
    );

    if (rainyHours.length >= 3) {

      alertList.push({
        title: "Rainfall Activity Expected",
        description:
          "Forecast indicates continuous rainfall periods in upcoming hours.",
        severity: "MEDIUM",
      });

    } else {

      alertList.push({
        title: "No Rain Threat",
        description:
          "No major rainfall activity detected in current conditions.",
        severity: "LOW",
      });

    }

    /*
    ======================================
    HUMIDITY
    ======================================
    */

    if (weather.humidity >= 80) {

      alertList.push({
        title: "High Humidity",
        description:
          "Humidity levels are high and may feel uncomfortable outdoors.",
        severity: "MEDIUM",
      });

    } else {

      alertList.push({
        title: "Humidity Levels Normal",
        description:
          "Atmospheric moisture levels are currently balanced.",
        severity: "LOW",
      });

    }

    return alertList;

  }, [weather, forecast]);

  /*
  ==========================================
  LOADING STATE
  ==========================================
  */

  if (!weather || !forecast) {

    return (
      <section className="relative py-28 px-6 bg-[#f5f5f5]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-black">
            Loading Weather Intelligence...
          </h2>
        </div>
      </section>
    );

  }

  return (

    <section className="relative py-28 px-6 bg-[#f5f5f5]">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}

        <div className="text-center">

          <p className="text-orange-500 uppercase tracking-[0.2em] font-semibold text-sm">
            INTERACTIVE ANALYTICS
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-black mt-4">
            Live Weather Dashboard
          </h2>

          <p className="text-neutral-600 text-xl leading-relaxed max-w-4xl mx-auto mt-8">
            Search any city and explore real-time weather intelligence,
            climate analytics, and live alert reporting.
          </p>

        </div>

        {/* SEARCH BAR */}

        <div className="flex items-center gap-4 bg-black rounded-[34px] p-4 max-w-3xl mx-auto mt-16 shadow-2xl">

          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Search city..."
            className="flex-1 bg-transparent text-white text-2xl px-6 outline-none"
          />

          <button
            onClick={() => searchCity(city)}
            disabled={loading}
            className="bg-orange-500 hover:bg-orange-600 transition-all text-white font-bold text-xl px-10 py-5 rounded-[24px]"
          >
            {loading ? "Loading..." : "Search"}
          </button>

        </div>

        {/* KPI CARDS */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {/* TEMP */}

          <div className="bg-white rounded-[34px] p-8 shadow-xl border border-black/5">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-orange-500 uppercase font-bold text-sm">
                  TEMPERATURE
                </p>

                <h3 className="text-6xl font-black text-black mt-5">
                  {Math.round(weather.temperature)}°
                </h3>

                <p className="text-neutral-500 mt-4">
                  {weather.city}
                </p>

              </div>

              <Thermometer
                className="text-orange-500"
                size={40}
              />

            </div>

          </div>

          {/* HUMIDITY */}

          <div className="bg-white rounded-[34px] p-8 shadow-xl border border-black/5">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-orange-500 uppercase font-bold text-sm">
                  HUMIDITY
                </p>

                <h3 className="text-6xl font-black text-black mt-5">
                  {weather.humidity}%
                </h3>

                <p className="text-neutral-500 mt-4">
                  Atmospheric moisture
                </p>

              </div>

              <Droplets
                className="text-orange-500"
                size={40}
              />

            </div>

          </div>

          {/* WIND */}

          <div className="bg-white rounded-[34px] p-8 shadow-xl border border-black/5">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-orange-500 uppercase font-bold text-sm">
                  WIND SPEED
                </p>

                <h3 className="text-6xl font-black text-black mt-5">
                  {weather.wind_speed}
                </h3>

                <p className="text-neutral-500 mt-4">
                  km/h tracking
                </p>

              </div>

              <Wind
                className="text-orange-500"
                size={40}
              />

            </div>

          </div>

          {/* PRESSURE */}

          <div className="bg-white rounded-[34px] p-8 shadow-xl border border-black/5">

            <div className="flex items-center justify-between">

              <div>

                <p className="text-orange-500 uppercase font-bold text-sm">
                  PRESSURE
                </p>

                <h3 className="text-6xl font-black text-black mt-5">
                  {weather.pressure}
                </h3>

                <p className="text-neutral-500 mt-4">
                  hPa atmospheric
                </p>

              </div>

              <Sun
                className="text-orange-500"
                size={40}
              />

            </div>

          </div>

        </div>

        {/* FORECAST */}

        <div className="bg-white rounded-[40px] p-12 shadow-2xl border border-black/5 mt-20">

          <p className="text-orange-500 uppercase font-bold tracking-[0.2em] text-sm">
            LIVE FORECAST
          </p>

          <h3 className="text-6xl font-black text-black mt-5">
            Hourly Forecast
          </h3>

          {/* GRAPH */}

          <div className="h-[420px] mt-14">

            <ResponsiveContainer width="100%" height="100%">

              <AreaChart data={chartData}>

                <defs>

                  <linearGradient
                    id="tempGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >

                    <stop
                      offset="0%"
                      stopColor="#f97316"
                      stopOpacity={0.35}
                    />

                    <stop
                      offset="100%"
                      stopColor="#f97316"
                      stopOpacity={0}
                    />

                  </linearGradient>

                </defs>

                <XAxis
                  dataKey="time"
                  axisLine={false}
                  tickLine={false}
                />

                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="temp"
                  stroke="#f97316"
                  strokeWidth={4}
                  fill="url(#tempGradient)"
                />

              </AreaChart>

            </ResponsiveContainer>

          </div>

          {/* MINI FORECAST CARDS */}

          <div className="flex gap-6 overflow-x-auto mt-12 pb-6">

            {forecast.hourly.slice(0, 10).map((hour, index) => (

              <div
                key={index}
                className="min-w-[160px] bg-[#f8f8f8] rounded-[30px] p-8 border border-black/5 shadow-lg"
              >

                <p className="text-neutral-500 text-xl text-center">
                  {new Date(hour.time).toLocaleTimeString(
                    "en-US",
                    {
                      hour: "numeric",
                    }
                  )}
                </p>

                <div className="flex justify-center mt-6">

                  <CloudRain
                    className="text-orange-500"
                    size={34}
                  />

                </div>

                <h4 className="text-6xl font-black text-black text-center mt-6">
                  {Math.round(hour.temp)}°
                </h4>

                <p className="text-neutral-500 text-center mt-4 text-xl">
                  {hour.condition}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* ALERT ENGINE */}

        <div className="mt-28">

          <p className="text-orange-500 uppercase tracking-[0.2em] font-bold text-sm">
            ALERT ENGINE
          </p>

          <h3 className="text-6xl font-black text-black mt-4">
            Live Risk Alerts
          </h3>

          <div className="grid lg:grid-cols-2 gap-8 mt-16">

            {alerts.map((alert, index) => (

              <div
                key={index}
                className="bg-white rounded-[34px] p-10 shadow-xl border border-black/5"
              >

                <div className="flex gap-6">

                  <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center shrink-0">

                    <AlertTriangle
                      className="text-orange-500"
                      size={30}
                    />

                  </div>

                  <div>

                    <h4 className="text-4xl font-black text-black">
                      {alert.title}
                    </h4>

                    <p className="text-neutral-600 text-xl leading-relaxed mt-4">
                      {alert.description}
                    </p>

                    <div className="inline-block mt-6 px-5 py-2 rounded-full bg-red-100 text-red-500 font-bold">
                      {alert.severity}
                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

          {/* ALERT KPIs */}

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

            {/* VISIBILITY */}

            <div className="bg-white rounded-[34px] p-8 shadow-xl border border-black/5">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-orange-500 uppercase font-bold text-sm">
                    VISIBILITY
                  </p>

                  <h3 className="text-5xl font-black text-black mt-4">
                    {weather.visibility}
                  </h3>

                  <p className="text-neutral-500 mt-3">
                    km visibility range
                  </p>

                </div>

                <Gauge
                  className="text-orange-500"
                  size={40}
                />

              </div>

            </div>

            {/* SUNRISE */}

            <div className="bg-white rounded-[34px] p-8 shadow-xl border border-black/5">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-orange-500 uppercase font-bold text-sm">
                    SUNRISE
                  </p>

                  <h3 className="text-3xl font-black text-black mt-4">

                    {new Date(
                      weather.sunrise * 1000
                    ).toLocaleTimeString("en-US", {
                      hour: "numeric",
                      minute: "2-digit",
                    })}

                  </h3>

                  <p className="text-neutral-500 mt-3">
                    Morning sunlight
                  </p>

                </div>

                <Sun
                  className="text-orange-500"
                  size={40}
                />

              </div>

            </div>

            {/* SUNSET */}

            <div className="bg-white rounded-[34px] p-8 shadow-xl border border-black/5">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-orange-500 uppercase font-bold text-sm">
                    SUNSET
                  </p>

                  <h3 className="text-3xl font-black text-black mt-4">

                    {new Date(
                      weather.sunset * 1000
                    ).toLocaleTimeString("en-US", {
                      hour: "numeric",
                      minute: "2-digit",
                    })}

                  </h3>

                  <p className="text-neutral-500 mt-3">
                    Evening daylight end
                  </p>

                </div>

                <Sun
                  className="text-orange-500"
                  size={40}
                />

              </div>

            </div>

            {/* CONDITION */}

            <div className="bg-white rounded-[34px] p-8 shadow-xl border border-black/5">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-orange-500 uppercase font-bold text-sm">
                    CONDITION
                  </p>

                  <h3 className="text-3xl font-black text-black mt-4">
                    {weather.condition}
                  </h3>

                  <p className="text-neutral-500 mt-3">
                    Atmospheric state
                  </p>

                </div>

                <CloudRain
                  className="text-orange-500"
                  size={40}
                />

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}