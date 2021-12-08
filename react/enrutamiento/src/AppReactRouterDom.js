import "./App.css";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Alpha from "./views/Alpha";
import Beta from "./views/Beta";
import Home from "./views/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="alpha" element={<Alpha />} />
          <Route path="beta" element={<Beta />}>
            <Route path=":numero" element={<Beta />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
