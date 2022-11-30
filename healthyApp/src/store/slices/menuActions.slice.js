import {createSlice} from '@reduxjs/toolkit'

export const menuActionsSlice = createSlice({
    name: 'menuActions',
    initialState:{
        menuIsShow: false
    },
    reducers:{
        setMenuActions: (state,action) => action.payload
    }
})

export const {setMenuActions} = menuActionsSlice.actions



export default menuActionsSlice.reducer