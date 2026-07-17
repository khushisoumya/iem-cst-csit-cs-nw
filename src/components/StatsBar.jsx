import { Users, GraduationCap, ShieldCheck, Award } from "lucide-react";

const stats = [
  { icon: Users, value: "12+", label: "Faculty Members" },
  { icon: GraduationCap, value: "10+", label: "Years of Excellence" },
  { icon: ShieldCheck, value: "6", label: "Security Labs" },
  { icon: Award, value: "Grade A", label: "NAAC Accreditation" },
];

function StatsBar() {
  return (
    <section className="relative z-10 -mt-8 sm:-mt-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto overflow-hidden bg-white rounded-2xl shadow-lg border border-gray-100 grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-gray-100">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="flex min-h-32 sm:min-h-36 lg:min-h-0 flex-col items-center justify-center gap-3 px-4 sm:px-5 lg:px-6 py-5 sm:py-6 text-center">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-brand-blue" strokeWidth={2} />
              </div>
              <div className="space-y-1">
                <div className="text-navy font-bold text-base sm:text-lg leading-tight">{stat.value}</div>
                <div className="text-gray-500 text-xs sm:text-sm leading-relaxed">{stat.label}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default StatsBar;