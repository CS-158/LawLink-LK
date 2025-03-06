import React from 'react';
import { FileText } from 'lucide-react';

function DocumentList() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
        <h2 className="text-xl font-semibold">DOCUMENTS</h2>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <FileText className="w-5 h-5 text-gray-400" />
          <span className="text-gray-600">Employment Agreement</span>
        </div>
        <div className="flex items-center gap-3">
          <FileText className="w-5 h-5 text-gray-400" />
          <span className="text-gray-600">Non-Disclosure Agreement (NDA)</span>
        </div>
        <div className="flex items-center gap-3">
          <FileText className="w-5 h-5 text-gray-400" />
          <span className="text-gray-600">Partnership Deed</span>
        </div>
        <div className="flex items-center gap-3">
          <FileText className="w-5 h-5 text-gray-400" />
          <span className="text-gray-600">Lease Agreement</span>
        </div>
      </div>
    </div>
  );
}

export default DocumentList;