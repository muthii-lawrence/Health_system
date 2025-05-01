import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateProgram from "./components/CreateProgram";
import RegisterClient from "./components/RegisterClient";
import EnrollClient from "./components/EnrollClient";
import SearchClients from "./components/SearchClients";
import ClientProfile from "./components/ClientProfile";
import Landing from "./components/Landing";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/create-program" element={<CreateProgram />} />
            <Route path="/register-client" element={<RegisterClient />} />
            <Route path="/enroll-client" element={<EnrollClient />} />
            <Route path="/search-client" element={<SearchClients />} />
            <Route path="/client/:id" element={<ClientProfile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
