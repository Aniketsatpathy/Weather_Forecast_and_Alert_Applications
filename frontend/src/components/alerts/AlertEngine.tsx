{/* ALERT ENGINE */}

<div className="mt-28">

  <p className="text-orange-500 uppercase tracking-[0.2em] font-bold text-sm">
    ALERT ENGINE
  </p>

  <h3 className="text-6xl font-black text-black mt-4">
    Live Risk Alerts
  </h3>

  {/* ALERT CARDS */}

  <div className="grid lg:grid-cols-2 gap-8 mt-16">

    {alerts.map((alert, index) => (

      <div
        key={index}
        className="bg-white rounded-[34px] p-10 shadow-xl border border-black/5"
      >

        <div className="flex gap-6">

          <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center shrink-0">

            <AlertTriangle
              className="text-orange-500"
              size={30}
            />

          </div>

          <div>

            <h4 className="text-4xl font-black text-black">
              {alert.title}
            </h4>

            <p className="text-neutral-600 text-xl leading-relaxed mt-4">
              {alert.description}
            </p>

            <div className="inline-block mt-6 px-5 py-2 rounded-full bg-red-100 text-red-500 font-bold">
              {alert.severity}
            </div>

          </div>

        </div>

      </div>

    ))}

  </div>

  {/* ALERT ANALYTICS KPI GRID */}

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

    {/* VISIBILITY */}

    <div className="bg-white rounded-[34px] p-8 shadow-xl border border-black/5">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-orange-500 uppercase font-bold text-sm">
            VISIBILITY
          </p>

          <h3 className="text-5xl font-black text-black mt-4">
            {weather.visibility}
          </h3>

          <p className="text-neutral-500 mt-3">
            km visibility range
          </p>

        </div>

        <Gauge
          className="text-orange-500"
          size={40}
        />

      </div>

    </div>

    {/* SUNRISE */}

    <div className="bg-white rounded-[34px] p-8 shadow-xl border border-black/5">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-orange-500 uppercase font-bold text-sm">
            SUNRISE
          </p>

          <h3 className="text-3xl font-black text-black mt-4">

            {new Date(
              weather.sunrise * 1000
            ).toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "2-digit",
            })}

          </h3>

          <p className="text-neutral-500 mt-3">
            Morning sunlight
          </p>

        </div>

        <Sun
          className="text-orange-500"
          size={40}
        />

      </div>

    </div>

    {/* SUNSET */}

    <div className="bg-white rounded-[34px] p-8 shadow-xl border border-black/5">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-orange-500 uppercase font-bold text-sm">
            SUNSET
          </p>

          <h3 className="text-3xl font-black text-black mt-4">

            {new Date(
              weather.sunset * 1000
            ).toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "2-digit",
            })}

          </h3>

          <p className="text-neutral-500 mt-3">
            Evening daylight end
          </p>

        </div>

        <Sun
          className="text-orange-500"
          size={40}
        />

      </div>

    </div>

    {/* WEATHER CONDITION */}

    <div className="bg-white rounded-[34px] p-8 shadow-xl border border-black/5">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-orange-500 uppercase font-bold text-sm">
            CONDITION
          </p>

          <h3 className="text-3xl font-black text-black mt-4">
            {weather.condition}
          </h3>

          <p className="text-neutral-500 mt-3">
            Current atmospheric state
          </p>

        </div>

        <CloudRain
          className="text-orange-500"
          size={40}
        />

      </div>

    </div>

  </div>

</div>