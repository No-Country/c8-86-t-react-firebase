import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

import {setLoading} from './loading.slice'

export const productsClickedSlice = createSlice({
    name: 'productsClicked',
    initialState:'',
    reducers:{
        setProductClicked: (state,action) => action.payload
    }
})

export const {setProductClicked} = productsClickedSlice.actions

export const getProducts = (productCategory) => (dispatch)=>{
    dispatch(setLoading(true))
    const URL = `https://us-central1-saine-api.cloudfunctions.net/app/api/products`
    axios.get(URL)
        .then(res => {
            let allProducts = res.data
            let filterProducts = allProducts.filter(product => {
                if(product.category === productCategory){
                    return true
                }
            })

            // console.log(filterProducts)

            dispatch(setProductClicked(filterProducts))

        }).finally(() => dispatch(setLoading(false)))
}
export const getProductsByRecommendations = (productCategory)=>(dispatch)=>{
    dispatch(setLoading(true))
    const URL = `https://us-central1-saine-api.cloudfunctions.net/app/api/products`
    let filterProducts =[]
    let filter = []
    axios.get(URL)
        .then(res => {
            let allProducts = res.data
            if(productCategory==='Aceites y Vinagres'){
                filter = allProducts.filter(product => {
                    if(product.category === 'Aceites'){
                        return true
                    }
                })
                filterProducts.push(filter)
                filter = allProducts.filter(product => {
                    if(product.category === 'Acetos'){
                        return true
                    }
                })
                filterProducts.push(filter)
                filter = allProducts.filter(product => {
                    if(product.category === 'Vinagres'){
                        return true
                    }
                })
                filterProducts.push(filter)

            }
            else if(productCategory==='Aderezos'){
                filter = allProducts.filter(product => {
                    if(product.category === 'Condimentos'){
                        return true
                    }
                })
                filterProducts.push(filter)
                filter = allProducts.filter(product => {
                    if(product.category === 'Dips'){
                        return true
                    }
                })
                filterProducts.push(filter)
            }
            else if(productCategory==='Dulces y Mantequillas'){
                filter = allProducts.filter(product => {
                    if(product.category === 'Dulce de leche'){
                        return true
                    }
                })
                filterProducts.push(filter)
                filter = allProducts.filter(product => {
                    if(product.category === 'Dulces'){
                        return true
                    }
                })
                filterProducts.push(filter)
                filter = allProducts.filter(product => {
                    if(product.category === 'Mantequillas'){
                        return true
                    }
                })
                filterProducts.push(filter)
                filter = allProducts.filter(product => {
                    if(product.category === 'Mermeladas'){
                        return true
                    }
                })
                filterProducts.push(filter)
            }
            else if(productCategory==='Arroz y legumbres'){
                filter = allProducts.filter(product => {
                    if(product.category === 'Arroz'){
                        return true
                    }
                })
                filterProducts.push(filter)
                filter = allProducts.filter(product => {
                    if(product.category === 'Legumbres'){
                        return true
                    }
                })
                filterProducts.push(filter)
                
            }
            else if(productCategory==='Conservas'){
                filter = allProducts.filter(product => {
                    if(product.category === 'Conservas'){
                        return true
                    }
                })
                filterProducts.push(filter)
                
            }

            dispatch(setProductClicked(filterProducts))

        }).finally(() => dispatch(setLoading(false)))
}

export default productsClickedSlice.reducer
