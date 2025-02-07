import { Bell, Calendar, HelpCircle } from "lucide-react";

export default function Navbar() {
  return (
    <header className="bg-blue-700 text-white p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Calendar className="w-5 h-5" />
        <HelpCircle className="w-5 h-5" />
        <Bell className="w-5 h-5" />
      </div>
      <div className="flex items-center space-x-2">
        <span>DESHAN FERNANDO</span>
        <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
      </div>
    </header>
  );
}
