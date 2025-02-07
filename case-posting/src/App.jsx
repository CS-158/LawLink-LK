import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import CreatePost from "./components/CreatePost";

function App() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />
      <div className="flex flex-col flex-1 bg-gray-100">
        {/* Top Navbar */}
        <Navbar />
        {/* Main Content */}
        <main className="p-6">
          <CreatePost />
        </main>
      </div>
    </div>
  );
}

export default App;
