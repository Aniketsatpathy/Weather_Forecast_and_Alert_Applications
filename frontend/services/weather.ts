const API_BASE_URL = "http://127.0.0.1:8000";

console.log("WEATHER SERVICE FILE LOADED");

// =========================
// CURRENT WEATHER
// =========================

export async function fetchWeather(city: string) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/weather/${city}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch weather");
    }

    return await response.json();

  } catch (error) {
    console.error("Weather Fetch Error:", error);
    return null;
  }
}



// =========================
// FORECAST
// =========================

export async function fetchForecast(city: string) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/forecast/${city}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch forecast");
    }

    return await response.json();

  } catch (error) {
    console.error("Forecast Fetch Error:", error);
    return null;
  }
}