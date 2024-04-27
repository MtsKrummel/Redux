import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id: "1",
        title: "Task 1",
        description: "Task 1 description"
    },
    {
        id: "2",
        title: "Task 2",
        description: "Task 2 description"
    }
]

//¿Cómo funciona esto?
//En Redux tradicional, es crucial nunca mutar el estado directamente. Esto significa que, en lugar de modificar el estado existente, debes crear y devolver una copia del estado con las modificaciones aplicadas. Esto se debe a que Redux se basa en la comparación de referencias para detectar cambios en el estado; si modificas el estado directamente, Redux no podrá detectar estos cambios, lo que puede llevar a comportamientos inesperados en tu aplicación.

//Redux Toolkit, por otro lado, utiliza la biblioteca Immer internamente para permitirte "mutar" el estado de manera segura en tus reducers. Cuando usas state.push(action.payload) dentro de un reducer de Redux Toolkit, Immer registra esta "mutación" y, bajo el capó, produce una nueva versión del estado que refleja esta modificación, sin modificar el estado original. Esto te permite escribir código que parece mutar el estado directamente, pero en realidad, estás trabajando con una copia del estado que Immer maneja por ti.

//¿Cómo Funciona `state.push`?

// 1. Immer está envolviendo tu state actual, permitiéndote escribir código que parece mutar el estado.

// 2. Al ejecutar state.push, Immer registra esta operación.

// 3. Immer produce una nueva versión del estado que incluye el nuevo objeto añadido, sin modificar el estado original (initialState).

export const taskSlice = createSlice({
    name: 'tasks',
    initialState, //--> Es lo mismo que hacer const [name, setName] = useState(0)
    reducers:{
        addTask: (state, action) => {
            console.log(state, action)
            state.push(action.payload)
            //¿Por Qué No `initialState.push`?
            // Usar initialState.push(action.payload) directamente iría en contra de los principios de inmutabilidad, ya que modificarías el objeto initialState original. Además, este enfoque simplemente no funcionaría como se espera en el contexto de Redux Toolkit debido a cómo está diseñado para trabajar con el estado de forma inmutable a través de Immer. 
        },
        deleteTask: (state, action) => {
            const taskFound = state.find(task => task.id === action.payload)

            if(taskFound){
                state.splice(state.indexOf(taskFound), 1)
                console.log(`Task "${taskFound.title}" deleted`)
            } else console.log('error')
        },
        editTask: (state, action) => {
            const {title, description, id} = action.payload

            const taskFound = state.find(task => task.id === id)

            if(taskFound){
                taskFound.title = title
                taskFound.description = description
            }
        }
    }
})

export const { addTask, deleteTask, editTask } = taskSlice.actions

export default taskSlice.reducer