import CartActionTypes from './cart.types';


export const toggledown=()=>({
type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const additem=item=>({
    type: CartActionTypes.ADD_ITEM,
    payload: item
    })


export const clearitemfromcart=item=>({
        type: CartActionTypes.CLEAR_ITEM_FROM_CART,
        payload: item
    })


export const removeitem=item=>({
        type: CartActionTypes.REMOVE_ITEMS,
        payload: item
    })


    
    
    


