/* eslint-disable @typescript-eslint/no-explicit-any */
import {createSlice } from "@reduxjs/toolkit";



const initialState = {
    products : [] as any,
    selectedItems : 0,
    totalPrice : 0,
    tax : 0,
    taxRate : 0.1,
    grandTotal : 0
}

export const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers: {
        addToCart : (state , action) => {
            const isExist = state.products.find(product => product.id === action.payload.id)
            if(!isExist){
                state.products.push({...action.payload , quantity : 1 , })

            }
            state.selectedItems = state.products.reduce((total : number , product : any) => {
                return Number(total + product.quantity);
            } , 0)
            state.totalPrice = state.products.reduce((total : number , product : any) => {
                return Number(total + product.quantity * product.price);
            } , 0)

            state.tax = state.totalPrice * state.taxRate;
            state.grandTotal = state.totalPrice + state.totalPrice * state.taxRate

        },
        updateQuaintity : (state , action) => {
            const products = state.products.map((product) => {
                if(product.id === action.payload.id){
                    if(action.payload.type === 'increment'){
                        product.quantity += 1
                    }
                    else if(action.payload.type === 'decrement'){
                        product.quantity -= 1
                    }
                }
                return product;
            })
        }

    }

});

// export const setSelectedItems = (state : any) => {
//     state.products.reduce((total : number , product : any) => {
//         return Number(total + product.quantity);
//     } , 0)
// }

export const {addToCart , updateQuaintity} = cartSlice.actions;
export default cartSlice.reducer;