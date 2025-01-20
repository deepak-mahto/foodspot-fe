import React from "react";
import FooterComponent from "./components/Footer";
import { Outlet } from "react-router-dom";
import HeaderComponent from "./components/Header";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <HeaderComponent />
        <Outlet />
        <FooterComponent />
      </AuthProvider>
    </>
  );
}

export default App;
