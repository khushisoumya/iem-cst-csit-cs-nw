import { User } from "lucide-react";

function FacultyCard({ name, designation }) {
  return (
    <div className="group premium-card p-6 flex gap-4 items-center">

      <div className="h-14 w-14 rounded-full bg-gray-100 flex items-center justify-center transition-all duration-500 group-hover:bg-white">
        <User
          className="text-[#081F5C] transition-all duration-500 group-hover:scale-110"
        />
      </div>

      <div>
        <h3 className="font-semibold text-[#081F5C]">
          {name}
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          {designation}
        </p>
      </div>

    </div>
  );
}

export default FacultyCard;