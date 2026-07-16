import faculty from "../../data/faculty";

function FacultyGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <p className="uppercase tracking-[3px] text-[11px] text-brand-blue mb-3">
            {faculty.length} Members
          </p>
          <h2 className="text-4xl font-semibold text-navy">
            Faculty
          </h2>
          <p className="mt-3 text-gray-500">
            Meet the dedicated educators driving excellence in our
            department.
          </p>
        </div>

        <ol className="divide-y divide-gray-200 border-t border-b border-gray-200">
          {faculty.map((item, index) => (
            <li
              key={`${item.name}-${index}`}
              className="group flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 py-5 px-2 hover:pl-4 transition-all duration-300 border-l-2 border-transparent hover:border-signal/50"
            >
              <span className="text-sm text-gray-500 w-8 flex-shrink-0">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-lg text-navy flex-1">
                {item.name}
              </span>
              <span className="text-xs uppercase tracking-[1.5px] text-gray-500">
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