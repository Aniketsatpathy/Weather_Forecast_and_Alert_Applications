"use client";

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

interface Props {
  forecast: any;
}

export default function TemperatureChart({
  forecast,
}: Props) {

  const data = forecast.hourly
    .slice(0, 8)
    .map((item: any) => ({
      time: new Date(item.time)
        .toLocaleTimeString([], {
          hour: "numeric",
        }),

      temp: Math.round(item.temp),
    }));

  return (

    <div className="bg-neutral-50 border border-neutral-200 rounded-[38px] p-8 shadow-xl">

      <div className="mb-8">

        <p className="text-orange-500 font-semibold">
          TEMPERATURE
        </p>

        <h3 className="text-3xl font-black text-neutral-900 mt-2">
          Temperature Trend
        </h3>

      </div>

      <div className="h-[300px]">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <AreaChart data={data}>

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
                  stopOpacity={0.4}
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
              animationDuration={1800}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}