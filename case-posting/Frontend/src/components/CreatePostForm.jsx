import { useState } from 'react';
import { FaCalendarAlt, FaPlus } from 'react-icons/fa';

function CreatePostForm() {
  const [formData, setFormData] = useState({
    subject: '',
    caseType: '',
    district: '',
    courtDate: '',
    description: '',
    agreeTerms: false // New state for terms and conditions checkbox
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.agreeTerms) {
      setError('Please agree to the terms and conditions.');
      return;
    }

    setError('');
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-primary text-center mb-6">Create a post</h1>
      <div className="border-b border-gray-200 mb-6"></div>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-lg text-purple-400 mb-2">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject..."
            className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-lg text-purple-400 mb-2">Case type</label>
            <select
              name="caseType"
              value={formData.caseType}
              onChange={handleChange}
              className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select case type</option>
              <option value="criminal">Criminal</option>
              <option value="civil">Civil</option>
              <option value="family">Family</option>
            </select>
          </div>

          <div>
            <label className="block text-lg text-purple-400 mb-2">District</label>
            <select
              name="district"
              value={formData.district}
              onChange={handleChange}
              className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select district</option>
              <option value="colombo">Colombo</option>
              <option value="gampaha">Gampaha</option>
              <option value="kandy">Kandy</option>
            </select>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-lg text-purple-400 mb-2">Court date</label>
          <div className="relative">
            <input
              type="date"
              name="courtDate"
              value={formData.courtDate}
              onChange={handleChange}
              className="w-full p-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <FaCalendarAlt className="text-gray-400" />
            </div>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-lg text-purple-400 mb-2">Description</label>
          <div className="bg-gray-50 rounded-lg p-4">
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Write a clear description about your case"
              className="w-full p-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary min-h-[100px]"
            ></textarea>
            <div className="flex justify-end mt-2">
              <button type="button" className="text-gray-400 hover:text-primary">
                <FaPlus />
              </button>
            </div>
          </div>
        </div>

        {/* Terms and Conditions Checkbox */}
        <div className="mb-6 flex items-center">
          <input
            type="checkbox"
            name="agreeTerms"
            checked={formData.agreeTerms}
            onChange={handleChange}
            className="mr-2"
          />
          <label className="text-lg text-gray-600">
            I have read and agreed to the Terms and Conditions. 
            <a href="#" className="text-blue-500 ml-1">Click here.</a>
          </label>
        </div>

        {/* Error Message */}
        {error && <div className="bg-yellow-100 text-yellow-700 p-3 rounded-lg mb-4">{error}</div>}

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-accent hover:bg-primary text-white font-bold py-3 px-8 rounded-full w-full max-w-md transition-colors duration-200"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePostForm;
