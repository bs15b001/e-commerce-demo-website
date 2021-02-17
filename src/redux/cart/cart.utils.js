export const additemtocart=(cartitems,itemtoadd)=>{
    const existingcartitem=cartitems.find(cartitem=>cartitem.id===itemtoadd.id)

    if (existingcartitem)
    {
        return cartitems.map(cartitem=>
            cartitem.id===itemtoadd.id?{...cartitem,quantity:cartitem.quantity+1}
            :cartitem)
    }

    return [...cartitems,{...itemtoadd,quantity:1}]

        

}


export const removeitemfromcart=(cartitems,cartitemtoremove)=>{

    const existingcartitem=cartitems.find(cartitem=>cartitem.id===cartitemtoremove.id)

    if (existingcartitem.quantity===1)
    {
        return cartitems.filter(cartitem=>
            cartitem.id===cartitemtoremove)
    }

    return cartitems.map(cartitem=>
        cartitem.id===cartitemtoremove.id?{...cartitem,quantity:cartitem.quantity-1}
        :cartitem)
}