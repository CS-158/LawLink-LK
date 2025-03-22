import React from "react";
import "./Nav.css";
import logo from "./Components/Images/logo.png";
import "remixicon/fonts/remixicon.css";

export default function Nav() {
  return (
    <div className="content">
      <div className="content-1">
        <img src={logo} alt="" />
      </div>
      <hr />
      <div className="content-2">
        <div className="dashboard">
          <div className="dashboard-1">
            <i class="ri-gallery-view-2"></i>
          </div>
          <div className="dashboard-2">
            <h2>Dashboared</h2>
          </div>
        </div>
        <div className="cases">
          <div className="cases-1">
            <i class="ri-eye-fill"></i>
          </div>
          <div className="cases-2">
            <h2>View Cases</h2>
          </div>
        </div>
        <div className="setting">
          <div className="setting-1">
            <i class="ri-settings-3-fill"></i>
          </div>
          <div className="setting-2">
            <h2>Settings</h2>
          </div>
        </div>
      </div>
      <hr />
      <div className="content-3">
        <h2>My Cases</h2>
        <div className="content-3-case-1">
          <div className="content-3-case-1-icon"></div>
          <div className="content-3-case-1-name">
            <p>Case Name</p>
          </div>
        </div>
        <div className="content-3-case-2">
          <div className="content-3-case-2-icon"></div>
          <div className="content-3-case-2-name">
            <p>Case Name</p>
          </div>
        </div>
        <div className="content-3-case-3">
          <div className="content-3-case-3-icon"></div>
          <div className="content-3-case-3-name">
            <p>Case Name</p>
          </div>
        </div>
      </div>
    </div>
  );
}
