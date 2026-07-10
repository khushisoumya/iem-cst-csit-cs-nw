

import { useState } from "react";
import hodImage from "../../assets/images/pdep4.png";
import { ArrowRight, ChevronUp } from "lucide-react";

function HODCard() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-white py-14">
      <div className="max-w-5xl mx-auto px-6">

        <div className="group premium-card p-8 shadow-lg flex flex-col md:flex-row gap-8">

          {/* HOD Image */}
          <div className="overflow-hidden rounded-xl flex-shrink-0">
            <img
              src={hodImage}
              alt="HOD"
              className="w-36 h-44 object-cover transition-all duration-500 group-hover:scale-110"
            />
          </div>

          {/* Content */}
          <div className="flex-1">

            <h2 className="text-2xl font-bold text-[#081F5C] transition-colors duration-500">
              Head of the Department
            </h2>

            <h3 className="mt-2 text-xl font-semibold transition-colors duration-500">
              Prof. Dr. Maumita Chakraborty
            </h3>

            <p className="mt-1 text-blue-600 font-medium transition-colors duration-500">
              Professor & HOD, CST & CSIT
            </p>

            <p className="mt-5 text-gray-600 leading-8 transition-colors duration-500">
              Welcome to the Department of Computer Science and Engineering and
              Computer Science & Information Technology. Our department is
              dedicated to nurturing future innovators through quality
              education, research and industry collaboration.
            </p>

            <p className="mt-4 text-gray-600 leading-8 transition-colors duration-500">
              It is a great pleasure to welcome you to the Department of
              Computer Science and Technology (CST) & Computer Science and
              Information Technology (CSIT). The department has experienced and
              well-qualified faculty members, well-equipped laboratories,
              research facilities and all other facilities to nurture the
              development of young engineers.
            </p>

            {/* Expandable Content */}
            <div
              className={`overflow-hidden transition-all duration-500 ${
                expanded ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600 leading-8 transition-colors duration-500">
                To inculcate excellent problem solving skills, the department
                always focuses on outcome based education through outcome based
                teaching and learning process. A large number of students pursue
                their projects in various departmental laboratories which
                provides them strong hands-on learning experience.
              </p>

              <p className="mt-4 text-gray-600 leading-8 transition-colors duration-500">
                The department is continuously growing since its establishment
                with the motto of preparing the students to excel in the
                industry and to be successful in higher studies. Innovation and
                research activities including conferences, seminars and
                technical talks prepare the students to excel in their career.
              </p>

              <p className="mt-4 text-gray-600 leading-8 transition-colors duration-500">
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
              className="
                mt-7
                inline-flex
                items-center
                gap-2
                font-semibold
                text-[#2563EB]
                transition-all
                duration-300
                group-hover:text-white
                hover:gap-3
              "
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