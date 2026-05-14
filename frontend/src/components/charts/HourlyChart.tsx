"use client";

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  Tooltip,
} from "recharts";

interface HourlyChartProps {
  data: any[];
}

export default function HourlyChart({
  data,
}: HourlyChartProps) {

  if (!data || data.length === 0) {
    return (
      <div className="h-[260px] flex items-center justify-center text-gray-400">
        No Forecast Data
      </div>
    );
  }

  const formattedData = data.map((item) => ({
    time: new Date(item.time).toLocaleTimeString([], {
      hour: "numeric",
    }),

    temp: Math.round(item.temp),
  }));

  return (
    <div className="w-full h-[260px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={formattedData}>

          <defs>
            <linearGradient
              id="colorTemp"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="5%"
                stopColor="#ff6b00"
                stopOpacity={0.4}
              />

              <stop
                offset="95%"
                stopColor="#ff6b00"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="time"
            tickLine={false}
            axisLine={false}
            tick={{
              fill: "#777",
              fontSize: 12,
            }}
          />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="temp"
            stroke="#ff6b00"
            fillOpacity={1}
            fill="url(#colorTemp)"
            strokeWidth={3}
          />

        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}