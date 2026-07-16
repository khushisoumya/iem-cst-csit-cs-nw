import { ShieldCheck, Cpu, Users2 } from "lucide-react";

const mission = [
  "Deliver quality technical education with strong foundations in security and computing.",
  "Encourage innovation, applied research and entrepreneurship in cybersecurity.",
  "Promote industry collaboration and hands-on, threat-aware learning.",
  "Develop ethical, socially responsible security professionals.",
];

const outcomes = [
  "Strong programming and security analysis skills.",
  "Ability to design and defend secure computing systems.",
  "Proficiency in ethical hacking, forensics and risk assessment.",
  "Excellent communication and cross-functional teamwork.",
  "Professional ethics and lifelong learning attitude.",
];

const highlights = [
  { icon: ShieldCheck, title: "Security-First Curriculum", text: "Coursework built around real-world threat models and defense." },
  { icon: Cpu, title: "Hands-On Labs", text: "Dedicated security and network labs for applied practice." },
  { icon: Users2, title: "Industry-Aligned", text: "Curriculum shaped around real hiring and compliance needs." },
];

function AboutContent() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <p className="uppercase tracking-[3px] text-[11px] text-brand-blue mb-3">
          Department of Cyber Security
        </p>

        <h2 className="text-3xl sm:text-4xl font-semibold text-navy mb-6">
          About the Department
        </h2>

        <p className="text-gray-500 leading-8 max-w-3xl">
          The Department of Cyber Security was established with the vision of creating skilled
          professionals capable of defending real-world digital infrastructure. The department
          emphasizes academic excellence, applied research, and hands-on exposure to modern
          security tools and threat landscapes.
        </p>

        <div className="grid sm:grid-cols-3 gap-5 mt-10 pt-10 border-t border-gray-100">
          {highlights.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex flex-col gap-2.5">
              <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center">
                <Icon className="w-5 h-5 text-brand-blue" strokeWidth={2} />
              </div>
              <h3 className="text-navy font-semibold text-sm">{title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-14 pt-14 border-t border-gray-200">
          <div>
            <h3 className="text-2xl font-semibold text-navy mb-4">Mission</h3>
            <ul className="space-y-4">
              {mission.map((item) => (
                <li key={item} className="flex gap-3 text-gray-500 leading-7">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-blue flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:border-l md:border-gray-200 md:pl-10">
            <h3 className="text-2xl font-semibold text-navy mb-4">Vision</h3>
            <p className="text-gray-500 leading-8">
              To become a nationally recognized department producing competent security
              professionals, innovators and researchers who contribute towards a safer digital
              future.
            </p>
          </div>
        </div>

        <div className="mt-14 pt-14 border-t border-gray-200">
          <h3 className="text-2xl font-semibold text-navy mb-6">Student Outcomes</h3>
          <ol className="grid sm:grid-cols-2 gap-x-10 gap-y-5">
            {outcomes.map((item, index) => (
              <li key={item} className="flex gap-4">
                <span className="text-brand-blue text-sm mt-0.5">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-gray-500 leading-7">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default AboutContent;