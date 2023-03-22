import React from 'react'
import TaskRow from './TaskRow'

function TasksTable({ tableTitle = 'Lista de Tareas', tasks, toggleTask, deleteOneTask, doneValue = false }) {
  function renderRows() {
    return tasks
      .filter((task) => task.done === doneValue)
      .map((task) => (
        <TaskRow
          key={task.name}
          task={task}
          toggleTask={toggleTask}
          deleteOneTask={deleteOneTask}
        />
      ))
  }
  return (
    <div className='table__container'>
      <table>
        <thead>
          <tr>
            <th className='table__title'>{tableTitle}</th>
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </table>
    </div>
  )
}

export default TasksTable
