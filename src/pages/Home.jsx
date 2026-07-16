import Hero from "../components/home/Hero";
import AboutHOD from "../components/home/AboutHOD";
import ProgramsOffered from "../components/home/ProgramsOffered.jsx";
import Facilities from "../components/Facilities";
import Faculty from "../components/home/Faculty";
import EventsNotices from "../components/EventsNotices";
import CTA from "../components/CTA";

function Home() {
  return (
    <>
      <Hero />
      <AboutHOD />
      <ProgramsOffered />
      <Facilities />
      <Faculty />
      <EventsNotices />
      <CTA />
    </>
  );
}

export default Home;