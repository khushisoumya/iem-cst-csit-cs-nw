import { User } from "lucide-react";

function FacultyCard({ name, designation }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition p-6 flex gap-4">

      <div className="h-14 w-14 rounded-full bg-gray-100 flex items-center justify-center">
        <User className="text-[#081F5C]" />
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