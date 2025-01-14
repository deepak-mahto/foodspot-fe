import React from "react";
import FooterComponent from "./components/Footer";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./common/appStore";
import HeaderComponent from "./components/Header";

function App() {
  return (
    <Provider store={appStore}>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </Provider>
  );
}

export default App;
