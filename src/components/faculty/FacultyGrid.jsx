import faculty from "../../data/faculty";

function FacultyGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <p className="font-mono uppercase tracking-[3px] text-[11px] text-signal mb-3">
            {faculty.length} Members
          </p>
          <h2 className="font-display text-4xl font-semibold text-ink">
            Faculty
          </h2>
          <p className="mt-3 text-body font-sans">
            Meet the dedicated educators driving excellence in our
            department.
          </p>
        </div>

        <ol className="divide-y divide-line border-t border-b border-line">
          {faculty.map((item, index) => (
            <li
              key={`${item.name}-${index}`}
              className="group flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 py-5 px-2 hover:pl-4 transition-all duration-300 border-l-2 border-transparent hover:border-signal"
            >
              <span className="font-mono text-sm text-body w-8 flex-shrink-0">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="font-display text-lg text-ink flex-1">
                {item.name}
              </span>
              <span className="font-sans text-xs uppercase tracking-[1.5px] text-body">
                {item.designation}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default FacultyGrid;