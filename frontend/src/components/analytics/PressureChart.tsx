"use client";

import {
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

interface Props {
  forecast: any;
}

export default function PressureChart({
  forecast,
}: Props) {

  const data = forecast.hourly
    .slice(0, 8)
    .map((item: any, index: number) => ({
      time: new Date(item.time)
        .toLocaleTimeString([], {
          hour: "numeric",
        }),

      pressure: 1000 + index * 2,
    }));

  return (

    <div className="bg-neutral-50 border border-neutral-200 rounded-[38px] p-8 shadow-xl">

      <div className="mb-8">

        <p className="text-orange-500 font-semibold">
          PRESSURE
        </p>

        <h3 className="text-3xl font-black text-neutral-900 mt-2">
          Atmospheric Pressure
        </h3>

      </div>

      <div className="h-[300px]">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <LineChart data={data}>

            <XAxis
              dataKey="time"
              axisLine={false}
              tickLine={false}
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="pressure"
              stroke="#111827"
              strokeWidth={4}
              dot={false}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}