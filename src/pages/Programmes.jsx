import { ArrowRight, Download } from "lucide-react";
import PageHero from "../components/common/PageHero";
import building from "../assets/building2.png";

import p1 from "../assets/bsh27.jpeg"
import p2 from "../assets/mca6.jpg"
import p3 from "../assets/mca8.jpg"
import p4 from "../assets/iem_p2.jpg"


const programs = [
  {
    code: "CS-CYS",
    title: "Computer Science (Cybersecurity)",
    description:
      "A specialized program covering security architecture, ethical hacking, threat intelligence, and digital forensics for protecting modern digital infrastructure.",
    eligibility: "10+2 with Mathematics",
    duration: "4 Years · 8 Semesters",
    degree: "B.Tech, Honours",
    mode: "Full-time, on-campus",
    image: p1,
  },
  {
    code: "CS-NET",
    title: "Computer Science (Networks)",
    description:
      "Focused on network design, protocols, cloud infrastructure, and systems that power connected enterprises and communication technologies.",
    eligibility: "10+2 with Mathematics",
    duration: "4 Years · 8 Semesters",
    degree: "B.Tech, Honours",
    mode: "Full-time, on-campus",
    image: p2,
  },
  {
    code: "CS-TECH",
    title: "Computer Science Technology",
    description:
      "A broad-based applied computing degree spanning software engineering, systems design, and emerging technologies across industry domains.",
    eligibility: "10+2 with Mathematics",
    duration: "4 Years · 8 Semesters",
    degree: "B.Tech",
    mode: "Full-time, on-campus",
    image: p3,
  },
  {
    code: "CSIT",
    title: "Computer Science & Information Technology",
    description:
      "Combines full-stack development, data systems, and enterprise IT solutions to prepare students for versatile technology careers.",
    eligibility: "10+2 with Mathematics",
    duration: "4 Years · 8 Semesters",
    degree: "B.Tech, Honours",
    mode: "Full-time, on-campus",
    image: p4,
  },
];

function ProgramRow({ program, reverse }) {
  return (
    <div
      className={`group grid md:grid-cols-2 gap-8 lg:gap-12 items-center py-10 sm:py-12 ${
        reverse ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-64 sm:h-80">
        <img
          src={program.image}
          alt={program.title}
          className="absolute inset-0 w-full h-full object-cover scale-100 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(11,30,62,0.55),rgba(37,99,235,0.35))] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="absolute bottom-3 left-3 bg-white/95 rounded-lg px-3 py-1.5 text-xs font-semibold text-navy z-10">
          {program.duration.split(" · ")[0]}{" "}
          <span className="text-gray-400 font-normal">{program.duration.split(" · ")[1]}</span>
        </div>
      </div>

      <div>
        <span className="inline-block bg-blue-50 text-brand-blue text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
          {program.code}
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold text-navy leading-snug mb-4">{program.title}</h3>
        <p className="text-gray-500 leading-relaxed mb-6">{program.description}</p>

        <div className="grid grid-cols-2 gap-4 mb-7 text-sm">
          <div>
            <p className="text-[11px] uppercase tracking-wide text-gray-400 mb-1">Eligibility</p>
            <p className="text-navy font-medium">{program.eligibility}</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-wide text-gray-400 mb-1">Duration</p>
            <p className="text-navy font-medium">{program.duration}</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-wide text-gray-400 mb-1">Degree</p>
            <p className="text-navy font-medium">{program.degree}</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-wide text-gray-400 mb-1">Mode</p>
            <p className="text-navy font-medium">{program.mode}</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="https://exam.iem.edu.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-brand-blue hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-md text-white text-sm font-medium px-5 py-3 rounded-md transition-all duration-200"
          >
            Apply Now
            <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 bg-white border border-gray-200 hover:bg-gray-50 text-navy text-sm font-medium px-5 py-3 rounded-full transition-colors duration-200"
          >
            <Download className="w-4 h-4" strokeWidth={2} />
            Syllabus
          </a>
        </div>
      </div>
    </div>
  );
}

function Programmes() {
  return (
    <div>
      <PageHero
        title="Programmes That Launch Careers"
        subtitle="Full-time, industry-aligned degrees under the Institute of Engineering & Management, Kolkata."
      />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 divide-y divide-gray-100">
        {programs.map((program, i) => (
          <ProgramRow key={program.code} program={program} reverse={i % 2 !== 0} />
        ))}
      </section>
    </div>
  );
}

export default Programmes;