import './App.css'
import { useState, useEffect } from 'react'
import TaskCreator from './Components/TaskCreator'
import TasksTable from './Components/TasksTable'
import VisibilityTasks from './Components/VisibilityTasks'

function App() {
  const [taskList, setTaskList] = useState([])
  const [showCompleted, setShowCompleted] = useState(false)

  useEffect(() => {
    let showDoneTask = localStorage.getItem('showDoneTasks') === 'true'
    let tasks = localStorage.getItem('tasks')
    if (tasks) {
      setTaskList(JSON.parse(tasks))
      setShowCompleted(showDoneTask)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskList))
  }, [taskList])

  useEffect(() => {
    localStorage.setItem('showDoneTasks', showCompleted)
  }, [showCompleted])

  function createTask(newTask) {
    if (!taskList.find((task) => task.name === newTask)) {
      setTaskList([...taskList, { name: newTask, done: false }])
    } else {
      alert(`La tarea '${newTask}' ya existe. `)
    }
  }

  function deleteAllDone() {
    setTaskList(taskList.filter((task) => !task.done))
    setShowCompleted(false)
  }

  function deleteOneTask(task) {
    setTaskList(taskList.filter((tk) => tk.name != task.name))
  }

  function toggleTask(task) {
    setTaskList(
      taskList.map((tk) =>
        tk.name === task.name ? { ...tk, done: !tk.done } : tk
      )
    )
  }

  return (
    <main className='App'>
      <div className='container'>
        <TaskCreator createTask={createTask} />
        <TasksTable
          tasks={taskList}
          toggleTask={toggleTask}
          deleteOneTask={deleteOneTask}
        />

        <VisibilityTasks
          showCompleted={showCompleted}
          setShowCompleted={setShowCompleted}
          deleteAllDone={deleteAllDone}
        />

        {showCompleted === true && (
          <TasksTable
            tableTitle={'Tareas Hechas'}
            tasks={taskList}
            toggleTask={toggleTask}
            doneValue={showCompleted}
            deleteOneTask={deleteOneTask}
          />
        )}
      </div>
    </main>
  )
}

export default App
