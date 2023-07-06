import "./App.css";
import CounterContainer from "./containers/CounterContainer";
import TodosContainer from "./containers/TodosContainer";

// 주석을 통한 설명은 Todos파트보단 Counter파트에 많으니 참고할 것

function App() {
  return (
    <div className="App">
      <CounterContainer />
      <TodosContainer />
    </div>
  );
}

export default App;
