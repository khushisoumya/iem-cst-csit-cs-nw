import PageHero from "../components/common/PageHero";
import AboutIntro from "../components/about/AboutIntro";
import HODMessage from "../components/about/HODMessage";
import MissionVisionOutcomes from "../components/about/MissionVisionOutcomes";

function About() {
  return (
    <>
      <PageHero
        badge="About Us"
        title="About the Department"
        subtitle="Learn about our vision, mission, academic excellence and commitment to innovation."
      />
      <AboutIntro />
      <HODMessage />
      <MissionVisionOutcomes />
    </>
  );
}

export default About;