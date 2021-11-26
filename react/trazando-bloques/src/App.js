import "./App.css";
import Advertisement from "./components/Advertisement/Advertisement";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Navigation from "./components/Navigation/Navigation";
import Subcontent from "./components/SubContent/SubContent";

function App() {
  return (
    <div className="container">
      <Header />
      <Navigation />
      <Main>
        <Subcontent />
        <Subcontent />
        <Subcontent />
        <Advertisement />
      </Main>
    </div>
  );
}

export default App;
