"use client";

import TemperatureChart from "./TemperatureChart";
import HumidityChart from "./HumidityChart";
import WindChart from "./WindChart";
import PressureChart from "./PressureChart";

interface Props {
  forecast: any;
}

export default function AnalyticsGrid({
  forecast,
}: Props) {

  if (!forecast?.hourly) return null;

  return (

    <section className="mt-20">

      <div className="mb-10">

        <p className="text-orange-500 font-semibold tracking-wide">
          WEATHER ANALYTICS
        </p>

        <h2 className="text-5xl font-black text-neutral-900 mt-3">
          Forecast Intelligence
        </h2>

      </div>

      <div className="grid lg:grid-cols-2 gap-8">

        <TemperatureChart forecast={forecast} />

        <HumidityChart forecast={forecast} />

        <WindChart forecast={forecast} />

        <PressureChart forecast={forecast} />

      </div>

    </section>
  );
}