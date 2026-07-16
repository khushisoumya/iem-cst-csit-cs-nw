import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import faculty from "../../data/faculty";

function Faculty() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: direction === "left" ? -260 : 260, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block bg-blue-50 text-brand-blue text-xs font-medium px-3 py-1.5 rounded-full mb-4">
            Our Team
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy">Distinguished Faculty</h2>
          <p className="text-gray-500 text-sm sm:text-base mt-3">
            Meet the experts who guide and nurture our students towards excellence
          </p>
        </div>

        <div className="grid lg:hidden grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          {faculty.map((member) => (
            <div key={member.name} className="rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <img src={member.photo} alt={member.name} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h4 className="text-navy font-semibold text-sm sm:text-base">{member.name}</h4>
                <p className="text-gray-500 text-xs sm:text-sm mt-1">{member.designation}</p>
                <p className="text-gray-400 text-xs sm:text-sm">{member.qualification}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative hidden lg:flex items-center gap-3">
          <button onClick={() => scroll("left")} className="flex w-9 h-9 rounded-full border border-gray-200 items-center justify-center shrink-0 hover:bg-gray-50 transition-colors" aria-label="Scroll left">
            <ChevronLeft className="w-4 h-4 text-navy" strokeWidth={2} />
          </button>

          <div ref={scrollRef} className="flex gap-5 overflow-x-hidden scroll-smooth">
            {faculty.map((member) => (
              <div key={member.name} className="shrink-0 w-[220px] xl:w-[232px] rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <img src={member.photo} alt={member.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h4 className="text-navy font-semibold text-sm">{member.name}</h4>
                  <p className="text-gray-500 text-xs mt-1">{member.designation}</p>
                  <p className="text-gray-400 text-xs">{member.qualification}</p>
                </div>
              </div>
            ))}
          </div>

          <button onClick={() => scroll("right")} className="flex w-9 h-9 rounded-full border border-gray-200 items-center justify-center shrink-0 hover:bg-gray-50 transition-colors" aria-label="Scroll right">
            <ChevronRight className="w-4 h-4 text-navy" strokeWidth={2} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Faculty;