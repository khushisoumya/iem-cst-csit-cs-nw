import buildingImg from "../../assets/images/building2.png";

function PageHero({ eyebrow, title, description, image = buildingImg }) {
  return (
    <section className="relative min-h-[300px] sm:min-h-[340px] lg:min-h-[380px] flex items-center overflow-hidden">
      <img
        src={image}
        alt={typeof title === "string" ? title : "Hero"}
        className="hero-image-in absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-navy/80" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16 w-full">
        {eyebrow && (
          <span className="hero-enter inline-block bg-white/10 text-white text-[11px] sm:text-xs font-medium px-3 py-1.5 rounded-full mb-5 sm:mb-6 border border-white/20">
            {eyebrow}
          </span>
        )}

        <h1 className="hero-enter hero-enter-delay-1 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-2xl">
          {title}
        </h1>

        <div className="hero-enter hero-enter-delay-2 w-12 sm:w-14 h-1 bg-yellow-400 rounded-full my-4 sm:my-5" />

        {description && (
          <p className="hero-enter hero-enter-delay-3 text-sm sm:text-base text-gray-300 max-w-xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}

export default PageHero;