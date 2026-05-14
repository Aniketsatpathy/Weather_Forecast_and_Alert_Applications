import {
  Wind,
  Droplets,
  Eye
} from "lucide-react";

export default function WeatherCard({

  current

}: any) {

  if (!current) return null;

  return (

    <div
      className="
        bg-white/70
        backdrop-blur-lg
        rounded-[40px]
        p-6
        shadow-xl
        border
        border-white/30
      "
    >

      {/* IMAGE SECTION */}

      <div
        className="
          relative
          rounded-[30px]
          overflow-hidden
          h-[320px]
        "
      >

        <img
          src="/clouds.jpg"
          alt="weather"
          className="
            w-full
            h-full
            object-cover
          "
        />

        {/* OVERLAY */}

        <div
          className="
            absolute
            inset-0
            bg-black/20
          "
        />

        {/* TEXT */}

        <div
          className="
            absolute
            bottom-6
            left-6
            text-white
          "
        >

          <h2
            className="
              text-6xl
              font-bold
            "
          >
            {Math.round(current.temperature)}°
          </h2>

          <p
            className="
              text-3xl
              mt-2
              capitalize
            "
          >
            {current.condition}
          </p>

        </div>

      </div>

      {/* METRICS */}

      <div
        className="
          grid
          grid-cols-3
          gap-4
          mt-6
        "
      >

        <MetricCard
          icon={<Wind />}
          label="Wind"
          value={`${current.wind_speed} km/h`}
        />

        <MetricCard
          icon={<Droplets />}
          label="Humidity"
          value={`${current.humidity}%`}
        />

        <MetricCard
          icon={<Eye />}
          label="Visibility"
          value={`${current.visibility} km`}
        />

      </div>

    </div>
  );
}

function MetricCard({

  icon,
  label,
  value

}: any) {

  return (

    <div
      className="
        bg-white/60
        rounded-3xl
        p-4
        text-center
      "
    >

      <div
        className="
          flex
          justify-center
        "
      >
        {icon}
      </div>

      <p
        className="
          mt-2
          text-sm
          text-gray-500
        "
      >
        {label}
      </p>

      <p
        className="
          font-semibold
          mt-1
        "
      >
        {value}
      </p>

    </div>
  );
}