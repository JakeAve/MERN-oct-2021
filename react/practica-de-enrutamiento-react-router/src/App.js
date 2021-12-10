import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Notfound from "./view/NotFound";
import Home from "./view/Home";
import Number from "./view/Number";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path=":number" element={<Number />}>
          <Route path=":color" element={<Number />}>
            <Route path=":backgroundColor" element={<Number />} />
          </Route>
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  );
}

export default App;
