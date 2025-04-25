import React, { useState } from "react";
import CreateProgramForm from "../components/CreateProgramForm";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("register");

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Health Info Dashboard
      </h1>

      <div className="flex justify-center gap-4 mb-6 flex-wrap">
        <button onClick={() => setActiveTab("register")} className="btn">
          Register Client
        </button>
        <button onClick={() => setActiveTab("program")} className="btn">
          Create Program
        </button>
        <button onClick={() => setActiveTab("enroll")} className="btn">
          Enroll Client
        </button>
        <button onClick={() => setActiveTab("search")} className="btn">
          Search Clients
        </button>
        <button onClick={() => setActiveTab("profile")} className="btn">
          View Profile
        </button>
      </div>

      <div className="max-w-3xl mx-auto">
        {activeTab === "program" && <CreateProgramForm />}
      </div>
    </div>
  );
}
