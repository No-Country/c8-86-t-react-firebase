import { createSlice } from '@reduxjs/toolkit'

export const loadingSlice = createSlice ({
    name: 'loading',
    initialState: false,
    reducers: {
        setLoading: (state,action) => {
            const isLoading = action.payload
            return isLoading
        }
    }
})

export const { setLoading } = loadingSlice.actions
export default loadingSlice.reducer