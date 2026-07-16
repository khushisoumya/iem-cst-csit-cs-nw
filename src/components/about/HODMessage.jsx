import { Quote } from "lucide-react";
import hodImage from "../../assets/images/pdep4.png";

function HODMessage() {
  return (
    <section className="bg-gradient-to-b from-white via-blue-50/30 to-white py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block bg-blue-50 text-brand-blue text-xs font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full mb-4">
            Leadership
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy">Message from HOD</h2>
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
                <img src={hodImage} alt="Prof. Dr. Maumita Chakraborty" className="w-full h-full object-cover" />
              </div>
              <p className="text-navy font-semibold text-sm mt-4">Prof. Dr. Maumita Chakraborty</p>
              <p className="text-gray-400 text-xs mt-0.5">Professor &amp; HOD, Cyber Security</p>
            </div>
            <div className="flex-1 flex flex-col justify-center gap-4">
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-justify [text-justify:inter-word]">
                Welcome to the Department of Cyber Security — dedicated to nurturing future
                innovators through quality education, research and industry collaboration. Our
                faculty, laboratories, and research facilities are built to nurture the development
                of young security professionals.
              </p>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed text-justify [text-justify:inter-word]">
                The department constantly motivates students to participate in hands-on workshops,
                technical talks, seminars, competitions and start-up activities — bridging the gap
                between classroom learning and real-world problem solving.
              </p>
              <p className="text-navy font-semibold text-sm mt-1">Prof. Dr. Maumita Chakraborty</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HODMessage;