import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import aboutImage from "../../assets/images/building2.png";

function AboutCard() {
  return (
    <section className="bg-paper pt-20 pb-10">
      <div className="max-w-5xl mx-auto px-6">
        <div className="group relative overflow-hidden rounded-2xl bg-white border border-line shadow-[0_10px_30px_rgba(8,31,92,0.08)] hover:shadow-[0_25px_50px_rgba(8,31,92,0.16)] transition-shadow duration-500">
          <div className="h-1.5 w-full bg-ink" />

          <div className="p-8 md:p-10 flex flex-col md:flex-row-reverse gap-10 items-center">
            <div className="flex-shrink-0 w-full md:w-64">
              <div className="relative overflow-hidden rounded-xl h-48 md:h-56 ring-4 ring-white shadow-lg shadow-ink/10">
                <img
                  src={aboutImage}
                  alt="Department building"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
              </div>
            </div>

            <div className="flex-1">
              <span className="inline-block font-mono text-[11px] uppercase tracking-[3px] text-ink bg-ink/5 px-3 py-1 rounded-full">
                About Us
              </span>

              <h3 className="mt-3 font-display text-2xl md:text-3xl font-semibold text-ink">
                About the Department
              </h3>

              <p className="mt-4 text-body leading-7 font-sans">
                The Department of Cyber Security is committed to academic
                excellence, industry-relevant research and building future
                innovators. Discover our vision, mission and journey so far.
              </p>

              <Link
                to="/about"
                className="mt-7 inline-flex items-center gap-2 font-sans font-semibold text-ink bg-ink/5 hover:bg-ink hover:text-white px-4 py-2 rounded-full transition-all duration-300 w-fit"
              >
                Learn More
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCard;