import {createSlice} from '@reduxjs/toolkit'

export const categorySlice = createSlice({
    name: 'categorySlice',
    initialState:[
        {
            category: 'Aceites y Vinagres',
            section: 'Productos',
            subcategories: [
                'Aceites',
                'Acetos',
                'Vinagres'
            ]
        },
        {
            category: 'Aderezos',
            section: 'Productos',
            subcategories: [
                'Condimentos',
                'Dips'
            ]
        },
        {
            category: 'Dulces y Mantequillas',
            section: 'Productos',
            subcategories: [
                'Dulce de leche',
                'Dulces',
                'Mantequillas',
                'Mermeladas'
            ]
        },
        {
            category: 'Arroz y legumbres',
            section: 'Productos',
            subcategories: [
                'Arroz',
                'Legumbres'
            ]
        },
        {
            category: 'Conservas',
            section: 'Productos',
            subcategories: [
                'Conservas'
            ]
        }
    ],
    reducers:{
        setCategorySlice: (state,action) => action.payload
    }
})

export const {setCategorySlice} = categorySlice.actions



export default categorySlice.reducer