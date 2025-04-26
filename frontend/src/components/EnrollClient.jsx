import { useState, useEffect } from "react";
import api from "../api";

export default function EnrollClient() {
  const [clients, setClients] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [selectedClient, setSelectedClient] = useState("");
  const [selectedPrograms, setSelectedPrograms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const clientsRes = await api.get("/clients/search?query=");

      const programsRes = await api.get("/programs");
      setClients(clientsRes.data);
      setPrograms(programsRes.data);
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/clients/enroll", {
      clientId: selectedClient,
      programIds: selectedPrograms,
    });
    alert("Client enrolled!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg transform transition-all hover:scale-105 hover:shadow-2xl duration-300">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-800 tracking-tight">
          Enroll Client in Programs
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <select
            value={selectedClient}
            onChange={(e) => setSelectedClient(e.target.value)}
            className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          >
            <option>Select Client</option>
            {clients.map((client) => (
              <option key={client.id} value={client.id}>
                {client.name}
              </option>
            ))}
          </select>
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <h3 className="text-lg font-semibold mb-4 text-blue-800">
              Available Programs
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {programs.map((program) => (
                <label
                  key={program.id}
                  className="flex items-center space-x-2 hover:bg-blue-100 p-2 rounded transition duration-300 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value={program.id}
                    className="text-blue-600 focus:ring-blue-500 rounded"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedPrograms([...selectedPrograms, program.id]);
                      } else {
                        setSelectedPrograms(
                          selectedPrograms.filter((pid) => pid !== program.id)
                        );
                      }
                    }}
                  />
                  <span className="text-blue-800">{program.name}</span>
                </label>
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-md hover:shadow-lg"
          >
            Enroll Client
          </button>
        </form>
      </div>
    </div>
  );
}
