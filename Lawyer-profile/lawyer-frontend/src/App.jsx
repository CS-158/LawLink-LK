import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ProfileSettings from './components/ProfileSettings';

const App = () => {
  const [profilePicture, setProfilePicture] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );
  const [displayName, setDisplayName] = useState("User Name");
  const [practiceAreas, setPracticeAreas] = useState("Practice Area");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar visibility

  const handleSaveChanges = ({ profilePicture, displayName, practiceAreas }) => {
    setProfilePicture(profilePicture);
    setDisplayName(displayName);
    setPracticeAreas(practiceAreas);
    alert("Changes saved successfully!");
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle sidebar visibility
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Sidebar Toggle Button (Visible only on mobile) */}
      <button
        onClick={toggleSidebar}
        className="fixed md:hidden z-50 p-2 bg-blue-500 text-white rounded-full shadow-lg m-2"
        style={{ top: '10px', left: '10px' }}
        aria-label="Toggle sidebar"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Sidebar - Visible on medium screens and above, or when toggled on mobile */}
      <div
        className={`fixed md:relative z-40 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        <Sidebar />
      </div>

      {/* Overlay for mobile sidebar (Visible only when sidebar is open) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar} // Close sidebar when clicking outside
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header
          profilePicture={profilePicture}
          displayName={displayName}
          practiceAreas={practiceAreas}
        />

        {/* Main Content Area */}
        <main className="p-4 md:p-5 flex-1 overflow-auto">
          <div className="max-w-full mx-auto">
            <div className="bg-white rounded-lg md:rounded-3xl shadow-lg md:shadow-2xl overflow-hidden">
              <ProfileSettings
                profilePicture={profilePicture}
                displayName={displayName}
                practiceAreas={practiceAreas}
                onSave={handleSaveChanges}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;