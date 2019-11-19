import React from "react";
import { HashRouter, Link, Route, Switch } from "react-router-dom";
import { About } from "../subs/About";
import { Thoughts } from "../subs/Thoughts";
import { Works } from "../subs/Works";
import { HomeWrapper } from "./style";

export const Home = () => {
  const showMenu = () => {};

  return (
    <HomeWrapper>
      <HashRouter>
        <div className="header">
          <div className="header-left">CAPERAL</div>
          <div className="header-right">
            <i
              className="header-ham-button"
              onClick={showMenu}
              aria-label="menu"
            ></i>
            <div className="header-links">
              <Link to="/work" className="header-link">
                WORK
              </Link>
              <Link to="/thoughts" className="header-link">
                THOUGHTS
              </Link>
              <Link to="/about" className="header-link">
                ABOUT
              </Link>
            </div>
          </div>
        </div>

        <div className="title">
          <h1>lean on the tree</h1>
          <h1>Yeah, full of pillows</h1>
          <p>Minds shall reset, then dream wild</p>
        </div>

        <div className="main-view">
          <Switch>
            <Route path="/work" exact={true} component={Works} />
            <Route path="/thoughts" exact={true} component={Thoughts} />
            <Route path="/about" exact={true} component={About} />
          </Switch>
        </div>
      </HashRouter>
    </HomeWrapper>
  );
};
