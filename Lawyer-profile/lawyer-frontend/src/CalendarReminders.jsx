import React from 'react';
import { X } from 'lucide-react';

const CalendarReminders = ({ onClose }) => {
  const events = [
    { date: "Sunday, 3 November 2018", title: "EVENT ONE" },
    { date: "Monday, 2 November 2018", title: "EVENT TWO" },
    { date: "Wednesday, 28 November 2018", title: "EVENT THREE" },
    { date: "Friday, 27 November 2018", title: "EVENT FOUR" },
    { date: "February, 28 November 2018", title: "EVENT TWO" },
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Calendar Reminders</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="space-y-4">
          {events.map((event, index) => (
            <div key={index} className="border-b pb-4">
              <div className="text-sm text-gray-500">{event.date}</div>
              <div className="font-medium">{event.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarReminders;