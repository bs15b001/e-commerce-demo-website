import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const onToken=token=>{
console.log(token)
alert('payment successful')


}
const StripeCheckoutButton=({price})=>
{
    const priceForStripe=price*100;
    const publishkey='pk_test_51IWEgoCet8ytX74kZ5T24DZVNc97SmamAFlH9qCDrTyk9AwRKCUke5hJqz3ylqifU20Q6nzXzNzcH9T0vaQcKO9d00hVn53Q6D'
    return (
        <StripeCheckout
        label='paynow'
        name='crwn-clothing Ltd'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/Cuz.svg'

        description= {`your total is $${price}`}
        amount={priceForStripe}
        panelLabel='pay now'
        token={onToken}
        stripeKey={publishkey}
        ></StripeCheckout>


    )




}


export default StripeCheckoutButton;