import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {connect } from "react-redux";
import { toggledown } from "../../redux/cart/cart.actions";
import {selectcartcount} from "../../redux/cart/cart.selectors";
import './cart-icon.styles.scss';
import {createStructuredSelector} from 'reselect';



const CartIcon =({toggledown,itemcount})=>(
<div className='cart-icon' onClick={toggledown}>
    <ShoppingIcon className='shopping-icon'/>
    <span className='item-count'>{itemcount}</span>
</div>



)

const maStateToProps=createStructuredSelector(  
    {
        itemcount:selectcartcount
    }
)


const mapDispatchToProps=dispatch=>({
    toggledown:()=>dispatch(toggledown())

})


export default connect(maStateToProps,mapDispatchToProps)(CartIcon);
