import React from "react";
import { useState, useEffect } from "react";
import HeaderComponent from "./components/Header";
import FooterComponent from "./components/Footer";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./common/appStore";

function App() {
  const [hideFooter, setHideFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setHideFooter(!isScrolledToBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <Provider store={appStore}>
      <HeaderComponent />
      <Outlet />
      {!hideFooter && <FooterComponent />}
    </Provider>
  );
}

export default App;
