import React from 'react'
import { useParams } from 'react-router';


function CartScreen(props) {
    const productID = useParams().id;
    const qty = props.location.search ? +props.location.search.split('=')[1] : 1
    return (
        <div>
            <h1>Cart Screen</h1>
            <p>ADD TO CART: ProductID: {productID} Qty: {qty}</p>
        </div>
    )
}

export default CartScreen
