import { 
    FaThLarge, 
    FaPencilAlt, 
    FaRobot, 
    FaCog 
  } from 'react-icons/fa';
  
  function Sidebar({ activePage, setActivePage }) {
    const cases = [
      { id: 1, name: 'CASE NAME', color: 'bg-blue-500' },
      { id: 2, name: 'CASE NAME', color: 'bg-teal-400' },
      { id: 3, name: 'CASE NAME', color: 'bg-purple-500' }
    ];
  
    return (
      <div className="w-64 bg-primary flex flex-col h-full">
        {/* Logo */}
        <div className="p-4 border-b border-primary-dark">
          <div className="flex items-center">
            <div className="text-white font-bold text-2xl">
              <span className="flex items-center">
                <span className="text-3xl mr-2">⬚</span> 
                LawLink <span className="text-sm ml-1">LK</span>
              </span>
            </div>
          </div>
        </div>
  
        {/* Navigation */}
        <nav className="flex-1 py-4">
          <div 
            className={`sidebar-item ${activePage === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActivePage('dashboard')}
          >
            <FaThLarge className="sidebar-icon" /> Dashboarerd
          </div>
          <div 
            className={`sidebar-item ${activePage === 'createPost' ? 'active' : ''}`}
            onClick={() => setActivePage('createPost')}
          >
            <FaPencilAlt className="sidebar-icon" /> Create post
          </div>
          <div 
            className={`sidebar-item ${activePage === 'askLexbot' ? 'active' : ''}`}
            onClick={() => setActivePage('askLexbot')}
          >
            <FaRobot className="sidebar-icon" /> Ask lexbot
          </div>
          <div 
            className={`sidebar-item ${activePage === 'settings' ? 'active' : ''}`}
            onClick={() => setActivePage('settings')}
          >
            <FaCog className="sidebar-icon" /> Settings
          </div>
        </nav>
  
        {/* Divider */}
        <div className="border-t border-primary-dark my-2"></div>
  
        {/* Cases */}
        <div className="py-4">
          <div className="text-white font-bold px-6 mb-2">MY CASES</div>
          {cases.map(caseItem => (
            <div key={caseItem.id} className="case-item">
              <div className={`case-dot ${caseItem.color}`}></div>
              <div>{caseItem.name}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Sidebar;