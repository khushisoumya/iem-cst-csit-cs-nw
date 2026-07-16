import { Link } from "react-router-dom";
import { Shield, Wifi, Cpu, Code2, ArrowRight } from "lucide-react";
import building from "../../assets/images/building2.png";

const programs = [
  {
    icon: Shield,
    title: "Computer Science (Cybersecurity)",
    summary: "Security architecture, ethical hacking, and threat defense for the modern enterprise.",
    image: building,
  },
  {
    icon: Wifi,
    title: "Computer Science (Networks)",
    summary: "Network design, protocols, and infrastructure powering connected systems.",
    image: building,
  },
  {
    icon: Cpu,
    title: "Computer Science Technology",
    summary: "Applied computing foundations across software, systems, and emerging tech.",
    image: building,
  },
  {
    icon: Code2,
    title: "Computer Science & Information Technology",
    summary: "Full-stack development, data systems, and enterprise IT solutions.",
    image: building,
  },
];

function ProgramCard({ icon: Icon, title, summary, image }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 sm:p-8 min-h-[220px] flex flex-col shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full scale-110 object-cover opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(11,30,62,0.92),rgba(37,99,235,0.80))] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10 flex flex-col flex-1">
        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-white/10">
          <Icon className="w-6 h-6 text-brand-blue transition-colors duration-300 group-hover:text-white" strokeWidth={2} />
        </div>

        <h3 className="mt-5 text-lg sm:text-xl font-bold text-navy leading-snug transition-colors duration-300 group-hover:text-white">
          {title}
        </h3>

        <p className="mt-3 text-sm text-gray-500 leading-relaxed flex-1 transition-colors duration-300 group-hover:text-white/90">
          {summary}
        </p>
      </div>
    </div>
  );
}

function ProgramsOffered() {
  return (
    <section className="bg-gray-50 py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block bg-blue-50 text-brand-blue text-xs font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full mb-3">
            Programs Offered
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy">Choose Your Specialization</h2>
          <div className="w-16 h-1 bg-brand-blue rounded-full mx-auto mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {programs.map((program) => (
            <ProgramCard key={program.title} {...program} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link
            to="/programmes"
            className="inline-flex items-center gap-1.5 bg-brand-blue hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-md text-white text-sm font-medium px-5 py-3 rounded-md transition-all duration-200"
          >
            Explore Our Programmes
            <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ProgramsOffered;