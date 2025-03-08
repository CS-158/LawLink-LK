import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

function LawyerDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-6">
          <h1 className="text-2xl font-bold">Lawyer Dashboard</h1>
          <p>Welcome to your dashboard!</p>
        </div>
      </div>
    </div>
  );
}

export default LawyerDashboard;