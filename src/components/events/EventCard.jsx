import { ArrowRight } from "lucide-react";

export default function EventCard({
  month,
  day,
  title,
  subtitle,
  description,
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex gap-6">

      <div className="bg-[#0F4CC9] text-white rounded-lg w-16 h-20 flex flex-col justify-center items-center flex-shrink-0">

        <span className="text-xs font-semibold">
          {month}
        </span>

        <span className="text-2xl font-bold">
          {day}
        </span>

      </div>

      <div className="flex-1">

        <h3 className="text-xl font-semibold text-[#081F5C]">
          {title}
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          {subtitle}
        </p>

        {description && (
          <p className="mt-4 text-gray-600 leading-7">
            {description}
          </p>
        )}

        <button className="mt-5 text-[#2563EB] font-semibold flex items-center gap-2">
          Learn More
          <ArrowRight size={16} />
        </button>

      </div>
    </div>
  );
}