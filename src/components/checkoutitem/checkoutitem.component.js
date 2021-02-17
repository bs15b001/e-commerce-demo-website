import React  from "react";
import './checkoutitem.styles.scss';

import {connect} from 'react-redux';
import { clearitemfromcart,additem,removeitem } from "../../redux/cart/cart.actions";


const CheckOutItem=({ cartItem, clearItem ,additem,removeitem}) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
      <div className='checkout-item'>
        <div className='image-container'>
          <img src={imageUrl} alt='item' />
        </div>
        <span className='name'>{name}</span>
        

        <span className='quantity'>
        <div className='arrow' onClick={()=>removeitem(cartItem)}>&#10094;</div>{quantity} <div className='arrow' onClick={()=>additem(cartItem)}>&#10095;</div></span>
       
        <span className='price'>{price}</span>
        <div className='remove-button' onClick={() => clearItem(cartItem)}>
          &#10005;
        </div>
      </div>
    );
  };

 const mapdispatchtoprops=dispatch=>({

     clearItem:item=>dispatch(clearitemfromcart(item)),

     additem:item=>dispatch(additem(item)),

     removeitem:item=>dispatch(removeitem(item))
 })
  
  export default connect(null,mapdispatchtoprops)(CheckOutItem);