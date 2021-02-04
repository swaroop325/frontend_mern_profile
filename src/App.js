import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";
import { Login, Register, Profile } from "./components";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return localStorage.getItem("token") ? (
              <Redirect to="/profile" />
            ) : (
              <Login />
            );
          }}
        />
        <Route
          exact
          path="/register"
          render={() => {
            return localStorage.getItem("token") ? (
              <Redirect to="/profile" />
            ) : (
              <Register />
            );
          }}
        />
        <Route
          exact
          path="/profile"
          render={() => {
            return localStorage.getItem("token") ? (
              <Profile />
            ) : (
              <Redirect to="/" />
            );
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;
