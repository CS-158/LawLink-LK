import React, { useState, useRef, useEffect } from 'react';
import { Bell, Calendar, HelpCircle } from 'lucide-react';
import CalendarReminders from './CalendarReminders';

const Header = ({ displayName, practiceAreas, profilePicture }) => {
  const [notificationsVisible, setNotificationsVisible] = useState(false);
  const [calendarVisible, setCalendarVisible] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New case assigned: Smith vs. Johnson", date: "2023-10-01", read: false },
    { id: 2, message: "Reminder: Meeting with client at 3 PM", date: "2023-10-02", read: false },
    { id: 3, message: "Document review completed", date: "2023-10-03", read: false },
  ]);

  const notificationRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setNotificationsVisible(false);
      }
    };

    if (notificationsVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [notificationsVisible]);

  const toggleNotifications = () => {
    setNotificationsVisible(!notificationsVisible);
  };

  const toggleCalendar = () => {
    setCalendarVisible(!calendarVisible);
  };

  const handleMarkAllAsRead = () => {
    const updatedNotifications = notifications.map(notification => ({
      ...notification,
      read: true,
    }));
    setNotifications(updatedNotifications);
  };

  const hasUnreadNotifications = notifications.some(notification => !notification.read);

  return (
    <header className="bg-blue-800 h-16 flex items-center justify-between px-6 shadow-sm rounded-tl-full rounded-bl-full mt-2 ml-1">
      <h1 className="text-xl font-semibold text-gray-800"></h1>
      <div className="flex items-center gap-6">
        <button 
          className="p-2 hover:bg-blue-700 rounded-full transition-colors"
          onClick={toggleCalendar}
        >
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
        <a href='http://localhost:5174/'>
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
        </a>
      </div>
      {calendarVisible && <CalendarReminders onClose={() => setCalendarVisible(false)} />}
    </header>
  );
};

export default Header;