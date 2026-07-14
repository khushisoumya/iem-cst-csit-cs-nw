

import { useState } from "react";
import EventCard from "./EventCard";

const eventData = {
  2023: [
    {
      month: "FEB",
      day: "18",
      title: "AI Awareness Seminar",
      subtitle: "February 18, 2023 | Seminar Hall",
      description:
        "An introductory seminar on Artificial Intelligence and emerging technologies.",
    },
    {
      month: "SEP",
      day: "12",
      title: "Tech Fest 2023",
      subtitle: "September 12, 2023",
      description:
        "Department-level technical festival with coding, robotics and quiz competitions.",
    },
  ],

  2024: [
    {
      month: "JAN",
      day: "22",
      title: "Python Bootcamp",
      subtitle: "January 22, 2024 | Offline",
      description:
        "Hands-on bootcamp covering Python programming fundamentals and projects.",
    },
    {
      month: "NOV",
      day: "08",
      title: "Cyber Security Workshop",
      subtitle: "November 8, 2024",
      description:
        "Workshop introducing ethical hacking, network security and cyber awareness.",
    },
  ],

  2025: [
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
  ],
};

function EventTimeline() {
  const [selectedYear, setSelectedYear] = useState("2025");

  const events =
    selectedYear === "All"
      ? [...eventData["2023"], ...eventData["2024"], ...eventData["2025"]]
      : eventData[selectedYear];

  const years = ["2023", "2024", "2025", "All"];

  return (
    <section className="py-20 bg-paper">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-12">
          <p className="font-mono uppercase tracking-[3px] text-[11px] text-signal mb-3">
            Timeline
          </p>
          <h2 className="font-display text-4xl font-semibold text-ink">
            Events {selectedYear !== "All" ? selectedYear : ""}
          </h2>
          <p className="mt-3 text-body font-sans">
            Explore academic and extracurricular events organized by the
            department.
          </p>

          <div className="flex gap-6 mt-8 border-b border-line">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`pb-3 font-sans text-sm font-semibold transition-colors duration-300 border-b-2 -mb-px ${
                  selectedYear === year
                    ? "text-ink border-signal"
                    : "text-body border-transparent hover:text-ink"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        <div>
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventTimeline;