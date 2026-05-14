"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import {
  ArrowRight,
  Wind,
  Droplets,
  Gauge,
  CloudRain,
} from "lucide-react";

import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  Tooltip,
} from "recharts";

const hourlyData = [
  { time: "1 PM", temp: 29 },
  { time: "2 PM", temp: 31 },
  { time: "3 PM", temp: 33 },
  { time: "4 PM", temp: 34 },
  { time: "5 PM", temp: 32 },
  { time: "6 PM", temp: 30 },
  { time: "7 PM", temp: 28 },
];

const forecastCards = [
  { time: "1 PM", temp: "29°" },
  { time: "2 PM", temp: "31°" },
  { time: "3 PM", temp: "33°" },
  { time: "4 PM", temp: "34°" },
  { time: "5 PM", temp: "32°" },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden z-0">

      {/* BACKGROUND */}
      <div className="absolute inset-0">

        {/* 
          CHANGE HERO IMAGE HERE:
          public/hero-bg.jpg
        */}
        <Image
          src="/hero-bg.jpg"
          alt="Weather Background"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />

      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col items-center text-center py-56">

            {/* HEADING */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-white font-black leading-[0.90] tracking-[-0.05em] text-5xl md:text-7xl max-w-5xl"
            >
              Build with Weather Data
            </motion.h1>

            {/* SUBTITLE */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-white/90 text-lg md:text-2xl leading-relaxed max-w-3xl mt-10"
            >
              Real-time weather forecasting with immersive visualization and intelligent climate analytics.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex gap-5 mt-12"
            >

              <button className="bg-orange-500 hover:bg-orange-600 transition-all text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-2 shadow-2xl">
                Get Started
                <ArrowRight size={18} />
              </button>

              <button className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all text-white px-8 py-4 rounded-2xl font-semibold">
                Dashboard
              </button>

            </motion.div>

            {/* FLOATING CARDS */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.45 }}
              className="relative mt-24 translate-y-[130px] w-full max-w-6xl grid lg:grid-cols-5 gap-6"
            >

              {/* LEFT CARD */}
              <div className="lg:col-span-2 bg-white rounded-[52px] shadow-[0_20px_80px_rgba(0,0,0,0.18)] border border-black/5 p-6">

                <div className="rounded-[28px] overflow-hidden h-[240px]">

                  {/* 
                    CHANGE WEATHER CARD IMAGE HERE:
                    public/weather-card.jpg
                  */}
                  <Image
                    src="/weather-card.jpg"
                    alt="Clouds"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />

                </div>

                <div className="mt-6">

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-neutral-500 text-sm font-medium">
                        CURRENT WEATHER
                      </p>

                      <h2 className="text-6xl font-black text-neutral-900 mt-2">
                        28°
                      </h2>

                      <p className="text-neutral-600 mt-2">
                        Ahmedabad, India
                      </p>

                    </div>

                    <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center">

                      <CloudRain
                        size={36}
                        className="text-orange-500"
                      />

                    </div>

                  </div>

                  {/* WEATHER STATS */}
                  <div className="grid grid-cols-3 gap-4 mt-8">

                    <div className="bg-neutral-100 rounded-2xl p-4">

                      <Wind
                        className="text-neutral-700 mb-3"
                        size={20}
                      />

                      <p className="text-sm text-neutral-500">
                        Wind
                      </p>

                      <h4 className="text-lg font-bold text-neutral-900">
                        12 km/h
                      </h4>

                    </div>

                    <div className="bg-neutral-100 rounded-2xl p-4">

                      <Droplets
                        className="text-neutral-700 mb-3"
                        size={20}
                      />

                      <p className="text-sm text-neutral-500">
                        Humidity
                      </p>

                      <h4 className="text-lg font-bold text-neutral-900">
                        74%
                      </h4>

                    </div>

                    <div className="bg-neutral-100 rounded-2xl p-4">

                      <Gauge
                        className="text-neutral-700 mb-3"
                        size={20}
                      />

                      <p className="text-sm text-neutral-500">
                        Pressure
                      </p>

                      <h4 className="text-lg font-bold text-neutral-900">
                        1012
                      </h4>

                    </div>

                  </div>

                </div>

              </div>

              {/* RIGHT CARD */}
              <div className="lg:col-span-3 bg-white rounded-[52px] shadow-[0_20px_80px_rgba(0,0,0,0.18)] border border-black/5 p-8">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="text-orange-500 font-semibold text-sm tracking-wide">
                      LIVE ANALYTICS
                    </p>

                    <h2 className="text-5xl font-black text-neutral-900 mt-2">
                      Hourly Forecast
                    </h2>

                  </div>

                  <div className="text-right">

                    <p className="text-neutral-500 text-sm">
                      Temperature Trend
                    </p>

                    <h3 className="text-3xl font-black text-neutral-900">
                      +12%
                    </h3>

                  </div>

                </div>

                {/* CHART */}
                <div className="h-[280px] mt-8 rounded-[28px] bg-neutral-50 border border-neutral-200 p-4">

                  <ResponsiveContainer width="100%" height="100%">

                    <AreaChart data={hourlyData}>

                      <defs>

                        <linearGradient
                          id="colorTemp"
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
                        tick={{
                          fill: "#737373",
                          fontSize: 12,
                        }}
                      />

                      <Tooltip />

                      <Area
                        type="monotone"
                        dataKey="temp"
                        stroke="#f97316"
                        strokeWidth={4}
                        fill="url(#colorTemp)"
                        animationDuration={1800}
                      />

                    </AreaChart>

                  </ResponsiveContainer>

                </div>

                {/* MINI FORECAST CARDS */}
                <div className="flex gap-4 overflow-x-auto mt-6 pb-2">

                  {forecastCards.map((item, index) => (

                    <div
                      key={index}
                      className="min-w-[110px] bg-neutral-100 rounded-2xl p-4 flex flex-col items-center justify-center"
                    >

                      <p className="text-sm text-neutral-500">
                        {item.time}
                      </p>

                      <CloudRain
                        size={22}
                        className="text-orange-500 my-3"
                      />

                      <h4 className="text-xl font-bold text-neutral-900">
                        {item.temp}
                      </h4>

                    </div>

                  ))}

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
}