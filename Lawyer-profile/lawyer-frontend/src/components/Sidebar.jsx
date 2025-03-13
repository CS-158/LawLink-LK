import React from 'react';
import { Grid, FileText, Settings } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gradient-to-b from-blue-600 to-blue-900 text-white h-full flex-shrink-0 rounded-tr-3xl rounded-br-3xl">
      <div className="p-6 h-full flex flex-col">
        <div className="flex items-center gap-2 mb-12">
          <div className="text-2xl font-bold tracking-tight">
            <a href="#"><img src="\hori.png" alt="Logo" /></a>
          </div>
        </div>

        <nav className="space-y-4">
          <a href="#" className="flex items-center gap-3 text-white/90 hover:text-white hover:bg-blue-500/50 px-4 py-2 rounded-lg transition-colors">
            <Grid className="w-5 h-5" />
            <span className="font-medium">Dashboard</span>
          </a>
          <a href="#" className="flex items-center gap-3 text-white/90 hover:text-white hover:bg-blue-500/50 px-4 py-2 rounded-lg transition-colors">
            <FileText className="w-5 h-5" />
            <span className="font-medium">View Cases</span>
          </a>
          <a href="#" className="flex items-center gap-3 text-white/90 hover:text-white hover:bg-blue-500/50 px-4 py-2 rounded-lg transition-colors">
            <Settings className="w-5 h-5" />
            <span className="font-medium">Settings</span>
          </a>
        </nav>

        <div className="mt-12">
          <h3 className="text-sm font-semibold mb-4 px-4 text-white/70">ACTIVE CASES</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 px-4 py-2 hover:bg-blue-700/50 rounded-lg cursor-pointer transition-colors">
              <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
              <span className="text-sm font-medium">Smith vs. Johnson</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 hover:bg-blue-700/50 rounded-lg cursor-pointer transition-colors">
              <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
              <span className="text-sm font-medium">Estate Planning</span>
            </div>
            <div className="flex items-center gap-3 px-4 py-2 hover:bg-blue-700/50 rounded-lg cursor-pointer transition-colors">
              <div className="w-2 h-2 rounded-full bg-purple-400"></div>
              <span className="text-sm font-medium">Corporate Merger</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;