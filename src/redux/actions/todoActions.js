import { ADD, CLEARLIST, DELETE, EDIT } from "../types/todoTypes"

export const addTask = (text) => {
    return {type: ADD, text:text};
}

export const deleteTask = (task) => {
    return {type: DELETE, task:task};
}

export const editTask = (task) => {
    return {type: EDIT, task:task};
}

export const clearTaskList = () => {
    return {type: CLEARLIST};
}