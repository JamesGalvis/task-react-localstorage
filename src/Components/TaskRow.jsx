import React from 'react'

function TaskRow({ task, toggleTask, deleteOneTask }) {
  return (
    <tr className='table__row'>
      <td className='table__row-cell'>
        <button className='table__row-btn delete' onClick={() => deleteOneTask(task)}>
          Eliminar
        </button>
        <p className='table__row-text'>{task.name}</p>
        <input
          className='table__row-input'
          type='checkbox'
          name='done'
          checked={task.done}
          onChange={() => toggleTask(task)}
        />
      </td>
    </tr>
  )
}

export default TaskRow
