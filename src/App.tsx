import "./App.css";
import CounterContainer from "./containers/CounterContainer";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="App">
      <CounterContainer />
      <Todos />
    </div>
  );
}

export default App;
