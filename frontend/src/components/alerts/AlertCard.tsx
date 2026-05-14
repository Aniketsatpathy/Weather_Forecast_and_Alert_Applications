"use client";

import { motion } from "framer-motion";

interface Alert {
  severity: "low" | "medium" | "high";
  type: string;
  title: string;
  description: string;
}

interface Props {
  alert: Alert;
  index: number;
}

export default function AlertCard({
  alert,
  index,
}: Props) {

  const severityStyles = {

    low: "border-blue-200 bg-blue-50",

    medium: "border-orange-200 bg-orange-50",

    high: "border-red-200 bg-red-50",

  };

  return (

    <motion.div

      initial={{
        opacity: 0,
        y: 50,
      }}

      whileInView={{
        opacity: 1,
        y: 0,
      }}

      viewport={{ once: true }}

      transition={{
        delay: index * 0.1,
        duration: 0.6,
      }}

      className={`
        rounded-[32px]
        border
        p-7
        shadow-lg
        ${severityStyles[alert.severity]}
      `}
    >

      <div className="flex items-start justify-between">

        <div>

          <p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
            {alert.type}
          </p>

          <h3 className="text-2xl font-black text-neutral-900 mt-3">
            {alert.title}
          </h3>

        </div>

        <div
          className={`
            px-4
            py-2
            rounded-full
            text-sm
            font-semibold

            ${
              alert.severity === "high"
                ? "bg-red-500 text-white"
                : alert.severity === "medium"
                ? "bg-orange-500 text-white"
                : "bg-blue-500 text-white"
            }
          `}
        >
          {alert.severity}
        </div>

      </div>

      <p className="text-neutral-700 leading-relaxed mt-6">
        {alert.description}
      </p>

    </motion.div>
  );
}