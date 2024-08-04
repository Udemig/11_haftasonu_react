import "./App.css";
import UserPage from "./component/UserPage";

import Counter from "./component/Counter";
import CounterClass from "./component/CounterClass";
import Example from "./component/KoşulluRenderlama";
import Example2 from "./component/ÇokluRenderlama/Example2";
function App() {
  return (
    <div className="App">
      {/* <Counter />
      <CounterClass /> */}
      {/* <UserPage /> */}
      <Example />
      <Example2 />
    </div>
  );
}

export default App;
