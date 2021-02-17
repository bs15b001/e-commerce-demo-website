import React from 'react';
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import {additem} from "../../redux/cart/cart.actions";


import './collection-item.styles.scss';

const CollectionItem = ({ item,additem }) => {
  const {id,name,price,imageUrl}=item;

  return (
  <div className='collection-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
    <CustomButton onClick={()=>additem(item)} inverted>add to cart</CustomButton>
  </div>
)}

const mapDispatchToProps=dispatch=>({

  additem:item=>dispatch(additem(item))
})



export default connect(null,mapDispatchToProps)(CollectionItem);
