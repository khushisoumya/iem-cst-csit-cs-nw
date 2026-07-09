import EventCard from "./EventCard";

const events = [
  {
    month: "JUN",
    day: "20",
    title: "Even Semester",
    subtitle: "January – June 2025",
    description: "",
  },
  {
    month: "APR",
    day: "05",
    title: "Goal Extraction Challenge",
    subtitle: "9:00 AM – 5:00 PM | IEM UEM",
    description:
      "Open innovation event to develop creative, strong connected and long lasting ideas.",
  },
  {
    month: "MAR",
    day: "25",
    title: "Blockchain Technology Workshop",
    subtitle: "March 25, 2025 | Offline",
    description:
      "Hands-on workshop covering blockchain fundamentals, smart contracts and decentralized applications.",
  },
  {
    month: "JUL",
    day: "20",
    title: "Odd Semester",
    subtitle: "July – December 2025",
    description: "",
  },
  {
    month: "AUG",
    day: "10",
    title: "Coding Nexus",
    subtitle: "10:00 AM",
    description:
      "Sharpen your coding skills in this timed competitive programming contest.",
  },
];

function EventTimeline() {
  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-[#081F5C]">
            Events 2025
          </h2>

          <p className="mt-3 text-gray-500">
            Explore academic and extracurricular events organized by the
            department.
          </p>

          <div className="flex justify-center gap-3 mt-8">
            <button className="px-4 py-2 rounded bg-gray-100">2023</button>
            <button className="px-4 py-2 rounded bg-gray-100">2024</button>
            <button className="px-4 py-2 rounded bg-[#2563EB] text-white">
              2025
            </button>
            <button className="px-4 py-2 rounded bg-gray-100">All</button>
          </div>
        </div>

        <div className="space-y-6">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>

      </div>
    </section>
  );
}


export default EventTimeline;