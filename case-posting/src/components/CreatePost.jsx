export default function CreatePost() {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Create a Post</h1>
        <form className="space-y-4">
          {/* Subject */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Subject</label>
            <input
              type="text"
              placeholder="Subject..."
              className="w-full p-2 border rounded-lg focus:outline-blue-500"
            />
          </div>
          {/* Case Type and District */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Case Type</label>
              <select className="w-full p-2 border rounded-lg">
                <option>Select case type</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">District</label>
              <select className="w-full p-2 border rounded-lg">
                <option>Select district</option>
              </select>
            </div>
          </div>
          {/* Court Date */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Court Date</label>
            <input
              type="date"
              className="w-full p-2 border rounded-lg focus:outline-blue-500"
            />
          </div>
        </form>
      </div>
    );
  }
  