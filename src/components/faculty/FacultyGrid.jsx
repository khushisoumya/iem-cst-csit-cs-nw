import FacultyCard from "./FacultyCard";
import faculty from "../../data/faculty";

function FacultyGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#081F5C]">
            Faculty Members
          </h2>

          <p className="mt-3 text-gray-500">
            Meet the dedicated educators driving excellence in our department.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* {faculty.map((item) => (
            <FacultyCard key={item.name} {...item} />
          ))} */}

          {faculty.map((item, index) => (
    <FacultyCard
        key={`${item.name}-${index}`}
        {...item}
    />
))}
        </div>

      </div>
    </section>
  );
}

export default FacultyGrid;