import {useState} from 'react';
import {NewTask} from './NewTask'

export function Task({children}){
    const [complet,setComplet] = useState(false)
    const [delet,setDelet] = useState(false)
    const handleComplet = () =>{
        setComplet(!complet)
    }
    const handleDelet = () =>{
        setDelet(!delet)
    }

    const taskComplet = complet ? 'task-complete' : 'task-noComplete'
    const taskDelet = delet? 'task-deleted' : 'task-noDelete'

    return (
        <div className={`task ${ taskDelet} `}>
            <span className={`task-span  ${ taskComplet}`}>{children}</span>
            <button className="task-completed" onClick={handleComplet}>Completado</button>
            <button className="task-delete" onClick={handleDelet}>Eliminar</button>
        </div>
    )
}

