// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-950 text-white flex justify-between items-center px-6 py-4 shadow-lg">
      <div className="text-2xl font-bold">Health System</div>
      <div className="flex space-x-6">
        <Link to="/" className="hover:text-blue-300">
          Home
        </Link>
        <Link to="/create-program" className="hover:text-blue-300">
          Create Program
        </Link>
        <Link to="/register-client" className="hover:text-blue-300">
          Register Client
        </Link>
        <Link to="/enroll-client" className="hover:text-blue-300">
          Enroll Client
        </Link>
        <Link to="/search-client" className="hover:text-blue-300">
          Search Clients
        </Link>
      </div>
    </nav>
  );
}
