import React, { useEffect } from 'react'; // Import useEffect
import { X } from 'lucide-react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Default styling for the calendar

const CalendarReminders = ({ onClose }) => {
  const events = [
    { date: new Date(2025, 3, 3), title: "Court Hearing & Consultations Steave vs John", type: "meeting" }, // April is month 3 (0-indexed)
    { date: new Date(2025, 3, 2), title: "Court Hearings & Filing Deadlines", type: "deadline" },
    { date: new Date(2025, 3, 12), title: "Client Meetings & Consultations", type: "meeting" },
    { date: new Date(2025, 3, 15), title: "Client Meetings & Consultations", type: "deadline" },
    { date: new Date(2025, 3, 17), title: "Legal Research & Case Preparation", type: "reminder" },
    { date: new Date(2025, 3, 28), title: "Client Meetings & Consultations", type: "meeting" },
    { date: new Date(2025, 3, 25), title: "Client Meetings & Consultations", type: "deadline" },
    { date: new Date(2025, 3, 27), title: "Legal Research & Case Preparation", type: "reminder" },
    { date: new Date(2025, 3, 28), title: "Payment & Invoice Follow-Ups", type: "deadline" }, // Duplicate for demonstration
  ];

  // Sort events by date (latest to farthest)
  const sortedEvents = [...events].sort((a, b) => a.date - b.date);

  // Function to assign colors based on event type
  const getEventColor = (type) => {
    switch (type) {
      case 'meeting':
        return 'bg-blue-100 text-blue-800'; // Blue for meetings
      case 'deadline':
        return 'bg-red-100 text-red-800'; // Red for deadlines
      case 'reminder':
        return 'bg-yellow-100 text-yellow-800'; // Yellow for reminders
      default:
        return 'bg-gray-100 text-gray-800'; // Gray for other events
    }
  };

  // Function to highlight event dates
  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const eventDate = events.find(event => 
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear()
      );
      if (eventDate) {
        return `rounded-full font-bold ${getEventColor(eventDate.type)}`; // Apply dynamic color
      }
    }
    return null;
  };

  // Prevent main page scrolling when the modal is open
  useEffect(() => {
    document.body.classList.add('overflow-hidden'); // Disable scrolling
    return () => {
      document.body.classList.remove('overflow-hidden'); // Re-enable scrolling
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-lg w-3/4 max-w-4xl p-6">
        {/* Header with close button */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Calendar Reminders</h2>
          <button onClick={onClose} className="p-4 hover:bg-gray-100 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Flex container for calendar and upcoming events */}
        <div className="flex gap-6">
          {/* Calendar Section */}
          <div className="flex-1">
            <Calendar
              tileClassName={tileClassName}
              value={new Date(2025, 1, 28)}
              // calendarType="ISO 8601" // Ensure this is a valid calendar type
              formatShortWeekday={(locale, date) => ['S', 'M', 'T', 'W', 'T', 'F', 'S'][date.getDay()]}
              className="border-none rounded-lg shadow-sm"
            />
          </div>

          {/* Upcoming Events Section */}
          <div className="flex-1 flex flex-col">
            <h3 className="text-lg font-semibold mb-4">Upcoming Events</h3>
            {/* Scrollable Container */}
            <div className="overflow-y-auto max-h-96 border border-gray-200 rounded-lg p-4">
              <div className="space-y-4">
                {sortedEvents.map((event, index) => (
                  <div key={index} className="border-b pb-4">
                    <div className="text-sm text-gray-500">{event.date.toDateString()}</div>
                    <div className="font-medium">
                      <span className={`inline-block w-2 h-2 rounded-full mr-2 ${getEventColor(event.type)}`}></span>
                      {event.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Legend */}
            <div className="mt-4">
              <h4 className="text-sm font-semibold mb-2"></h4>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-100"></span>
                  <span className="text-sm">Meetings</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-100"></span>
                  <span className="text-sm">Deadlines</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-yellow-100"></span>
                  <span className="text-sm">Reminders</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarReminders;