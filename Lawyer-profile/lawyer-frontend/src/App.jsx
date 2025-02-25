import React, { useState, useRef, useEffect } from 'react';
import { Bell, Calendar, Grid, Eye, Settings, Upload, X, HelpCircle, User, FileText, MessageSquare } from 'lucide-react';

function App() {
  const [profilePicture, setProfilePicture] = useState(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  );
  const [displayName, setDisplayName] = useState("User Name");
  const [practiceAreas, setPracticeAreas] = useState("Practice Area");

  // Temporary state for form inputs
  const [tempDisplayName, setTempDisplayName] = useState(displayName);
  const [tempPracticeAreas, setTempPracticeAreas] = useState(practiceAreas);
  const [tempProfilePicture, setTempProfilePicture] = useState(profilePicture);

  // State for qualification photos
  const [qualificationPhotos, setQualificationPhotos] = useState([]);

  // Notification state
  const [notificationsVisible, setNotificationsVisible] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New case assigned: Smith vs. Johnson", date: "2023-10-01", read: false },
    { id: 2, message: "Reminder: Meeting with client at 3 PM", date: "2023-10-02", read: false },
    { id: 3, message: "Document review completed", date: "2023-10-03", read: false },
  ]);

  // Ref for the notification frame
  const notificationRef = useRef(null);

  // Handle clicks outside the notification frame
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setNotificationsVisible(false);
      }
    };

    // Add event listener when the notification frame is visible
    if (notificationsVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Cleanup the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [notificationsVisible]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        // Update the temporary profile picture and display it immediately
        setTempProfilePicture(e.target.result);
        setProfilePicture(e.target.result); // Display in header immediately
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = () => {
    setTempProfilePicture("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
    setProfilePicture("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"); // Reset in header immediately
  };

  const handleTempDisplayNameChange = (event) => {
    setTempDisplayName(event.target.value);
  };

  const handleTempPracticeAreasChange = (event) => {
    setTempPracticeAreas(event.target.value);
  };

  const handleSaveChanges = () => {
    // Update the main state with the temporary state values
    setDisplayName(tempDisplayName);
    setPracticeAreas(tempPracticeAreas);
    setProfilePicture(tempProfilePicture); // Finalize the profile picture
    alert("Changes saved successfully!");
  };

  // Handle qualification photo upload
  const handleQualificationPhotoUpload = (event) => {
    const files = event.target.files;
    if (files) {
      const newPhotos = Array.from(files).map(file => URL.createObjectURL(file));
      setQualificationPhotos([...qualificationPhotos, ...newPhotos]);
    }
  };

  // Handle qualification photo removal
  const handleRemoveQualificationPhoto = (index) => {
    const updatedPhotos = qualificationPhotos.filter((_, i) => i !== index);
    setQualificationPhotos(updatedPhotos);
  };

  // Toggle notifications visibility
  const toggleNotifications = () => {
    setNotificationsVisible(!notificationsVisible);
  };

  // Handle marking all notifications as read
  const handleMarkAllAsRead = () => {
    const updatedNotifications = notifications.map(notification => ({
      ...notification,
      read: true,
    }));
    setNotifications(updatedNotifications);
  };

  // Check if there are any unread notifications
  const hasUnreadNotifications = notifications.some(notification => !notification.read);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-blue-600 to-blue-900 text-white h-full flex-shrink-0 rounded-tr-3xl rounded-br-3xl mr-0.5">
        <div className="p-6 h-full flex flex-col">
          <div className="flex items-center gap-2 mb-12">
            <div className="text-2xl font-bold tracking-tight"><a href='#'><img src='\hori.png'></img></a></div>
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
            <a href="#" className="flex items-center gap-3 text-white/90 hover:text-white bg-blue-500/50 px-4 py-2 rounded-lg transition-colors">
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

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-blue-800 h-16 flex items-center justify-between px-6 shadow-sm rounded-tl-full rounded-bl-full mt-2 ml-1">
          <h1 className="text-xl font-semibold text-gray-800"></h1>
          <div className="flex items-center gap-6">
            <button className="p-2 hover:bg-blue-700 rounded-full transition-colors">
              <Calendar className="w-5 h-5 text-white" />
            </button>
            <button className="p-2 hover:bg-blue-700 rounded-full transition-colors">
              <HelpCircle className="w-5 h-5 text-white" />
            </button>
            <div className="relative">
              <button 
                className="p-2 hover:bg-blue-700 rounded-full transition-colors relative"
                onClick={toggleNotifications}
              >
                <Bell className="w-5 h-5 text-white" />
                {hasUnreadNotifications && (
                  <span className="absolute top-0.5 right-0.5 w-2 h-2 bg-red-500 rounded-full"></span>
                )}
              </button>
              {notificationsVisible && (
                <div ref={notificationRef} className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg z-50">
                  <div className="p-4 border-b">
                    <h3 className="text-lg font-semibold">Notifications</h3>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    {notifications.map(notification => (
                      <div key={notification.id} className="p-4 border-b hover:bg-gray-50">
                        <p className="text-sm text-gray-700">{notification.message}</p>
                        <p className="text-xs text-gray-500">{notification.date}</p>
                      </div>
                    ))}
                  </div>
                  <div 
                    className="p-4 text-center text-sm text-blue-600 hover:text-blue-800 cursor-pointer"
                    onClick={handleMarkAllAsRead}
                  >
                    Mark all as read
                  </div>
                </div>
              )}
            </div>
            <div className="flex items-center gap-3 pl-4 border-l">
              <div className="text-right">
                <div className="font-bold text-white">{displayName}</div>
                <div className="text-sm text-white">{practiceAreas}</div>
              </div>
              <img 
                src={profilePicture}
                alt="Profile"
                className="w-10 h-10 rounded-full object-cover ring-2 ring-gray-100"
              />
            </div>
          </div>
        </header>

        {/* Profile Content */}
        <main className="p-5 flex-1 overflow-auto ml-0.5">
          <div className="max-w-full mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="p-7">
                <div className="space-y-8">
                  {/* Profile Picture Section */}
                  <div>
                    <h1 className="text-xl font-semibold text-gray-600">Account Settings</h1>
                    <hr></hr><br></br>
                    <div className="flex items-center gap-6">
                      <img 
                        src={tempProfilePicture}
                        alt="Profile"
                        className="w-32 h-32 rounded-full object-cover ring-4 ring-gray-100"
                      />
                      <div className="space-y-2">
                        <input
                          type="file"
                          id="profile-picture-upload"
                          accept="image/*"
                          style={{ display: 'none' }}
                          onChange={handleFileChange}
                        />
                        <label
                          htmlFor="profile-picture-upload"
                          className="px-2 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2 cursor-pointer"
                        >
                          <Upload className="w-4 h-4" />
                          Upload new photo
                        </label>
                        <button
                          onClick={handleRemovePhoto}
                          className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors block text-sm"
                        >
                          Remove photo
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Display Name</label>
                      <input 
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="How clients will see you"
                        value={tempDisplayName}
                        onChange={handleTempDisplayNameChange}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input 
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Your legal name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input 
                        type="email"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Contact Number</label>
                      <input 
                        type="tel"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="+94 XX XXX XXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Languages Known</label>
                      <input 
                        type="tel"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Languages you can communicate in"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Practice Courts</label>
                      <input 
                        type="tel"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Enter the courts you practice in"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Qualifications</label>
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleQualificationPhotoUpload}
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      />
                      <div className="mt-4 grid grid-cols-3 gap-4">
                        {qualificationPhotos.map((photo, index) => (
                          <div key={index} className="relative">
                            <img
                              src={photo}
                              alt={`Qualification ${index + 1}`}
                              className="w-full h-24 object-cover rounded-lg"
                            />
                            <button
                              onClick={() => handleRemoveQualificationPhoto(index)}
                              className="absolute top-1 right-1 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Specialization</label>
                      <input 
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="e.g., Criminal Law, Corporate Law"
                        value={tempPracticeAreas}
                        onChange={handleTempPracticeAreasChange}
                      />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Professional Biography</label>
                      <textarea 
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors h-32"
                        placeholder="Tell clients about your experience and expertise..."
                      ></textarea>
                    </div>
                  </div>

                  {/* Save Button */}
                  <div className="flex justify-end pt-4">
                    <button
                      onClick={handleSaveChanges}
                      className="px-2 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;