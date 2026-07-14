import { ArrowRight } from "lucide-react";

export default function EventCard({
  month,
  day,
  title,
  subtitle,
  description,
}) {
  return (
    <div className="group relative pl-8 pb-10 border-l border-line last:border-transparent last:pb-0">
      <span className="absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full bg-white border-2 border-signal transition-colors duration-300 group-hover:bg-signal" />

      <span className="font-mono text-xs uppercase tracking-[2px] text-signal">
        {month} {day}
      </span>

      <h3 className="mt-2 font-display text-xl font-semibold text-ink">
        {title}
      </h3>

      <p className="text-sm text-body font-sans mt-1">{subtitle}</p>

      {description && (
        <p className="mt-3 text-body leading-7 font-sans">{description}</p>
      )}

      <button className="mt-4 text-signal font-sans font-semibold text-sm flex items-center gap-2 transition-all duration-300 hover:gap-3">
        Learn More
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>
    </div>
  );
}