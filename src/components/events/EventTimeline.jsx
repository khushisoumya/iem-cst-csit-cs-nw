



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
      ? [
          ...eventData["2023"],
          ...eventData["2024"],
          ...eventData["2025"],
        ]
      : eventData[selectedYear];

  const years = ["2023", "2024", "2025", "All"];

  return (
    <section className="py-20 bg-[#f8fafc]">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-[#081F5C]">
            Events {selectedYear !== "All" ? selectedYear : ""}
          </h2>

          <p className="mt-3 text-gray-500">
            Explore academic and extracurricular events organized by the
            department.
          </p>

          <div className="flex justify-center gap-3 mt-8">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-4 py-2 rounded transition ${
                  selectedYear === year
                    ? "bg-[#2563EB] text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {year}
              </button>
            ))}
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