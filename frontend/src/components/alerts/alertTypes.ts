export interface WeatherAlert {

  type: string;

  title: string;

  description: string;

  severity: "low" | "medium" | "high";

}