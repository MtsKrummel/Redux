import { createSlice } from '@reduxjs/toolkit'

export const taskSlice = createSlice({
    name: 'tasks',
    initialState: [], //--> Es lo mismo que hacer const [name, setName] = useState(0)
    reducers:{

    }
})

export default taskSlice.reducer