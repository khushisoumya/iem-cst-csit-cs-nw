import PageHero from "../components/common/PageHero";
import EventTimeline from "../components/events/EventTimeline";

function Events() {
  return (
    <>
      <PageHero
        title="Events"
        description="Explore workshops, seminars, hackathons and departmental activities."
      />

      <EventTimeline />
    </>
  );
}

export default Events;