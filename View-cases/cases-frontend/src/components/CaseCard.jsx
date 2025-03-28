import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const CaseCard = ({ title, description, expanded }) => {
  const [isExpanded, setIsExpanded] = React.useState(expanded);

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div 
        className="p-6 cursor-pointer flex justify-between items-start"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div>
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          <p className={`mt-2 text-gray-600 ${isExpanded ? '' : 'line-clamp-2'}`}>
            {description}
          </p>
        </div>
        <button className="ml-4 p-1 hover:bg-gray-100 rounded">
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </button>
      </div>
      {isExpanded && (
        <div className="px-6 pb-6">
          <div className="mt-4 flex justify-between items-center">
            <div>
              <h4 className="text-sm font-medium text-gray-900">Here's how I can assist you:</h4>
              <ul className="mt-2 text-sm text-gray-600 list-disc list-inside space-y-1">
                <li>Review Documents: I will review your property deed, survey reports, and any other related documents to assess the boundary dispute.</li>
                <li>Negotiation: I will contact your neighbor to attempt an amicable resolution and clarify the boundary lines.</li>
              </ul>
            </div>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              WRITE AN OFFER
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CaseCard;