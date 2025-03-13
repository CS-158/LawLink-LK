import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ProfileSettings from './components/ProfileSettings';

const App = () => {
  const [profileData, setProfileData] = useState({
    profilePicture: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    displayName: "John Doe",
    practiceAreas: "Criminal Law, Corporate Law",
  });

  const handleSaveProfile = (updatedData) => {
    setProfileData(updatedData);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar - Fixed and Full Height */}
      <div className="fixed inset-y-0 left-0 bg-gradient-to-b from-blue-600 to-blue-900 text-white rounded-tr-3xl rounded-br-3xl w-64">
        <Sidebar />
      </div>

      {/* Main Content - Offset by Sidebar Width */}
      <div className="flex-1 flex flex-col ml-64">
        <Header 
          displayName={profileData.displayName} 
          practiceAreas={profileData.practiceAreas} 
          profilePicture={profileData.profilePicture} 
        />
        <ProfileSettings 
          profilePicture={profileData.profilePicture}
          displayName={profileData.displayName}
          practiceAreas={profileData.practiceAreas}
          onSave={handleSaveProfile}
        />
      </div>
    </div>
  );
};

export default App;