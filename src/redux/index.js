import { combineReducers } from "redux";
import { todoReducer } from './reducers/todoReducer'
import { counterReducer } from './reducers/counterReducer'
import { legacy_createStore as createStore } from "redux";


const rootReducer = combineReducers({
    todoReducer,
    counterReducer,
});


export const store = createStore(rootReducer);

