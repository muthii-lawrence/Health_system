import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";

export default function ClientProfile() {
  const { id } = useParams();
  const [client, setClient] = useState(null);

  useEffect(() => {
    const fetchClient = async () => {
      const res = await api.get(`/clients/${id}`);
      setClient(res.data);
    };
    fetchClient();
  }, [id]);

  if (!client)
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-50">
        <div className="text-blue-800 text-xl animate-pulse">Loading...</div>
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg space-y-6 transform transition-all hover:scale-105 hover:shadow-2xl duration-300">
        <h2 className="text-3xl font-bold text-center text-blue-800 tracking-tight">
          Client Profile
        </h2>
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
          <div className="space-y-4">
            <ProfileRow label="Name" value={client.name} />
            <ProfileRow label="Age" value={client.age} />
            <ProfileRow label="Gender" value={client.gender} />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-800">
            Enrolled Programs
          </h3>
          {client.enrolledPrograms.length === 0 ? (
            <p className="text-blue-600 text-center">No programs enrolled</p>
          ) : (
            <ul className="space-y-2">
              {client.enrolledPrograms.map((program) => (
                <li
                  key={program.id}
                  className="bg-blue-100 p-3 rounded-lg text-blue-800 hover:bg-blue-200 transition duration-300"
                >
                  {program.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

function ProfileRow({ label, value }) {
  return (
    <div className="flex justify-between">
      <span className="font-medium text-blue-700">{label}:</span>
      <span className="text-blue-900">{value}</span>
    </div>
  );
}
