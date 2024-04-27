import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTask, editTask } from '../features/tasks/taskSlice.js'
import '../styles/TaskListStyles.css'
import {useParams, useNavigate} from 'react-router-dom'

//Generador de id 
import { v4 as uuid } from 'uuid'
 
function TaskForm(){

    const [task, setTask] = useState({
        title : "",
        description : "",
    })

    //Esta es una función que me va a permitir dispara eventos desde el slice
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()
    const tasks = useSelector(state => state.tasks)

    const handleChange = e => {
        setTask({
            ...task,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        if(params.id){
            dispatch(editTask(task)) 
        } else {
            dispatch(addTask({
                ...task,
                id: uuid(),
            }))
        }
        navigate("/")
        
    }

    useEffect(()=>{
        if(params.id){
            setTask(tasks.find(task => task.id === params.id))
        }
    },[])

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Enter Task" 
                name="title" 
                onChange={handleChange}
                value={task.title}
                />
            <textarea 
                placeholder="Description" 
                name="description" 
                onChange={handleChange}
                value={task.description}
            ></textarea>
            <button type="submit" className="btn">Add</button>
        </form>
    )
}

export default TaskForm