import "./App.css";
import { Router } from "@reach/router";
import Productview from "./views/ProductView";
import Home from "./views/Home";

function App() {
  return (
    <Router>
      <Home path="/" />
      <Productview path=":_id" />
      <Productview path="/edit/:_id" />
    </Router>
  );
}

export default App;
