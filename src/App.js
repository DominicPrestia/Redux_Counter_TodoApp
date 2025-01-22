import { legacy_createStore as createStore } from "redux";
import { counterReducer } from './redux/reducers/counterReducer'
import Counter from "./components/Counter";
import { Provider } from "react-redux";
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import { todoReducer } from "./redux/reducers/todoReducer";

function App() {

  const store = createStore(todoReducer);


  return (
    <Provider store={store}>
      <div className="App">
        {/* <Counter /> */}
      <AddTodo/>
      <TodoList/>
      </div>
    </Provider>
  );
}

export default App;
