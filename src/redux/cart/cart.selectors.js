import {createSelector} from 'reselect';

const selectcart=state=>state.cart;

export const selectcarthidden=createSelector(
    [selectcart],
    cart=>cart.hidden
    
    );



export const selectcartitems=createSelector(
    [selectcart],
    cart=>cart.cartitems
    
    );




export  const selectcartcount=(
    createSelector(
        [selectcartitems],
        cartitems=>cartitems.reduce((acc,cartitem)=>acc+cartitem.quantity,0)
        
        
        )

)


export  const selectcartTotal=(
    createSelector(
        [selectcartitems],
        cartitems=>cartitems.reduce((acc,cartitem)=>acc+cartitem.quantity*cartitem.price,0) 
        )

)


