const mission = [
  "Deliver quality technical education with strong fundamentals.",
  "Encourage innovation, research and entrepreneurship.",
  "Promote industry collaboration and practical learning.",
  "Develop ethical, socially responsible engineers.",
];

const outcomes = [
  "Strong programming and analytical skills.",
  "Ability to design intelligent computing solutions.",
  "Excellent communication and teamwork.",
  "Readiness for higher education and research.",
  "Professional ethics and lifelong learning attitude.",
];

function AboutContent() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-6">
        <p className="uppercase tracking-[3px] text-[11px] text-brand-blue mb-3">
          Est. 2021
        </p>

        <h2 className="text-4xl font-semibold text-navy mb-6">
          About the Department
        </h2>

        <p className="text-gray-500 leading-8 max-w-3xl">
          The Department of Computer Science & Engineering was established
          with the vision of creating skilled professionals capable of
          addressing real-world technological challenges. The department
          emphasizes academic excellence, innovation, industry exposure and
          research-oriented learning.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-14 pt-14 border-t border-gray-200">
          <div>
            <h3 className="text-2xl font-semibold text-navy mb-4">
              Mission
            </h3>
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
            <h3 className="text-2xl font-semibold text-navy mb-4">
              Vision
            </h3>
            <p className="text-gray-500 leading-8">
              To become a nationally recognized department producing
              competent professionals, innovators and researchers who
              contribute towards technological advancement and societal
              development.
            </p>
          </div>
        </div>

        <div className="mt-14 pt-14 border-t border-gray-200">
          <h3 className="text-2xl font-semibold text-navy mb-6">
            Student Outcomes
          </h3>

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