import building from "../../assets/building2.png"

const specializations = [
  "Computer Science (Cybersecurity)",
  "Computer Science (Networks)",
  "Computer Science Technology",
  "Computer Science & Information Technology",
]

function Hero() {
  return (
    <section className="relative min-h-[520px] sm:min-h-[560px] lg:min-h-[600px] flex items-center overflow-hidden">
      <img
        src={building}
        alt="IEM Campus Building"
        className="hero-image-in absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-navy/80" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 w-full">
        <span className="hero-enter inline-block bg-white/10 text-white text-[11px] sm:text-xs font-medium px-3 py-1.5 rounded-full mb-5 sm:mb-6 border border-white/20">
          Institute of Engineering &amp; Management
        </span>

        <h1 className="hero-enter hero-enter-delay-1 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-3xl">
          Department of
        </h1>

        <div className="mt-2 max-w-3xl">
          {specializations.map((name, i) => (
            <span
              key={name}
              className={`hero-enter hero-enter-delay-${Math.min(i + 2, 4)} block text-blue-400 text-xl sm:text-2xl lg:text-3xl font-bold leading-snug`}
            >
              {name}
            </span>
          ))}
        </div>

        <p className="hero-enter hero-enter-delay-3 text-sm sm:text-base text-gray-300 mt-5 sm:mt-6 max-w-xl leading-relaxed">
          Building industry-ready computing professionals through strong technical foundations, applied research and hands-on learning.
        </p>

        <div className="hero-enter hero-enter-delay-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-8">
          <a
            href="https://exam.iem.edu.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-1.5 bg-brand-blue hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-lg text-white text-sm font-medium px-4 py-3 rounded-md transition-all duration-200"
          >
            Admissions Open
            <span className="text-base leading-none">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero