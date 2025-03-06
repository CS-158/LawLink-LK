import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import CreatePostForm from './components/CreatePostForm'

function App() {
  const [activePage, setActivePage] = useState('createPost')

  return (
    <div className="flex h-screen bg-secondary overflow-hidden">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-y-auto p-4">
          {activePage === 'createPost' && <CreatePostForm />}
          {activePage === 'dashboard' && (
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold text-primary mb-4">Dashboard</h2>
              <p>Welcome to your LawLink dashboard.</p>
            </div>
          )}
          {activePage === 'askLexbot' && (
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold text-primary mb-4">Ask Lexbot</h2>
              <p>Ask your legal questions here.</p>
            </div>
          )}
          {activePage === 'settings' && (
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-bold text-primary mb-4">Settings</h2>
              <p>Manage your account settings.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default App