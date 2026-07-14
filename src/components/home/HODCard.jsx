import { useState } from "react";
import hodImage from "../../assets/images/pdep4.png";
import { ArrowRight, ChevronUp, Quote } from "lucide-react";

function HODCard() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-paper py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="group relative overflow-hidden rounded-2xl bg-white border border-line shadow-[0_10px_30px_rgba(8,31,92,0.08)] hover:shadow-[0_25px_50px_rgba(8,31,92,0.18)] transition-shadow duration-500">
          <div className="h-1.5 w-full bg-ink" />

          <div className="p-8 md:p-10 flex flex-col md:flex-row gap-10">
            <div className="flex-shrink-0 flex flex-col items-center md:items-start">
              <div className="relative overflow-hidden rounded-xl w-40 h-52 ring-4 ring-white shadow-lg shadow-ink/10">
                <img
                  src={hodImage}
                  alt="Prof. Dr. Maumita Chakraborty, Head of the Department"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
              </div>
            </div>

            <div className="flex-1">
              <span className="inline-block font-mono text-[11px] uppercase tracking-[3px] text-ink bg-ink/5 px-3 py-1 rounded-full">
                Head of the Department
              </span>

              <h3 className="mt-3 font-display text-2xl md:text-3xl font-semibold text-ink">
                Prof. Dr. Maumita Chakraborty
              </h3>

              <p className="mt-1 text-body font-medium font-sans">
                Professor & HOD, Cyber Security
              </p>

              <div className="mt-6 relative pl-6 border-l-2 border-ink/20">
                <Quote className="absolute -left-3 -top-1 text-ink/20" size={20} fill="currentColor" />
                <p className="font-display italic text-lg leading-8 text-ink">
                  Welcome to the Department of Cyber Security — dedicated
                  to nurturing future innovators through quality education,
                  research and industry collaboration.
                </p>
              </div>

              <p className="mt-6 text-body leading-7 font-sans">
                The department has experienced and well-qualified faculty
                members, well-equipped laboratories, research facilities and
                all other facilities to nurture the development of young
                engineers.
              </p>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  expanded ? "max-h-[600px] opacity-100 mt-4" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-body leading-7 font-sans">
                  To inculcate excellent problem solving skills, the department
                  always focuses on outcome based education through outcome
                  based teaching and learning process. A large number of
                  students pursue their projects in various departmental
                  laboratories which provides them strong hands-on learning
                  experience.
                </p>

                <p className="mt-4 text-body leading-7 font-sans">
                  The department is continuously growing since its
                  establishment with the motto of preparing the students to
                  excel in the industry and to be successful in higher
                  studies. Innovation and research activities including
                  conferences, seminars and technical talks prepare the
                  students to excel in their career.
                </p>

                <p className="mt-4 text-body leading-7 font-sans">
                  In addition, continuous support and untiring efforts of the
                  Training and Placement Cell help students build successful
                  careers. Apart from academics, the department constantly
                  motivates students to participate in various co-curricular
                  activities including hands-on workshops, technical talks,
                  seminars, technical competitions and start-up activities.
                </p>
              </div>

              <button
                onClick={() => setExpanded(!expanded)}
                className="mt-7 inline-flex items-center gap-2 font-sans font-semibold text-ink bg-ink/5 hover:bg-ink hover:text-white px-4 py-2 rounded-full transition-all duration-300"
              >
                {expanded ? "Show Less" : "Read More"}
                {expanded ? <ChevronUp size={18} /> : <ArrowRight size={18} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HODCard;