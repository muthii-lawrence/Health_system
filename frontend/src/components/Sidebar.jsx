import { Link } from "react-router-dom";
import { PlusCircle, UserPlus, Search, List } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-72 min-h-screen bg-gradient-to-b from-blue-900 to-blue-950 text-white flex flex-col shadow-2xl">
      <div className="bg-blue-950 p-6 border-b border-blue-800 flex items-center space-x-4">
        <div className="bg-white/10 p-3 rounded-full">
          <List size={24} className="text-blue-200" />
        </div>
        <Link to="/">
          {" "}
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Health System
          </h2>
        </Link>
      </div>
      <nav className="flex flex-col p-4 space-y-2 flex-grow">
        <SidebarLink
          to="/create-program"
          icon={<PlusCircle size={20} />}
          label="Create Program"
        />
        <SidebarLink
          to="/register-client"
          icon={<UserPlus size={20} />}
          label="Register Client"
        />
        <SidebarLink
          to="/enroll-client"
          icon={<List size={20} />}
          label="Enroll Client"
        />
        <SidebarLink
          to="/search-client"
          icon={<Search size={20} />}
          label="Search Clients"
        />
      </nav>
      <div className="p-4 text-sm text-blue-200 text-center border-t border-blue-800">
        © 2025 Health Management
      </div>
    </div>
  );
}

function SidebarLink({ to, icon, label }) {
  return (
    <Link
      to={to}
      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-800/50 transition duration-300 group"
    >
      <div className="text-blue-300 group-hover:text-white transition duration-300">
        {icon}
      </div>
      <span className="text-blue-200 group-hover:text-white font-medium tracking-tight">
        {label}
      </span>
    </Link>
  );
}
