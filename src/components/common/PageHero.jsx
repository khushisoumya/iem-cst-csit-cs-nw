import buildingImg from "../../assets/images/building2.png";
import CornerFrame from "./CornerFrame";

function PageHero({
  eyebrow,
  title,
  description,
  image = buildingImg,
  titleClassName = "",
}) {
  return (
    <section className="relative h-[320px] md:h-[380px] lg:h-[430px] overflow-hidden bg-ink">
      <img
        src={image}
        alt={typeof title === "string" ? title : "Hero"}
        className="hero-image absolute inset-0 w-full h-full object-cover object-right"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg,#081F5C 0%,#081F5C 34%,rgba(8,31,92,.86) 46%,rgba(8,31,92,.56) 60%,rgba(8,31,92,.22) 74%,transparent 88%)",
        }}
      />

      <CornerFrame />

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-10 lg:px-16">
          {eyebrow && (
            <p className="hero-eyebrow font-mono uppercase tracking-[4px] md:tracking-[6px] text-[10px] md:text-[11px] text-blue-200 mb-3 md:mb-5">
              {eyebrow}
            </p>
          )}

          <h1
            className={`hero-title font-display font-semibold text-white leading-[1.08] tracking-[-0.01em] max-w-full md:max-w-[680px] break-words text-[32px] sm:text-[38px] md:text-[44px] ${
              titleClassName || "lg:text-[52px]"
            }`}
          >
            {title}
          </h1>

          {description && (
            <p className="hero-description mt-4 md:mt-5 max-w-full md:max-w-[520px] text-[15px] md:text-[17px] leading-7 text-gray-200 font-sans">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default PageHero;