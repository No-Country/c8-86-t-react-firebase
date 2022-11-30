import {createSlice} from '@reduxjs/toolkit'

export const profileActionsSlice = createSlice({
    name: 'profileActions',
    initialState:{
        profileIsShow: false
    },
    reducers:{
        setProfileActions: (state,action) => action.payload
    }
})

export const {setProfileActions} = profileActionsSlice.actions



export default profileActionsSlice.reducer