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

  const handleSaveChanges = ({ profilePicture, displayName, practiceAreas }) => {
    setProfilePicture(profilePicture);
    setDisplayName(displayName);
    setPracticeAreas(practiceAreas);
    alert("Changes saved successfully!");
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Sidebar - Hidden on mobile, visible on medium screens and above */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

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