# Weather Forecast & Alert Application

A modern real-time weather intelligence dashboard built using **Next.js**, **TypeScript**, and **OpenWeather API**.

This application provides:
- Live weather updates
- Hourly forecast analytics
- Dynamic weather alert engine
- Interactive forecast visualization
- Climate intelligence insights
- Responsive premium UI

The project is designed with a clean scalable frontend architecture and focuses on transforming raw weather data into meaningful real-time weather intelligence.

---

# Features

## Real-Time Weather Data
Fetches live weather information dynamically using OpenWeather API.

Includes:
- Temperature
- Humidity
- Wind Speed
- Atmospheric Pressure
- Visibility
- Weather Conditions

---

## Dynamic City Search
Search any city worldwide and instantly receive:
- Current weather
- Hourly forecast
- Intelligent weather alerts
- KPI analytics

---

## Hourly Forecast Analytics
Interactive forecast visualization with:
- Dynamic temperature graph
- Hourly forecast cards
- Real-time condition updates

---

## Intelligent Alert Engine
The alert engine analyzes weather conditions and generates meaningful risk alerts such as:

- Extreme Heatwave Warning
- Air Quality Risk
- Driving Visibility Alert
- Humidity Risk
- Rain Threat Detection
- Wind Condition Alerts

Alerts dynamically change based on weather conditions and forecast data.

---

## Premium Responsive UI
Modern UI built with:
- Tailwind CSS
- Framer Motion
- Recharts
- Lucide Icons

Responsive across:
- Desktop
- Tablet
- Mobile

---

# Project Architecture

The project follows a modular scalable frontend architecture.

## Folder Structure

```bash
src/
│
├── app/                # Next.js App Router
│
├── components/         # Reusable UI Components
│   ├── hero/
│   ├── layout/
│   ├── weather/
│   └── ui/
│
├── services/           # API Service Layer
│
├── types/              # TypeScript Interfaces
│
├── hooks/              # Custom React Hooks
│
├── lib/                # Alert Engine & Logic Systems
│
├── utils/              # Utility Functions
│
├── constants/          # Reusable Constants
│
├── styles/             # Global Styling
│
└── data/               # Forecast & Analytics Data
```

---

# Tech Stack

## Frontend
- Next.js 16
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Recharts

## APIs
- OpenWeather API

## Tools
- Git & GitHub
- VS Code

---

# Weather Intelligence System

The application transforms raw API weather data into:
- Forecast analytics
- Dynamic alert generation
- Climate insights
- Risk-based recommendations

This helps users make:
- Travel decisions
- Outdoor activity decisions
- Weather safety decisions

---

# Alert Engine Logic

The alert engine dynamically evaluates:
- Temperature thresholds
- Visibility range
- Humidity levels
- Wind speed
- Forecast conditions

Example:

- High temperature → Heatwave Alert
- Low visibility → Driving Visibility Alert
- High humidity → Humidity Risk
- Poor air conditions → Air Quality Alert

---

# Forecast Visualization

The dashboard includes:
- Interactive hourly temperature graph
- Scrollable hourly weather cards
- Dynamic weather trend visualization

Built using:
- Recharts
- ResponsiveContainer
- AreaChart

---

# Environment Variables

Create:

```bash
frontend/.env.local
```
 or

 ```bash
code ./.env
```

Add:

```env
NEXT_PUBLIC_OPENWEATHER_API_KEY=your_api_key
```

---


# Backend Setup
The project also includes a lightweight Python backend for weather processing and API handling.
Install Python Dependencies

From the root project directory:
```
pip install -r requirements.txt
```

Run Backend Server
Start the backend server using:
```
python main.py
```
The backend server will start locally and handle weather API requests and alert processing.

# Running Full Project

Terminal 1 — Backend
```
python main.py
```

Terminal 2 — Frontend
```
cd frontend
```
```
npm run dev
```

# Application Flow
```
Frontend (Next.js)
        ↓
Python Backend
        ↓
OpenWeather API
        ↓
Processed Weather Intelligence
        ↓
Dynamic Forecast + Alert Engine
```

# Installation

## 1 Clone Repository

```bash
git clone https://github.com/Aniketsatpathy/Weather_Forecast_and_Alert_Applications.git
```

---

## 2 Move Into Frontend

```bash
cd frontend
```

---

## 3 Install Dependencies

```bash
npm install
```

---

## 4 Start Development Server

```bash
npm run dev
```

---

# Future Improvements

Possible future upgrades:
- AQI Map Integration
- Rain Radar Visualization
- Historical Weather Analytics
- AI Weather Recommendation System
- Advanced Climate Dashboard
- Multi-City Comparison

---

# Screenshots

(Add your screenshots here later)

---

# Author

### Aniket Satpathy

Built as an intermediate-level full-stack weather intelligence project focused on:
- frontend architecture
- weather analytics
- responsive UI engineering
- real-time API integration

---

# ⭐ Final Note

This project was built not only as a weather application but also as an exploration into:
- scalable frontend architecture
- intelligent alert systems
- real-time data visualization
- clean UI engineering
