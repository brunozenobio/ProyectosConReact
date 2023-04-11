import { useState } from 'react'
import {Task} from './Task'
import './App.css'
import {NewTask} from './NewTask'
function App() {

  

  return (
    

   <section className="task-container">
    <NewTask></NewTask>
   <Task> 
      comprar
    </Task>
    <Task> 
      Tarea
    </Task>
    <Task> 
      leer
    </Task>
    <Task> 
      comer
    </Task>
   </section>
  )
}

export default App
