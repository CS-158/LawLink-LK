import { LayoutGrid, PenSquare, MessageCircle, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { icon: LayoutGrid, label: "Dashboard", path: "/" },
    { icon: PenSquare, label: "Create post", path: "/create" },
    { icon: MessageCircle, label: "Ask lexbot", path: "/lexbot" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  return (
    <div className="bg-lawlink-primary text-white w-64 min-h-screen p-6">
      <div className="mb-12">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <span className="text-3xl"><></></span> LawLink
          <span className="text-sm font-normal">LK</span>
        </h1>
      </div>

      <nav className="space-y-6">
        {menuItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
          >
            <item.icon className="w-5 h-5" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-12 pt-6 border-t border-white/10">
        <h2 className="text-sm font-semibold text-white/60 mb-4">MY CASES</h2>
        <div className="space-y-3">
          {["Case One", "Case Two", "Case Three"].map((caseName, index) => (
            <Link
              key={index}
              to={`/case/${index + 1}`}
              className="block text-white/80 hover:text-white transition-colors"
            >
              {caseName}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;