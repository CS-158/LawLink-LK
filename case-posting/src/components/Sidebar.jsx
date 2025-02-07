export default function Sidebar() {
    return (
      <aside className="w-64 bg-blue-700 text-white flex flex-col">
        <div className="p-4 text-xl font-bold border-b border-blue-600">
          LawLink <span className="text-gray-300">LK</span>
        </div>
        <nav className="flex-1">
          <ul className="mt-4 space-y-2">
            <li className="px-4 py-2 hover:bg-blue-600">Dashboard</li>
            <li className="px-4 py-2 hover:bg-blue-600">Create Post</li>
            <li className="px-4 py-2 hover:bg-blue-600">Ask Lexbot</li>
            <li className="px-4 py-2 hover:bg-blue-600">Settings</li>
          </ul>
        </nav>
        <div className="p-4 border-t border-blue-600">
          <h3 className="text-sm font-bold uppercase">My Cases</h3>
          <ul className="mt-2 space-y-1">
            <li className="flex items-center text-blue-200">
              <span className="w-3 h-3 rounded-full bg-blue-400 mr-2"></span>
              Case Name
            </li>
            <li className="flex items-center text-blue-200">
              <span className="w-3 h-3 rounded-full bg-cyan-400 mr-2"></span>
              Case Name
            </li>
            <li className="flex items-center text-blue-200">
              <span className="w-3 h-3 rounded-full bg-purple-400 mr-2"></span>
              Case Name
            </li>
          </ul>
        </div>
      </aside>
    );
  }
  