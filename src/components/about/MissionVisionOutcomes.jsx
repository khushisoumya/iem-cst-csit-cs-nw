import { Target, Eye, CheckCircle2 } from "lucide-react";

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

function MissionVisionOutcomes() {
  return (
    <section className="bg-gray-50 py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block bg-blue-50 text-brand-blue text-xs font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full mb-4">
            Our Direction
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy">Mission, Vision &amp; Outcomes</h2>
          <div className="w-16 h-1 bg-brand-blue rounded-full mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="premium-card p-6 sm:p-8">
            <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
              <Target className="w-5 h-5 text-brand-blue" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-semibold text-navy mb-4">Mission</h3>
            <ul className="space-y-3">
              {mission.map((item) => (
                <li key={item} className="flex gap-3 text-gray-500 text-sm leading-6">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-blue flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="premium-card p-6 sm:p-8">
            <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
              <Eye className="w-5 h-5 text-brand-blue" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-semibold text-navy mb-4">Vision</h3>
            <p className="text-gray-500 text-sm leading-7">
              To become a nationally recognized department producing competent security
              professionals, innovators and researchers who contribute towards a safer digital
              future.
            </p>
          </div>
        </div>

        <div className="premium-card p-6 sm:p-8">
          <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
            <CheckCircle2 className="w-5 h-5 text-brand-blue" strokeWidth={2} />
          </div>
          <h3 className="text-xl font-semibold text-navy mb-5">Student Outcomes</h3>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {outcomes.map((item, index) => (
              <div key={item} className="flex gap-3">
                <span className="text-brand-blue text-sm font-semibold mt-0.5 shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-gray-500 text-sm leading-6">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionVisionOutcomes;