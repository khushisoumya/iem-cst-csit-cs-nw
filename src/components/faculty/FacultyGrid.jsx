import { Mail, User, GraduationCap, FileText, ArrowRight } from "lucide-react";
import faculty from "../../data/faculty";

function FacultyGrid() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-14 lg:pb-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {faculty.map((member) => (
          <div
            key={member.name}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            <img src={member.photo} alt={member.name} className="w-full h-56 object-cover" />
            <div className="p-5">
              <h3 className="text-navy font-bold text-base">{member.name}</h3>
              <p className="text-brand-blue text-sm font-medium mt-0.5">{member.designation}</p>

              <div className="flex flex-wrap gap-x-2 gap-y-1 mt-3 text-gray-500 text-xs">
                {member.tags.map((tag, i) => (
                  <span key={tag} className="flex items-center gap-2">
                    {tag}
                    {i < member.tags.length - 1 && <span className="text-gray-300">|</span>}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 mt-4">
                {[Mail, User, GraduationCap, FileText].map((Icon, i) => (
                  <button
                    key={i}
                    className="w-9 h-9 rounded-lg bg-gray-50 hover:bg-gray-100 flex items-center justify-center transition-colors"
                    aria-label="Faculty action"
                  >
                    <Icon className="w-4 h-4 text-gray-500" strokeWidth={2} />
                  </button>
                ))}
                <button
                  className="w-9 h-9 rounded-lg bg-navy hover:bg-navy-light flex items-center justify-center transition-colors ml-auto"
                  aria-label="View profile"
                >
                  <ArrowRight className="w-4 h-4 text-white" strokeWidth={2} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FacultyGrid;