import { useState } from "react";
import { Quote, ArrowRight, ChevronUp } from "lucide-react";
import hodImage from "../../assets/images/pdep4.png";

function AboutHOD() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-gradient-to-b from-white via-blue-50/30 to-white py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block bg-blue-50 text-brand-blue text-xs font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full mb-4">
            About Us
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy">Message From HOD</h2>
          <div className="w-16 h-1 bg-brand-blue rounded-full mx-auto mt-4" />
        </div>

        <div className="relative bg-white rounded-2xl border border-gray-100 shadow-xl shadow-blue-100/50 p-6 sm:p-8 lg:p-10 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-blue via-navy to-brand-blue" />
          <Quote
            className="absolute -top-2 right-4 sm:right-6 w-24 h-24 sm:w-32 sm:h-32 text-blue-50 -scale-x-100"
            strokeWidth={0}
            fill="currentColor"
          />

          <div className="relative flex flex-col sm:flex-row gap-8">
            <div className="flex flex-col items-center shrink-0 text-center">
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden ring-4 ring-blue-50">
                <img
                  src={hodImage}
                  alt="Prof. Dr. Maumita Chakraborty"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-navy font-semibold text-sm mt-4">Prof. Dr. Maumita Chakraborty</p>
              <p className="text-gray-400 text-xs mt-0.5">Professor &amp; HOD, Cyber Security</p>
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-justify [text-justify:inter-word]">
                Welcome to the Department of Cyber Security — dedicated to nurturing future
                innovators through quality education, research and industry collaboration. The
                department has experienced and well-qualified faculty members, well-equipped
                laboratories, research facilities and all other facilities to nurture the
                development of young engineers.
              </p>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  expanded ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-justify [text-justify:inter-word]">
                  To inculcate excellent problem solving skills, the department always focuses on
                  outcome based education through outcome based teaching and learning process. A
                  large number of students pursue their projects in various departmental
                  laboratories which provides them strong hands-on learning experience.
                </p>
                <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed text-justify [text-justify:inter-word]">
                  Apart from academics, the department constantly motivates students to
                  participate in various co-curricular activities including hands-on workshops,
                  technical talks, seminars, technical competitions and start-up activities.
                </p>
              </div>

              <button
                onClick={() => setExpanded(!expanded)}
                className="mt-6 inline-flex items-center gap-2 self-start font-semibold text-navy bg-navy/5 hover:bg-navy hover:text-white px-4 py-2 rounded-full transition-all duration-300 text-sm"
              >
                {expanded ? "Show Less" : "Read More"}
                {expanded ? <ChevronUp size={16} /> : <ArrowRight size={16} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHOD;