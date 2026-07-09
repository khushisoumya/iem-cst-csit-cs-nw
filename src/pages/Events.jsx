// import PageBanner from "../components/layout/PageBanner";

import PageHero from "../components/common/PageHero";
import EventTimeline from "../components/events/EventTimeline";

import bannerImage from "../assets/images/building2.png";

function Events() {
  return (
    <>
      {/* <PageBanner
        title="Events 2025"
        subtitle="Department of Computer Science & Engineering"
        image={bannerImage}
      /> */}

       <PageHero
        title="Events"
        description="Explore workshops, seminars, hackathons and departmental activities."
      />


      <EventTimeline />
    </>
  );
}

export default Events;