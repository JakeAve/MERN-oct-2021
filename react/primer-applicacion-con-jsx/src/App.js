import logo from "./logo.svg";
import "./App.css";
import Title from "./components/Title/Tile";
import ButtonGrande from "./components/ButtonGrande/ButtonGrande";
import ClassComponent from "./components/ClassComponent/ClassComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Title />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ButtonGrande>Button 1</ButtonGrande>
        <ButtonGrande children="Button 2" />
        <ClassComponent />
      </header>
    </div>
  );
}

export default App;
