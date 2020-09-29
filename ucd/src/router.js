import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from "./component/app";
import Home from "./component/home";
import Login from "./component/login";

class ReactRoute extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul className="nav">
            　　　　　　
            <li>
              <Link to="/">App</Link>
            </li>
            　　　　　　
            <li>
              <Link to="/login">Login</Link>
            </li>
            　　　　　　
            <li>
              <Link to="/home">Home</Link>
            </li>
          </ul>
          <hr />
          <Route exact path="/" component={App} />
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
        </div>
      </Router>
    );
  }
}
export default ReactRoute;
