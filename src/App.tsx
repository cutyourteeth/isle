import React from "react";
import "./common/css/animations.css";
import "./common/css/reset.css";
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
