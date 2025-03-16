import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import { toast } from "react-toastify";
import CaseCard from "../Components/CaseCard";
import TaskList from "../Components/TaskList";
import NoteList from "../Components/NoteList";
import ScheduledMeetings from "../Components/scheduledMeetings";
import ScheduleMeeting from "../Components/ScheduleMeeting";
import useConversation from "../zustand/useConversation";
import ChatButton from "../Components/ChatButton";
import axios from "axios";

function Home() {
  const { userData, backendUrl } = useContext(AppContext);
  const navigate = useNavigate();
  const { setSelectedConversation } = useConversation();
  const [lawyerId, setLawyerId] = useState(null);

  const caseId = "67cd4ab0240c311403203c96";

  useEffect(() => {
    const fetchCaseParticipants = async () => {
      try {
        const res = await axios.get(`${backendUrl}/api/case/${caseId}/participants`, {
          withCredentials: true,
        });
        if (res.data.success) {
          setLawyerId(res.data.data.lawyerId);
          setSelectedConversation({
            _id: res.data.data.lawyerId,
            isLawyer: true,
          });
        }
      } catch (error) {
        console.error("Error fetching case participants:", error);
        toast.error("Failed to load case data");
      }
    };

    if (userData) {
      fetchCaseParticipants();
    }
  }, [userData, backendUrl, caseId, setSelectedConversation]);

  return (
    <div>
      <Header />
      <Sidebar activeTab="Dashboard" />
      <main className="ml-64 p-6 lg:p-8 pt-24">
        <div className="bg-white text-gray-900 rounded-3xl shadow-xl p-5 mb-6 mt-5 relative overflow-hidden transform transition-all duration-300 hover:shadow-2xl w-290">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-100 rounded-full filter blur-3xl opacity-50 animate-pulse animation-delay-2000"></div>
          </div>
          <div className="relative z-10 flex flex-col md:flex-row justify-between gap-8">
            <div className="flex-1 space-y-8">
              <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                Welcome back, {userData?.fullName || "Counselor"}
              </h2>
              <CaseCard caseId={caseId} />
            </div>
            <div className="self-center md:self-start">
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm transform transition-all duration-300 hover:shadow-lg">
                <video
                  src="images/lawyer2.mp4"
                  autoPlay
                  loop
                  muted
                  className="w-full h-[240px] object-cover rounded-lg"
                  aria-label="Legal information video"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all">
            <div className="h-[550px]">
              <TaskList caseId={caseId} />
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all">
            <div className="h-[550px]">
              <NoteList />
            </div>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all">
            <div className="h-[350px]">
            <ScheduleMeeting caseId={caseId} />
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all">
            <div className="h-[350px]">
            <ScheduledMeetings />
            </div>
          </div>
        </div>

        <ChatButton/>
      </main>
    </div>
  );
}

export default Home;