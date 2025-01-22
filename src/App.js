import { Provider } from "react-redux";
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import { store } from "./redux";
import Counter from "./components/Counter";

function App() {



  return (
    <Provider store={store}>
      <div className="App">
      <Counter />
      <AddTodo/>
      <TodoList/>
      </div>
    </Provider>
  );
}

export default App;
