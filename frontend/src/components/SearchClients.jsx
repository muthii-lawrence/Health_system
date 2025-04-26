import { useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";

export default function SearchClients() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const res = await api.get(`/clients/search?query=${query}`);
    setResults(res.data);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Search Clients</h2>
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          placeholder="Search by name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 w-full"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>
      <div>
        {results.map((client) => (
          <div key={client.id} className="border p-4 mb-2">
            {client.name} -{" "}
            <Link
              to={`/client/${client.id}`}
              className="text-blue-500 underline"
            >
              View Profile
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
