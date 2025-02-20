import React from 'react';
import { Check } from 'lucide-react';

function TaskList() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
        <h2 className="text-xl font-semibold">TASKS</h2>
      </div>

      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center">
            <Check className="w-3 h-3 text-gray-300" />
          </div>
          <div>
            <h3 className="font-medium">Upload Supporting Documents</h3>
            <p className="text-sm text-gray-500">Upload a scanned copy of your lease agreement by 05</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center">
            <Check className="w-3 h-3 text-gray-300" />
          </div>
          <div>
            <h3 className="font-medium">Submit Evidence</h3>
            <p className="text-sm text-gray-500">Upload photos of the accident site for review</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center">
            <Check className="w-3 h-3 text-gray-300" />
          </div>
          <div>
            <h3 className="font-medium">Provide Background Information</h3>
            <p className="text-sm text-gray-500">List the events leading up to the incident with dates and times</p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center">
            <Check className="w-3 h-3 text-gray-300" />
          </div>
          <div>
            <h3 className="font-medium">Read Provided Resources</h3>
            <p className="text-sm text-gray-500">Read the attached guide on intellectual property rights before our next meeting</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskList;