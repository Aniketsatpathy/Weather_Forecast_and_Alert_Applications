interface ForecastCardProps {
  item: any;
}

export default function ForecastCard({
  item,
}: ForecastCardProps) {

  const time = new Date(item.time).toLocaleTimeString([], {
    hour: "numeric",
  });

  return (
    <div className="
      min-w-[120px]
      bg-white
      rounded-[28px]
      border
      border-gray-200
      p-5
      shadow-sm
      hover:shadow-lg
      transition-all
      duration-300
    ">

      <div className="text-gray-500 text-sm mb-4">
        {time}
      </div>

      <div className="flex items-center justify-center mb-4">

        <img
          src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`}
          alt="weather"
          className="w-16 h-16"
        />

      </div>

      <div className="text-center">

        <div className="text-3xl font-bold text-black">
          {Math.round(item.temp)}°
        </div>

        <div className="text-sm text-gray-500 mt-2">
          {item.condition}
        </div>

      </div>

    </div>
  );
}