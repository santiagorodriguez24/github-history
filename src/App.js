import logo from "./logo.svg";
import "./styles/app.scss";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as routes from "./constants/routes";
import NotFoundPage from "./pages/NotFound";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path={routes.ROUTE_HOME}
            render={(props) => (
              <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <p>
                    Edit <code>src/App.js</code> and save to reload.
                  </p>
                  <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn React
                  </a>
                </header>
              </div>
            )}
          />
          <Route render={(props) => <NotFoundPage {...props} />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
