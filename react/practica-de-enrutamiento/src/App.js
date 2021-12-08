import "./App.css";
import { Router } from "@reach/router";
import Home from "./views/Home";
import NotFound from "./views/404";
import Number from "./views/Number";

function App() {
  return (
    <Router>
      <Home path="/home" />
      <Number path="/:number" />
      <Number path="/:number/:color" />
      <Number path="/:number/:color/:backgroundColor" />
      <NotFound default />
    </Router>
  );
}

export default App;
