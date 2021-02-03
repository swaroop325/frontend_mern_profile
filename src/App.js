import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Login, Register } from "./components";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
