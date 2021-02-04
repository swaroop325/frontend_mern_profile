import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Login, Register, Profile } from "./components";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
