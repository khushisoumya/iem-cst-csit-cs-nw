

import { Clock, ArrowRight } from "lucide-react";

export default function EventCard({ month, day, title, subtitle, description, image }) {
  return (
    <div className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-[0_10px_30px_rgba(8,31,92,0.06)] hover:shadow-[0_20px_40px_rgba(8,31,92,0.14)] transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-44 bg-navy/5">
        {image ? (
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-navy/20 text-3xl">
            {month} {day}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />

        <div className="absolute top-3 left-3 bg-white/95 rounded-lg w-12 h-12 flex flex-col items-center justify-center">
          <span className="text-navy text-[10px] font-semibold">{month}</span>
          <span className="text-navy text-base font-bold leading-none">{day}</span>
        </div>

        <h3 className="absolute bottom-3 left-4 right-4 text-white font-semibold text-base leading-snug">
          {title}
        </h3>
      </div>

      <div className="p-6 pt-4">
        <span className="flex items-center gap-2 text-gray-500 text-xs mb-3">
          <Clock className="w-3.5 h-3.5 shrink-0" strokeWidth={2} />
          {subtitle}
        </span>

        {description && (
          <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
        )}

        <button className="mt-4 text-navy font-semibold text-sm flex items-center gap-2 transition-all duration-300 hover:gap-3">
          Learn More
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}