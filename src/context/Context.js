import React, { useContext, useEffect, useReducer } from 'react'
import { createContext } from 'react'
import axios from 'axios'
import { cartReducer } from './Reducers';

const Cart = createContext();
const Context = ({ children }) => {
    const [state,dispatch] = useReducer(cartReducer,{
        products: [],
        cart: []
    })

    console.log(state)

    const fetchProducts = async() => {
        const {data}  = await axios.get("https:dummyjson.com/products");
        console.log(data)

        dispatch({
            type: "ADD_PRODUCTS",
            payload: data.products,
        });

    };

    useEffect(()=>{
     fetchProducts();
    },[])

   
  return <Cart.Provider value={{state,dispatch}}>{ children }</Cart.Provider>
};

export default Context;

export const CartState = () => {
    return useContext(Cart);
}
