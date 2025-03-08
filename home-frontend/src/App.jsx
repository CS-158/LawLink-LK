import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/home/Home";
import NotFound from "./pages/NotFound";
import CookiePopup from "./components/CookiePopup";
import LoadingScreen from "./pages/loading/LoadingScreen";
import ClientCreateAcc from "./pages/auth/Registration/ClientCreateAcc";
import ClientLogin from "./pages/auth/ClientLogin/ClientLogin";
import VerifyEmail from "./pages/auth/ClientLogin/Verify-email";
import PasswordReset from "./pages/auth/ClientLogin/Password-Rest";
import EmailForResetPass from "./pages/auth/ClientLogin/EmailForResetPass";
import NewPassword from "./pages/auth/ClientLogin/Newpassword";
import LawyerCreateAcc from "./pages/auth/registration/LawyerCreateAcc";
import LawyerVerifyEmail from "./pages/auth/LawyerLogin/Lawyer-verify-email";
import LawyerLogin from "./pages/auth/LawyerLogin/LawyerLogin";
import LawyerEmailForResetPass from "./pages/auth/LawyerLogin/LawyerEmailForResetPass";
import LawyerNewPassword from "./pages/auth/LawyerLogin/LawyerNewpassword";
import LawyerRestPasswordOtp from "./pages/auth/LawyerLogin/LawyerPassword-Rest";
import ClientDashboard from "./pages/Client/ClientDashboard";
import LawyerDashboard from "./pages/Lawyer/LawyerDashboard";
import Chat from "./pages/Chat/chat";
import { AppContextProvider } from "./context/AppContext";
import { AuthContextProvider } from "./context/AuthContext";
import { SocketProvider } from "./context/SocketContext";
import ProtectedRoute from "./context/ProtectRoute";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AuthContextProvider>
      <AppContextProvider>
        <SocketProvider>
          <Router>
            {isLoading && <LoadingScreen />}
            {!isLoading && (
              <>
                <Routes>
                  {/* Public Routes */}
                  <Route path="/" element={<Home />} /> {/* No protection on Home page */}
                  <Route path="/create-account" element={<ClientCreateAcc />} />
                  <Route path="/login" element={<ClientLogin />} />
                  <Route path="/verify-email" element={<VerifyEmail />} />
                  <Route path="/password-reset" element={<PasswordReset />} />
                  <Route path="/email-for-password-reset" element={<EmailForResetPass />} />
                  <Route path="/create-new-password" element={<NewPassword />} />
                  <Route path="/lawyer-create-account" element={<LawyerCreateAcc />} />
                  <Route path="/lawyer-verify-email" element={<LawyerVerifyEmail />} />
                  <Route path="/lawyer-login" element={<LawyerLogin />} />
                  <Route path="/lawyer-email-for-password-reset" element={<LawyerEmailForResetPass />} />
                  <Route path="/lawyer-create-new-password" element={<LawyerNewPassword />} />
                  <Route path="/lawyer-password-rest" element={<LawyerRestPasswordOtp />} />

                  {/* Protected Routes */}
                  <Route
                    path="/client/dashboard"
                    element={
                      <ProtectedRoute>
                        <ClientDashboard />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/lawyer/dashboard"
                    element={
                      <ProtectedRoute isLawyerRoute>
                        <LawyerDashboard />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/chat"
                    element={
                      <ProtectedRoute>
                        <Chat />
                      </ProtectedRoute>
                    }
                  />

                  {/* 404 Page */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
                <CookiePopup />
                <ToastContainer
                  position="top-right"
                  autoClose={3000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
              </>
            )}
          </Router>
        </SocketProvider>
      </AppContextProvider>
    </AuthContextProvider>
  );
};

export default App;
