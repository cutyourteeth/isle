import React from "react";
import "./assets/css/animations.css";
import { Home } from "./pages/home/Home";
import { SiteRecord } from "./pages/site-record/SiteRecord";

const App: React.FC = () => {
  return (
    <>
      <Home />
      <SiteRecord />
    </>
  );
};

export default App;
