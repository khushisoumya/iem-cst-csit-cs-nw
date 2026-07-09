import hodImage from "../../assets/images/pdep4.png";
import { ArrowRight } from "lucide-react";

function HODCard() {
  return (
    <section className="bg-white py-14">

      <div className="max-w-5xl mx-auto px-6">

        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 flex flex-col md:flex-row gap-8">

          <img
            src={hodImage}
            alt="HOD"
            className="w-36 h-44 rounded-lg object-cover flex-shrink-0"
          />

          <div className="flex-1">

            <h2 className="text-2xl font-bold text-[#081F5C]">
              Head of the Department
            </h2>

            <h3 className="mt-2 text-xl font-semibold">
              Prof. Dr. Maumita Chakraborty
            </h3>

            <p className="mt-1 text-blue-600 font-medium">
              Professor & HOD, CST & CSIT
            </p>

            <p className="mt-5 text-gray-600 leading-8">
              Welcome to the Department of Computer Science and Engineering and Computer Science & Information Technology. Our department is dedicated to nurturing future innovators through quality education, research and industry collaboration. It is a great pleasure to welcome you to the Department of Computer Science and Technology (CST) & Computer Science and Information Technology (CSIT). The department has experienced and well-qualified faculty members, well-equipped laboratories, research facilities and all other facilities to nurture the development of young engineers. 
            </p>

            {/* <button className="mt-6 inline-flex items-center gap-2 text-blue-600 font-semibold">
              Read More
              <ArrowRight size={18} />
            </button> */}

          </div>

        </div>

      </div>

    </section>
  );
}

export default HODCard;