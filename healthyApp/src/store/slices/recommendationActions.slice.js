import {createSlice} from '@reduxjs/toolkit'

export const recommendationActionsSlice = createSlice({
    name: 'recommendationActionsSlice',
    initialState:{
        recommendationIsClick: {
            toggle: false,
            categoryName: ''
        }
    },
    reducers:{
        setRecommendationActionsSlice: (state,action) => action.payload
    }
})

export const {setRecommendationActionsSlice} = recommendationActionsSlice.actions



export default recommendationActionsSlice.reducer