import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  link,
  NavLink,
  Switch,
} from "react-router-dom";
import Home from "../src/pages/Homepage";
import AddContact from "../src/pages/AddContact";
class Roter extends Component {
    render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/A" component={AddContact} />
        </div>
      </Router>
    );
  }
}
export default Roter;
