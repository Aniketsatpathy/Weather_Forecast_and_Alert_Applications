"use client";

import { useEffect, useState } from "react";

import {
  fetchWeather,
  fetchForecast,
} from "../../../services/weather";

import HourlyChart from "../charts/HourlyChart";

import ForecastCard from "../forecast/ForecastCard";

export default function WeatherDashboard() {

  // =========================
  // STATES
  // =========================

  const [city, setCity] = useState("Ahmedabad");

  const [weather, setWeather] = useState<any>(null);

  const [forecast, setForecast] = useState<any>(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");



  // =========================
  // LOAD WEATHER + FORECAST
  // =========================

  async function loadWeatherData(
    searchCity?: string
  ) {

    const cityToSearch =
      searchCity || city;

    setLoading(true);

    setError("");

    try {

      console.log(
        "CALLING WEATHER API"
      );

      const weatherData =
        await fetchWeather(cityToSearch);

      console.log(
        "CALLING FORECAST API"
      );

      const forecastData =
        await fetchForecast(cityToSearch);

      console.log(
        "WEATHER RESPONSE:",
        weatherData
      );

      console.log(
        "FORECAST RESPONSE:",
        forecastData
      );

      setWeather(weatherData);

      setForecast(forecastData);

    } catch (err) {

      console.error(err);

      setError(
        "Failed to fetch weather data"
      );

    } finally {

      setLoading(false);

    }
  }



  // =========================
  // INITIAL LOAD
  // =========================

  useEffect(() => {

    loadWeatherData();

  }, []);



  return (

    <section className="
      bg-[#f5f5f7]
      py-28
      px-6
    ">

      <div className="
        max-w-7xl
        mx-auto
      ">

        {/* ========================= */}
        {/* HEADER */}
        {/* ========================= */}

        <div className="
          text-center
          mb-16
        ">

          <div className="
            uppercase
            tracking-[4px]
            text-[#ff6b00]
            text-sm
            font-semibold
            mb-6
          ">
            Interactive Analytics
          </div>

          <h2 className="
            text-5xl
            md:text-7xl
            font-black
            text-black
            leading-none
          ">
            Live Weather Dashboard
          </h2>

          <p className="
            mt-8
            text-xl
            text-gray-600
            max-w-3xl
            mx-auto
          ">
            Search any city and explore
            real-time weather insights.
          </p>

        </div>



        {/* ========================= */}
        {/* SEARCH */}
        {/* ========================= */}

        <div className="
          max-w-3xl
          mx-auto
          bg-black
          rounded-full
          p-3
          flex
          items-center
          shadow-2xl
          mb-20
        ">

          <input
            type="text"
            value={city}
            onChange={(e) =>
              setCity(e.target.value)
            }
            placeholder="Search city..."
            className="
              flex-1
              bg-transparent
              outline-none
              px-6
              text-white
              text-xl
            "
          />

          <button
            onClick={() =>
              loadWeatherData(city)
            }
            className="
              bg-[#ff6b00]
              hover:bg-orange-600
              text-white
              font-bold
              px-10
              py-5
              rounded-full
              transition-all
            "
          >
            {loading
              ? "Loading..."
              : "Search"}
          </button>

        </div>



        {/* ========================= */}
        {/* ERROR */}
        {/* ========================= */}

        {error && (

          <div className="
            text-center
            text-red-500
            mb-10
          ">
            {error}
          </div>

        )}



        {/* ========================= */}
        {/* WEATHER CARDS */}
        {/* ========================= */}

        {weather && (

          <div className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-8
            mb-16
          ">

            {/* TEMPERATURE */}

            <div className="
              bg-white
              rounded-[32px]
              p-10
              shadow-xl
            ">

              <div className="
                text-[#ff6b00]
                font-bold
                uppercase
                text-sm
                mb-6
              ">
                Temperature
              </div>

              <div className="
                text-7xl
                font-black
                text-black
              ">
                {Math.round(
                  weather.temperature
                )}°
              </div>

              <div className="
                text-gray-500
                mt-4
                text-xl
              ">
                {weather.city}
              </div>

            </div>



            {/* HUMIDITY */}

            <div className="
              bg-white
              rounded-[32px]
              p-10
              shadow-xl
            ">

              <div className="
                text-[#ff6b00]
                font-bold
                uppercase
                text-sm
                mb-6
              ">
                Humidity
              </div>

              <div className="
                text-7xl
                font-black
                text-black
              ">
                {weather.humidity}%
              </div>

              <div className="
                text-gray-500
                mt-4
                text-xl
              ">
                Live atmospheric moisture
              </div>

            </div>



            {/* WIND */}

            <div className="
              bg-white
              rounded-[32px]
              p-10
              shadow-xl
            ">

              <div className="
                text-[#ff6b00]
                font-bold
                uppercase
                text-sm
                mb-6
              ">
                Wind Speed
              </div>

              <div className="
                text-7xl
                font-black
                text-black
              ">
                {weather.wind_speed}
              </div>

              <div className="
                text-gray-500
                mt-4
                text-xl
              ">
                km/h live tracking
              </div>

            </div>

          </div>

        )}



        {/* ========================= */}
        {/* DEBUG */}
        {/* ========================= */}

        <pre className="
          text-xs
          text-black
          mb-10
          overflow-auto
        ">
          {JSON.stringify(
            forecast,
            null,
            2
          )}
        </pre>



        {/* ========================= */}
        {/* FORECAST SECTION */}
        {/* ========================= */}

        {forecast?.hourly?.length > 0 && (

          <div className="
            bg-white
            rounded-[40px]
            p-10
            shadow-2xl
          ">

            <div className="
              flex
              items-center
              justify-between
              mb-10
            ">

              <div>

                <div className="
                  text-[#ff6b00]
                  uppercase
                  text-sm
                  font-bold
                  mb-3
                ">
                  Forecast Analytics
                </div>

                <h3 className="
                  text-5xl
                  font-black
                  text-black
                ">
                  Hourly Forecast
                </h3>

              </div>

            </div>



            {/* CHART */}

            <HourlyChart
              data={forecast.hourly}
            />



            {/* FORECAST CARDS */}

            <div className="
              flex
              gap-6
              overflow-x-auto
              pt-10
            ">

              {forecast.hourly
                .slice(0, 8)
                .map(
                  (
                    item: any,
                    index: number
                  ) => (

                  <ForecastCard
                    key={index}
                    item={item}
                  />

              ))}

            </div>

          </div>

        )}

      </div>

    </section>
  );
}