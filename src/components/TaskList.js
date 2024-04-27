import { useSelector, useDispatch } from 'react-redux'
import { deleteTask } from '../features/tasks/taskSlice.js'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/TaskListStyles.css'

function TaskList(){

    const [deleted, setDeleted] = useState(false)
    const [notifications, setNotifications] = useState([])

    const tasks = useSelector(state => state.tasks)
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteTask(id))
        const newNotification = `Task deleted`;
        setNotifications(prevNotifications => [...prevNotifications, newNotification]);
        setTimeout(() => {
            setNotifications(prevNotifications => prevNotifications.filter(notification => notification !== newNotification));
        }, 5000);
    }

    return (
        <div className="App-header">
            <header>
                <h1 className='h1'>Task List</h1>

                <Link className='create-task' to="/create-task">Create Task</Link>

            </header>

            <div className='taskList'>
                {
                    tasks.map(task => (
                        <div className='task' key={task.id}>
                            <h1>{task.title}</h1>
                            <p>{task.description}</p>
                            <button 
                                onClick={() => handleDelete(task.id)}
                                className='btn-delete'    
                            >
                            Delete
                            </button>
                            <Link className='edit-task' to={`/edit-task/${task.id}`}>Edit</Link>
                        </div>
                    ))
                }
            </div>

            <div className="notifications-container">
                {notifications.map((notification, index) => (
                    <div key={index} className='deleted'>
                        <p>{notification}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default TaskList