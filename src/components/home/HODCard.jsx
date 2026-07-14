import { useState } from "react";
import hodImage from "../../assets/images/pdep4.png";
import { ArrowRight, ChevronUp } from "lucide-react";

function HODCard() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-paper py-20">
      <div className="max-w-5xl mx-auto px-6">
        <div className="group premium-card p-8 md:p-10 shadow-lg flex flex-col md:flex-row gap-10">
          <div className="flex-shrink-0 flex flex-col items-center md:items-start">
            <div className="relative overflow-hidden rounded-lg w-40 h-52 border-l-2 border-signal">
              <img
                src={hodImage}
                alt="Prof. Dr. Maumita Chakraborty, Head of the Department"
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
              />
            </div>
          </div>

          <div className="flex-1">
            <p className="font-mono text-[11px] uppercase tracking-[3px] text-signal transition-colors duration-500 group-hover:text-blue-200">
              Head of the Department
            </p>

            <h3 className="mt-2 font-display text-2xl md:text-3xl font-semibold text-ink transition-colors duration-500">
              Prof. Dr. Maumita Chakraborty
            </h3>

            <p className="mt-1 text-signal font-medium font-sans transition-colors duration-500 group-hover:text-blue-200">
              Professor & HOD, Cyber Security
            </p>

            <p className="mt-6 font-display italic text-lg leading-8 text-ink transition-colors duration-500 group-hover:text-white">
              &ldquo;Welcome to the Department of Cyber Security — dedicated
              to nurturing future innovators through quality education,
              research and industry collaboration.&rdquo;
            </p>

            <p className="mt-5 text-body leading-7 font-sans transition-colors duration-500">
              The department has experienced and well-qualified faculty
              members, well-equipped laboratories, research facilities and
              all other facilities to nurture the development of young
              engineers.
            </p>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                expanded
                  ? "max-h-[600px] opacity-100 mt-4"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-body leading-7 font-sans transition-colors duration-500">
                To inculcate excellent problem solving skills, the department
                always focuses on outcome based education through outcome
                based teaching and learning process. A large number of
                students pursue their projects in various departmental
                laboratories which provides them strong hands-on learning
                experience.
              </p>

              <p className="mt-4 text-body leading-7 font-sans transition-colors duration-500">
                The department is continuously growing since its
                establishment with the motto of preparing the students to
                excel in the industry and to be successful in higher
                studies. Innovation and research activities including
                conferences, seminars and technical talks prepare the
                students to excel in their career.
              </p>

              <p className="mt-4 text-body leading-7 font-sans transition-colors duration-500">
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
              className="mt-7 inline-flex items-center gap-2 font-sans font-semibold text-signal transition-all duration-300 group-hover:text-white hover:gap-3"
            >
              {expanded ? "Show Less" : "Read More"}
              {expanded ? (
                <ChevronUp size={18} />
              ) : (
                <ArrowRight size={18} />
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HODCard;
