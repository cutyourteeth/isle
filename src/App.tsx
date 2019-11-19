import React from "react";
import "./common/css/animations.css";
import "./common/css/reset.css";
import { Home } from "./components/main/Home";
import { SiteRecord } from "./components/main/SiteRecord";

const App: React.FC = () => {
  return (
    <>
      <Home />
      <SiteRecord />
    </>
  );
};

export default App;
