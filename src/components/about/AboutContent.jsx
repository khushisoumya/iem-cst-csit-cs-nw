function AboutContent() {
  return (
    <section className="bg-[#f8fafc] py-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#081F5C]">
            About the Department
          </h2>

          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Established */}
        <div className="group premium-card p-8 mb-8">
          <h3 className="text-2xl font-semibold text-[#081F5C] mb-4">
            Established in 2021
          </h3>

          <p className="text-gray-600 leading-8">
            The Department of Computer Science & Engineering was established
            with the vision of creating skilled professionals capable of
            addressing real-world technological challenges. The department
            emphasizes academic excellence, innovation, industry exposure and
            research-oriented learning.
          </p>
        </div>

        {/* Mission */}
        <div className="group premium-card p-8 mb-8">
          <h3 className="text-2xl font-semibold text-[#081F5C] mb-4">
            Mission
          </h3>

          <ul className="space-y-3 list-disc pl-5 leading-8 text-gray-600">
            <li>Deliver quality technical education with strong fundamentals.</li>
            <li>Encourage innovation, research and entrepreneurship.</li>
            <li>Promote industry collaboration and practical learning.</li>
            <li>Develop ethical, socially responsible engineers.</li>
          </ul>
        </div>

        {/* Vision */}
        <div className="group premium-card p-8 mb-8">
          <h3 className="text-2xl font-semibold text-[#081F5C] mb-4">
            Vision
          </h3>

          <p className="text-gray-600 leading-8">
            To become a nationally recognized department producing competent
            professionals, innovators and researchers who contribute towards
            technological advancement and societal development.
          </p>
        </div>

        {/* Student Outcomes */}
        <div className="group premium-card p-8">
          <h3 className="text-2xl font-semibold text-[#081F5C] mb-4">
            Student Outcomes
          </h3>

          <ul className="space-y-3 list-disc pl-5 leading-8 text-gray-600">
            <li>Strong programming and analytical skills.</li>
            <li>Ability to design intelligent computing solutions.</li>
            <li>Excellent communication and teamwork.</li>
            <li>Readiness for higher education and research.</li>
            <li>Professional ethics and lifelong learning attitude.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default AboutContent;