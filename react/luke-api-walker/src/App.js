import "./App.css";
import Home from "./views/Home";
import { Router } from "@reach/router";

function App() {
  return (
    <Router>
      <Home path="/:personId" />
      <Home default />
    </Router>
  );
}

export default App;
