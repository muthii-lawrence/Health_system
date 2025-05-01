import { useEffect, useState } from "react";
import api from "../api";

export default function LandingPage() {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    const fetchPrograms = async () => {
      const res = await api.get("/programs");
      setPrograms(res.data);
    };
    fetchPrograms();
  }, []);

  const totalPrograms = programs.length;

  return (
    <div className="p-6 my-10">
      <h1 className="text-3xl font-bold mb-6 text-blue-900">
        Welcome to Health System
      </h1>

      <div className="bg-blue-100 p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">
          Total Programs: {totalPrograms}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {programs.map((program) => (
            <div
              key={program.id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold text-blue-700 mb-2">
                {program.name}
              </h3>
              <p className="text-blue-600">
                Clients Enrolled: {program.clientCount}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 text-sm text-blue-200 text-center border-t border-blue-800">
        © 2025 Health Management
      </div>
    </div>
  );
}
