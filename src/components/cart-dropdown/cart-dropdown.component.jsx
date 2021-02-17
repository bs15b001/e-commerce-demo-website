import {React  } from "react";
import CustomButton from '../custom-button/custom-button.component';
import { connect } from "react-redux";
import './cart-dropdown.styles.scss';
import {createStructuredSelector} from 'reselect';
import {selectcartitems} from '../../redux/cart/cart.selectors';
import {withRouter} from 'react-router-dom';

import Cartitem from '../cart-item/cart-item.component';
import {toggledown} from '../../redux/cart/cart.actions';

const Cartdropdown=({cartitems,history,dispatch})=>(
<div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartitems.length?(
      
      cartitems.map(cartItem => (
        <Cartitem key={cartItem.id} item={cartItem} />
      ))
      ):
      (<span className='empty-message'>Your Cart is Empty</span>)
    }
    </div>
<CustomButton onClick={()=>{history.push('/checkout') ;dispatch(toggledown())}}> Go to checkout</CustomButton>
</div>

)

const mapiStateToProps=createStructuredSelector({

    cartitems:selectcartitems
    
    
    })


export default withRouter(connect(mapiStateToProps)(Cartdropdown));
