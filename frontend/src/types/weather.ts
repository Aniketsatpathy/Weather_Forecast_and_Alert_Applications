export interface WeatherData {
  city: string;
  temperature: number;
  humidity: number;
  pressure: number;
  wind_speed: number;
  visibility: number;
  condition: string;
  description: string;
  icon: string;
  lat: number;
  lon: number;
  sunrise: number;
  sunset: number;
}

export interface HourlyForecast {
  time: string;
  temp: number;
  condition: string;
  icon: string;
}

export interface DailyForecast {
  date: string;
  temp: number;
  condition: string;
  icon: string;
}

export interface ForecastData {
  city: string;
  hourly: HourlyForecast[];
  daily: DailyForecast[];
}

export interface AlertData {
  title: string;
  description: string;
  severity: "LOW" | "MEDIUM" | "HIGH";
}