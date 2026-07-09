// import PageBanner from "../components/layout/PageBanner";
import PageHero from "../components/common/PageHero";
import AboutContent from "../components/about/AboutContent";

import bannerImage from "../assets/images/building2.png";

function About() {
  return (
    <>
      {/* <PageBanner
        title="About the Department"
        subtitle="Department of Computer Science & Engineering"
        image={bannerImage}
      /> */}

        <PageHero
        title="About the Department"
        description="Learn about our vision, mission, academic excellence and commitment to innovation."
      />

      <AboutContent />
    </>
  );
}

export default About;