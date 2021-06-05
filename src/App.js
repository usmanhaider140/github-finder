import "./App.css";
import React from "react";
import Navbar from "./components/layout/Navbar";
import "font-awesome/css/font-awesome.min.css";

import User from "./components/users/User";
import Home from "./components/pages/Home";
import "react-toastify/dist/ReactToastify.css";
import Alert from "./components/layout/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/pages/About";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";
import NotFound from "./components/pages/NotFound";

const App = (props) => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>

              <Alert alert={alert} />
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
