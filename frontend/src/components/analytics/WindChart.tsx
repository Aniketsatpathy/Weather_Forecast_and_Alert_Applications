"use client";

import {
  BarChart,
  Bar,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

interface Props {
  forecast: any;
}

export default function WindChart({
  forecast,
}: Props) {

  const data = forecast.hourly
    .slice(0, 8)
    .map((item: any, index: number) => ({
      time: new Date(item.time)
        .toLocaleTimeString([], {
          hour: "numeric",
        }),

      wind: 6 + index,
    }));

  return (

    <div className="bg-neutral-50 border border-neutral-200 rounded-[38px] p-8 shadow-xl">

      <div className="mb-8">

        <p className="text-orange-500 font-semibold">
          WIND
        </p>

        <h3 className="text-3xl font-black text-neutral-900 mt-2">
          Wind Analytics
        </h3>

      </div>

      <div className="h-[300px]">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <BarChart data={data}>

            <XAxis
              dataKey="time"
              axisLine={false}
              tickLine={false}
            />

            <Tooltip />

            <Bar
              dataKey="wind"
              radius={[10, 10, 0, 0]}
              fill="#f97316"
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}