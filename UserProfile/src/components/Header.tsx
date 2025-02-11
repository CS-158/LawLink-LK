import { Bell, Calendar, HelpCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-6 bg-white">
      <div className="flex-1" />
      <div className="flex items-center gap-6">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Calendar className="w-5 h-5 text-lawlink-gray" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <HelpCircle className="w-5 h-5 text-lawlink-gray" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Bell className="w-5 h-5 text-lawlink-gray" />
        </button>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="font-medium">DESHAN</div>
            <div className="text-sm text-lawlink-gray">FERNANDO</div>
          </div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>DF</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
};

export default Header;