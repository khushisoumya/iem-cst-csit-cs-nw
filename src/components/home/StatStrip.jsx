import faculty from "../../data/faculty";

const stats = [
  { label: "Established", value: "2021" },
  { label: "Faculty Members", value: String(faculty.length) },
];

function StatStrip() {
  return (
    <section className="bg-white border-b border-line">
      <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center sm:justify-start gap-x-14 gap-y-6 py-8">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-baseline gap-3">
            <span className="font-mono text-3xl font-semibold text-ink">
              {stat.value}
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[2px] text-body">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatStrip;
