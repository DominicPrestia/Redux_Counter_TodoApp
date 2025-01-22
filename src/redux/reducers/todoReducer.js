import { ADD, CLEARLIST, DELETE, EDIT } from "../types/todoTypes";

const initialState = {
    todos:[{id: new Date().getTime(), text: "Default Task"}]
}



export const todoReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD:
            return {
             todos:[...state.todos, {id: new Date().getTime(), text: action.text}]
            };
        case EDIT:
            return {
                todos: state.todos.map((task) =>{
                    if (task.id === action.task.id){
                        return action.task;
                    }else{
                        return task;
                    }
                }) 
            };
        case DELETE:
            return {
                todos: state.todos.filter((task) => {
                   return task.id !== action.task.id
                })};
        case CLEARLIST:
            return initialState;
    
        default:
            return state;
    }
}