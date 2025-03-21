import { FaCalendarAlt, FaQuestionCircle, FaBell, FaUserCircle } from 'react-icons/fa';

function Topbar() {
  return (
    <div className="bg-white h-16 border-b flex items-center justify-end px-6">
      <div className="flex items-center space-x-6">
        <button className="text-gray-600 hover:text-primary">
          <FaCalendarAlt className="text-xl" />
        </button>
        <button className="text-gray-600 hover:text-primary">
          <FaQuestionCircle className="text-xl" />
        </button>
        <button className="text-gray-600 hover:text-primary">
          <FaBell className="text-xl" />
        </button>
        <div className="flex items-center">
          <div className="mr-2 text-right">
            <div className="font-bold text-primary">DESHAN</div>
            <div className="text-xs text-gray-500">FERNANDO</div>
          </div>
          <FaUserCircle className="text-3xl text-gray-400" />
        </div>
      </div>
    </div>
  );
}

export default Topbar;