import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTask, editTask } from '../redux/actions/todoActions';

const TodoItem = ({task}) => {
  
  const [editing, setEditing] = useState(false)

  const dispatch = useDispatch();
  
  return (
    <div>
      {!editing ? <div>{task.text}</div> : <input value={task.text} onChange={(e) => dispatch(editTask({...task, text:e.target.value}))}/>}
      <button onClick={()=> setEditing(!editing)}>{!editing ? "EDIT" : "SAVE"}</button>
      <button onClick={()=> dispatch(deleteTask(task))}>Delete</button>
    </div>
  )
}

export default TodoItem