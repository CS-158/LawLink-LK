import React from 'react';
import { Calendar, HelpCircle, Bell, User, LayoutGrid, PenSquare, MessageCircle, Settings, Video } from 'lucide-react';
import Sidebar from './components/Sidebar';
import TaskList from './components/TaskList';
import LawyerNotes from './components/LawyerNotes';
import DocumentList from './components/DocumentList';

function App() {
  return (
    <div className="min-h-screen bg-[#f0f1f7] flex">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1">
        {/* Top Navigation */}
        <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
          <div></div>
          <div className="flex items-center gap-6">
            <Calendar className="w-6 h-6" />
            <HelpCircle className="w-6 h-6" />
            <Bell className="w-6 h-6" />
            <div className="flex items-center gap-2">
              <span>DESHAN FERNANDO</span>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content Area */}
        <div className="p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-4xl font-bold text-blue-600">WELCOME DESHAN !</h1>
              <p className="text-gray-600 mt-2">CASE NAME #202534</p>
            </div>
            <div className="flex items-center gap-2 bg-red-200 px-4 py-2 rounded-lg">
              <Calendar className="w-5 h-5 text-red-500" />
              <div>
                <p className="text-sm text-red-500">NEXT COURT DATE</p>
                <p className="font-semibold text-red-500">2025 DECEMBER 15</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mb-8">
            <button className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-shadow">
              <MessageCircle className="w-5 h-5" />
              MESSAGE LAWYER
            </button>
            <button className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-shadow">
              <Video className="w-5 h-5" />
              SCHEDULE MEETING
            </button>
          </div>

          {/* Three Column Layout */}
          <div className="grid grid-cols-3 gap-6">
            <TaskList />
            <LawyerNotes />
            <DocumentList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;