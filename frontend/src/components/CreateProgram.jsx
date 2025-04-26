import { useState } from "react";
import api from "../api";

export default function CreateProgram() {
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await api.post("/programs", { name });
    alert("Program created!");
    setName("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md transform transition-all hover:scale-105 hover:shadow-2xl duration-300">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-800 tracking-tight">
          Create Health Program
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Program Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 shadow-md hover:shadow-lg"
          >
            Create Program
          </button>
        </form>
      </div>
    </div>
  );
}
