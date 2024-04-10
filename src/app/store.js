import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from '../features/tasks/taskSlice.js'

//Si tienes varios archivos donde estas guardando datos o estas definiendo estados, configureStore los va a agrupar a todos en uno, para que puedas acceder desde cualquier lugar.

//El export al principio se llama "Exportar individualmente"
export const store = configureStore({
    //Aquí ponemos el reducer
    //Recordemos que son funciones JavaScript puras que determinan como deberá ser actualizado el store en función de las acciones (actions)
    //Para poder crear un reducer primero necesitamos un "SLICE", un slice es una parte de todo el estado. 
    reducer: {
        tasks: tasksReducer
    }
})
//Ahora para usarlo necesitamos un provider que es un componente que va a contener toda nuestra aplicación