import "./App.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Alpha from "./views/Alpha";
import Beta from "./views/Beta";
import Home from "./views/Home";
import { Router } from "@reach/router";

function App() {
  return (
    <div className="container">
      <Header />
      <Navigation />
      <Router>
        <Home path="/" />
        <Alpha path="/alpha" />
        <Beta path="/beta" />
        <Beta path="/beta/:numero" />
      </Router>
    </div>
  );
}

export default App;
