import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NinetailedTrackPage from "./components/TrackPage";

function App() {
  return (
    <div className="app">
      <Router>
        <NinetailedTrackPage />
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/">
              <p>Home Page</p>
            </Route>
            <Route path="/pricing">
              <p>Pricing page</p>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
