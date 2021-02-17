import CartActionTypes from './cart.types';
import {additemtocart,removeitemfromcart} from './cart.utils';

const INITIAL_STATE={


    hidden:true,
    cartitems:[]
}


const Cartreducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {

                ...state,
                hidden:!state.hidden
            }
        case CartActionTypes.ADD_ITEM:
                return {
    
                    ...state,
                    cartitems:additemtocart(state.cartitems,action.payload)
                }
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
                return {
        
                        ...state,
                        cartitems:state.cartitems.filter(cartitem=>cartitem.id!==action.payload.id)
                    }
        case CartActionTypes.REMOVE_ITEMS:
            return {
                
                                ...state,
                                cartitems:removeitemfromcart(state.cartitems,action.payload)
                            }

           default:
               return state;



    }



}


export default Cartreducer