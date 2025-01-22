import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../redux/actions/todoActions';

const AddTodo = () => {

  const [text, setText] = useState("")

  const dispatch = useDispatch();
 
  return (
    <div>
      <input placeholder='Enter task here' value={text} onChange={(e) => setText(e.target.value)}/>
      <button onClick={()=> {dispatch(addTask(text)); setText("");}}>Add</button>
    </div>
  )
}

export default AddTodo