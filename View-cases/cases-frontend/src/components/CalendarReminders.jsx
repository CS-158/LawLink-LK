import React from 'react';
import { X } from 'lucide-react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Default styling for the calendar

const CalendarReminders = ({ onClose }) => {
  const events = [
    { date: new Date(2018, 10, 3), title: "EVENT ONE" }, // November is month 10 (0-indexed)
    { date: new Date(2018, 10, 2), title: "EVENT TWO" },
    { date: new Date(2018, 10, 28), title: "EVENT THREE" },
    { date: new Date(2018, 10, 27), title: "EVENT FOUR" },
    { date: new Date(2018, 10, 28), title: "EVENT TWO" }, // Duplicate for demonstration
  ];

  // Function to highlight event dates
  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const eventDate = events.find(event => 
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear()
      );
      if (eventDate) {
        return 'bg-blue-100 rounded-full text-blue-800 font-bold'; // Tailwind classes
      }
    }
    return null;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-3/4 max-w-4xl p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Calendar Reminders</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Flex container for calendar and upcoming events */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Calendar Section */}
          <div className="flex-1">
            <Calendar
              tileClassName={tileClassName}
              value={new Date(2018, 10, 1)}
            />
          </div>

          {/* Upcoming Events Section */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-4">Upcoming Events</h3>
            <div className="space-y-4">
              {events.map((event, index) => (
                <div key={index} className="border-b pb-4">
                  <div className="text-sm text-gray-500">{event.date.toDateString()}</div>
                  <div className="font-medium">{event.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarReminders;