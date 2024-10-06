import "./App.css";
import Accordion from "./components/accordion";
import Button from "./components/button";
import Counter from "./components/counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Accordion />

        <Counter />

        <Button />

        <a href="https://reactjs.org">React Öğren</a>
      </header>
    </div>
  );
}

export default App;
