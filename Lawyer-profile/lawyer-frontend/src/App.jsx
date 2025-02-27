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
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header 
          profilePicture={profilePicture}
          displayName={displayName}
          practiceAreas={practiceAreas}
        />
        <main className="p-5 flex-1 overflow-auto ml-0.5">
          <div className="max-w-full mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
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