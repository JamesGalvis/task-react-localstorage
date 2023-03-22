import React from 'react'
import { useState } from 'react'

function TaskCreator({ createTask }) {
  const [task, setTask] = useState('')

  // Creating functions
  const handleSubmit = (e) => {
    e.preventDefault()
    createTask(task)
    setTask('')
  }
  return (
    <form onSubmit={handleSubmit} className='task-form' >
      <h1 className='task-form-title'>Crea tus tareas</h1>
      <input
        className='input-task'
        type='text'
        placeholder='Ingresa una tarea'
        onChange={(e) => setTask(e.target.value)}
        value={task}
      />
      <button className='create-btn'>Crear</button>
    </form>
  )
}

export default TaskCreator
