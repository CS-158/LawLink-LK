import React from 'react';
import { Bell, Calendar, HelpCircle, Settings, Grid, Eye } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import CaseCard from './components/CaseCard';

const cases = [
  {
    title: 'Property Boundary Dispute',
    description: 'A homeowner disputes the boundary lines with a neighbor after a fence is built that may be encroaching onto their property. The lawyer is tasked with resolving the issue, including reviewing property deeds and survey reports, and potentially filing a case to enforce property rights.',
    expanded: true
  },
  {
    title: 'Real Estate Contract Breach',
    description: 'A client claims that the seller of a property has failed to honor the terms of a sale agreement, such as misrepresenting the condition of the property or not providing agreed-upon repairs. The lawyer helps the client pursue compensation or enforces the contract\'s terms.',
    expanded: false
  },
  {
    title: 'Zoning and Land Use Issues',
    description: 'A property owner wants to change the use of their land (e.g., from residential to commercial). The lawyer helps navigate local zoning laws, obtain necessary permits, and challenge zoning restrictions if the client\'s goals are hindered by current land-use regulations.',
    expanded: false
  }
];

function App() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-6xl mx-auto space-y-4">
            {cases.map((caseItem, index) => (
              <CaseCard key={index} {...caseItem} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;