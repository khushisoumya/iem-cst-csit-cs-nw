import { MapPin, Clock, ArrowRight, ChevronRight, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import building from "../assets/images/building2.png";

const events = [
  {
    month: "AUG", day: "15",
    title: "Independence Day Celebration",
    subtitle: "Flag hoisting & cultural performances",
    location: "Main Auditorium",
    time: "09:00 AM Onwards",
    image: building,
  },
  {
    month: "SEP", day: "05",
    title: "Cybersecurity Awareness Week",
    subtitle: "Workshops, CTFs and guest talks",
    location: "Seminar Hall",
    time: "10:00 AM Onwards",
    image: building,
  },
];

const notices = [
  { title: "Internal Assessment Schedule (Even Sem)", date: "May 15, 2026" },
  { title: "Submission of Project Reports", date: "May 10, 2026" },
  { title: "Departmental Seminar Series", date: "Every Friday, 3:00 PM" },
];

function EventsNotices() {
  return (
    <section className="bg-gray-50 py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block bg-blue-50 text-brand-blue text-xs font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full mb-3">
            Campus News
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy">Stay Informed. Stay Inspired.</h2>
          <div className="w-16 h-1 bg-brand-blue rounded-full mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-[2fr_1fr] gap-6 lg:gap-8">
          <div>
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-navy font-bold text-lg">Upcoming Events</h3>
              <Link to="/events" className="text-brand-blue text-sm font-medium flex items-center gap-1 hover:gap-1.5 transition-all">
                View All <ArrowRight className="w-4 h-4" strokeWidth={2} />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {events.map((event, i) => (
                <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                  <div className="relative h-36">
                    <img src={event.image} alt={event.title} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/10 to-transparent" />
                    <div className="absolute top-3 left-3 bg-brand-blue text-white rounded-lg px-2.5 py-1.5 flex flex-col items-center leading-none">
                      <span className="text-[10px] font-semibold">{event.month}</span>
                      <span className="text-sm font-bold">{event.day}</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-navy font-semibold text-sm mb-1">{event.title}</h4>
                    <p className="text-gray-500 text-xs mb-3">{event.subtitle}</p>
                    <div className="flex flex-col gap-1.5 text-gray-400 text-xs mb-3">
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 shrink-0" strokeWidth={2} />
                        {event.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 shrink-0" strokeWidth={2} />
                        {event.time}
                      </span>
                    </div>
                    <Link to="/events" className="text-brand-blue text-xs font-medium flex items-center gap-1 hover:gap-1.5 transition-all">
                      View Details <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6 h-fit">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                <Bell className="w-4.5 h-4.5 text-brand-blue" strokeWidth={2} />
              </div>
              <h3 className="text-navy font-bold text-base">Notices</h3>
            </div>
            <div className="flex flex-col divide-y divide-gray-100">
              {notices.map((notice, i) => (
                <div key={i} className="flex items-start gap-2 py-3 first:pt-0">
                  <ChevronRight className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" strokeWidth={2} />
                  <div>
                    <p className="text-navy text-sm leading-snug">{notice.title}</p>
                    <p className="text-gray-400 text-xs mt-1">{notice.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventsNotices;