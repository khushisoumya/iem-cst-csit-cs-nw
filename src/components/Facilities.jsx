import building from "../assets/images/building2.png";

const facilities = [
  { name: "Security Labs", image: building },
  { name: "Computer Labs", image: building },
  { name: "Network Labs", image: building },
  { name: "Digital Library", image: building },
];

function Facilities() {
  return (
    <section id="facilities" className="bg-white pt-14 sm:pt-16 lg:pt-20 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[minmax(0,1fr)_2fr] gap-10 items-center">
        <div>
          <span className="inline-block bg-blue-50 text-brand-blue text-xs font-medium px-3 py-1.5 rounded-full mb-4">
            Infrastructure
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy leading-snug mb-3">
            Major Facilities
          </h2>
          <p className="text-gray-500 text-sm sm:text-base mb-6">
            State-of-the-art infrastructure designed for hands-on security and computing education
          </p>
          <div className="w-16 h-1 bg-brand-blue rounded-full mb-6" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {facilities.map((facility) => (
            <div key={facility.name} className="relative rounded-xl overflow-hidden aspect-[3/4] group">
              <img
                src={facility.image}
                alt={facility.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium">
                {facility.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Facilities;