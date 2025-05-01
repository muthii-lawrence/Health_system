//resposive sidebar//
import { Link } from "react-router-dom";
import { PlusCircle, UserPlus, Search, List, Menu } from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="md:hidden bg-blue-950 p-4 flex justify-between items-center shadow-lg fixed top-0 left-0 right-0 z-50">
        <Link to="/">
          <h2 className="text-white font-bold text-xl">Health System</h2>{" "}
        </Link>
        <button onClick={() => setOpen(!open)}>
          <Menu size={28} className="text-white" />
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 h-screen w-72 bg-gradient-to-b from-blue-900 to-blue-950 text-white flex flex-col shadow-2xl z-40 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:flex`}
      >
        <div className="hidden md:flex bg-blue-950 p-6 border-b border-blue-800 items-center space-x-4">
          <div className="bg-white/10 p-3 rounded-full">
            <List size={24} className="text-blue-200" />
          </div>
          <Link to="/">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Health System
            </h2>
          </Link>
        </div>

        <nav className="flex flex-col p-4 space-y-2 flex-grow mt-16 md:mt-0">
          <SidebarLink
            to="/create-program"
            icon={<PlusCircle size={20} />}
            label="Create Program"
            onClick={() => setOpen(false)}
          />
          <SidebarLink
            to="/register-client"
            icon={<UserPlus size={20} />}
            label="Register Client"
            onClick={() => setOpen(false)}
          />
          <SidebarLink
            to="/enroll-client"
            icon={<List size={20} />}
            label="Enroll Client"
            onClick={() => setOpen(false)}
          />
          <SidebarLink
            to="/search-client"
            icon={<Search size={20} />}
            label="Search Clients"
            onClick={() => setOpen(false)}
          />
        </nav>

        <div className="p-4 text-sm text-blue-200 text-center border-t border-blue-800">
          © 2025 Health Management
        </div>
      </div>
    </>
  );
}

function SidebarLink({ to, icon, label, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
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
