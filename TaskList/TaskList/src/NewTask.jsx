import { useState } from "react"

export function NewTask(){
    const [newTask, setNewTask] = useState("")
    const [tasks, setTasks] = useState([])
    const handleChange = (event) => {
        setNewTask(event.target.value)
    }
    const handleClick = () =>{
        setTasks([...tasks, newTask])
        setNewTask("")
    }


    return (
        <div className="new-task">
            <input type="text"  className="new-task-input" value={newTask} onChange={handleChange}/>
            <button className="new-task-button" onClick={handleClick} >Añadir</button>
        </div>

    )
}