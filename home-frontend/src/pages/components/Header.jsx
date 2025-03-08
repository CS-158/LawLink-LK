import React from "react";

function Header() {
  return (
    <div className="bg-white shadow-md p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Welcome Back!</h1>
        <div className="flex items-center space-x-4">
          <span>Notifications</span>
          <span>Profile</span>
        </div>
      </div>
    </div>
  );
}

export default Header;