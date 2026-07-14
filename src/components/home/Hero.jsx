import CornerFrame from "../common/CornerFrame";
import campusImg from "../../assets/images/campus-facade.jpg";

function Hero() {
  return (
    <section className="relative h-[440px] md:h-[520px] lg:h-[600px] overflow-hidden bg-ink">
      <img
        src={campusImg}
        alt="IEM Kolkata campus facade"
        className="hero-image absolute inset-0 w-full h-full object-cover"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg,#081F5C 0%,#081F5C 30%,rgba(8,31,92,.82) 48%,rgba(8,31,92,.42) 68%,rgba(8,31,92,.12) 85%,transparent 100%)",
        }}
      />

      <CornerFrame />

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-10 lg:px-16">
          <p className="hero-eyebrow font-mono uppercase tracking-[5px] text-[11px] text-blue-200 mb-4">
            Department of
          </p>

          <h1 className="hero-title font-display font-semibold text-white leading-[1.05] tracking-[-0.01em] text-[40px] sm:text-[48px] md:text-[58px] lg:text-[64px] max-w-[720px]">
            Cyber Security
          </h1>

          <p className="hero-description mt-6 max-w-[520px] text-[16px] md:text-[18px] leading-8 text-gray-200 font-sans">
            Empowering innovation through quality education, research and
            technology.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
