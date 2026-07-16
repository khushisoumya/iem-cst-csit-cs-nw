import { ShieldCheck, Cpu, Users2 } from "lucide-react";
import building from "../../assets/images/building2.png";
import mca9 from '../../assets/mca9.png'

const highlights = [
  { icon: ShieldCheck, title: "Security-First", text: "Curriculum built around real-world threat models and defense." },
  { icon: Cpu, title: "Hands-On Labs", text: "Dedicated security and network labs for applied practice." },
  { icon: Users2, title: "Industry-Aligned", text: "Curriculum shaped around real hiring and compliance needs." },
];

function AboutIntro() {
  return (
    <section className="bg-gray-50 py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block bg-blue-50 text-brand-blue text-xs font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full mb-4">
            About Us
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy">About Our Department</h2>
          <div className="w-16 h-1 bg-brand-blue rounded-full mx-auto mt-4" />
        </div>

        <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/60 border border-gray-100 overflow-hidden">
          <div className="grid lg:grid-cols-5">
            <div className="lg:col-span-3 p-6 sm:p-8 lg:p-10 flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  The Department of Cyber Security offers a comprehensive program that blends strong
                  computing fundamentals with hands-on, threat-aware training — preparing graduates
                  for careers across security engineering, ethical hacking, and digital defense.
                </p>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  Beyond the classroom, students engage with the department's technical life through
                  hackathons, CTF competitions, security workshops, and industry interactions —
                  building the kind of well-rounded profile employers look for.
                </p>
              </div>
              <div className="grid sm:grid-cols-3 gap-5 pt-6 border-t border-gray-100">
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
            </div>
            <div className="lg:col-span-2 min-h-64 lg:min-h-full">
              <img src={mca9} alt="Department of Cyber Security" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutIntro;