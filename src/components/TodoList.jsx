import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TodoItem from './TodoItem'

import { clearTaskList } from '../redux/actions/todoActions'

const TodoList = () => {

  const taskList = useSelector((state) => state.todoReducer.todos)
  const dispatch = useDispatch();

  console.log(taskList)

  return (
    <div>
      <button onClick={()=> dispatch(clearTaskList())}>RESET LIST</button>
      {
        taskList.map((task, index) => {
          return <TodoItem key={index} task={task}/>
        })
      }
    </div>
  )
}

export default TodoList