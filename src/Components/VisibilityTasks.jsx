import React from 'react'

function VisibilityTasks({ showCompleted, setShowCompleted, deleteAllDone }) {
  function handleDeleteAll() {
    if (window.confirm('Seguro quieres eliminar todas las tareas hechas?')) {
      deleteAllDone()
    }
  }

  return (
    <div className='visibility-container flex'>
      <div className='grow'>
        <button className='visibility__btn delete' onClick={handleDeleteAll}>
          Eliminar hechas
        </button>
      </div>
      <span className='visibility__text grow'>Mostrar tareas hechas</span>
      <div className='flex grow'>
        <input
          id='checkbox'
          className='vibility__input'
          type='checkbox'
          checked={showCompleted}
          onChange={(e) => setShowCompleted(!showCompleted)}
        />
        <label htmlFor='checkbox' className='visibility__switch'></label>
      </div>
    </div>
  )
}

export default VisibilityTasks
