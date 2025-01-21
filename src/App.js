import React from "react";
import FooterComponent from "./components/Footer";
import { Outlet } from "react-router-dom";
import HeaderComponent from "./components/Header";
import { AuthProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <AuthProvider>
        <HeaderComponent />
        <Outlet />
        <FooterComponent />
        <ToastContainer />
      </AuthProvider>
    </>
  );
}

export default App;
