import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import { Login } from "./components";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
