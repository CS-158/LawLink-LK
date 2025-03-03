import { useState } from 'react'

function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-screen w-72 bg-[#0000CC] text-white p-8">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-16">
        <div className="w-8 h-8 bg-white rounded"></div>
        <h1 className="text-2xl font-bold">LawLink<span className="text-sm ml-1">LK</span></h1>
      </div>

      {/* Main Navigation */}
      <nav className="space-y-6">
        <a href="#" className="flex items-center gap-3 text-lg">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
            <path d="M4 4H20V20H4V4Z" stroke="currentColor" strokeWidth="2"/>
          </svg>
          Dashboared
        </a>
        <a href="#" className="flex items-center gap-3 text-lg">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
            <path d="M12 4L3 9L12 14L21 9L12 4Z" stroke="currentColor" strokeWidth="2"/>
          </svg>
          Create post
        </a>
        <a href="#" className="flex items-center gap-3 text-lg">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
            <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
          </svg>
          Ask lexbot
        </a>
        <a href="#" className="flex items-center gap-3 text-lg">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
            <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2"/>
          </svg>
          Settings
        </a>
      </nav>

      {/* My Cases Section */}
      <div className="mt-16">
        <h2 className="text-lg font-bold mb-6">MY CASES</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-blue-400"></div>
            <span>CASE NAME</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
            <span>CASE NAME</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-purple-400"></div>
            <span>CASE NAME</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function Header() {
  return (
    <div className="fixed top-0 right-0 left-72 h-20 bg-white flex items-center justify-end px-8 gap-6">
      <button className="p-2 hover:bg-gray-100 rounded-full">
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </button>
      <button className="p-2 hover:bg-gray-100 rounded-full">
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 16V12M12 8H12.01" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </button>
      <button className="p-2 hover:bg-gray-100 rounded-full">
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </button>
      <div className="flex items-center gap-3">
        <span className="font-medium">DESHAN FERNANDO</span>
        <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
      </div>
    </div>
  )
}

function App() {
  const [formData, setFormData] = useState({
    subject: '',
    caseType: '',
    district: '',
    courtDate: '',
    description: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen bg-[#EEF1FF]">
      <Sidebar />
      <Header />
      
      <main className="ml-72 pt-20 p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-[#0000CC] mb-8 text-center">Create a post</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Subject */}
            <div>
              <label className="block text-lg text-[#8B8BDC] mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject..."
                className="w-full px-4 py-3 rounded-lg bg-[#EEF1FF] border-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Case Type and District */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-lg text-[#8B8BDC] mb-2">Case type</label>
                <select
                  name="caseType"
                  value={formData.caseType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#EEF1FF] border-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select case type</option>
                  <option value="civil">Civil</option>
                  <option value="criminal">Criminal</option>
                  <option value="family">Family</option>
                </select>
              </div>
              
              <div>
                <label className="block text-lg text-[#8B8BDC] mb-2">District</label>
                <select
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#EEF1FF] border-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select district</option>
                  <option value="colombo">Colombo</option>
                  <option value="gampaha">Gampaha</option>
                  <option value="kalutara">Kalutara</option>
                </select>
              </div>
            </div>

            {/* Court Date */}
            <div>
              <label className="block text-lg text-[#8B8BDC] mb-2">Court date</label>
              <input
                type="date"
                name="courtDate"
                value={formData.courtDate}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#EEF1FF] border-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-lg text-[#8B8BDC] mb-2">Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Write clear description about your case"
                rows="6"
                className="w-full px-4 py-3 rounded-lg bg-[#EEF1FF] border-none focus:ring-2 focus:ring-blue-500 resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#0000CC] text-white py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}

export default App