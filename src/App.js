import React from "react";
import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./common/appStore";

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
