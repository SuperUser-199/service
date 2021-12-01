import React from 'react'
import './cart.css'
import Header from './header'
function Cart(){
    return(
        <>
        <Header />
        <div class="cart-main">
            <div class="cart-container">
                <h4>Your Cart</h4>
                <div class="cart-items">
                    <table class="table" id="cart-table">
                        <thead class="thead-dark">
                            <tr>
                            <th scope="col">Service</th>
                            <th scope="col"></th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col"></th>
                            <th scope="col">Total</th>
                            </tr>
                        </thead>
                            <tr>
                                <th>
                                    <img class="service-img" alt="service"/>
                                    
                                </th>
                                <th>
                                    <h4>Service Name</h4>
                                    <p>Description</p>
                                </th>
                                <th>
                                &#8377;   100
                                </th>
                                <th class="quant">
                                <input id="quant-cart"type="number" class="form-control form-control-lg text-center" value="1" />
                                </th>
                                <th>
                                    <button class="btn btn-outline-dark">Remove</button>
                                </th>
                                <th>&#8377;100</th>
                            </tr>

                        <tbody>

                        </tbody>
                    </table>
                    <div class="float-right text-right">
                        <h4>Subtotal:</h4>
                        <h1>&#8377;100</h1>
                    </div>
                        
                </div>
                <br />
                <div>
                    <div class="checkout">
                         <button class="btn btn-outline-primary">Checkout</button>
                    </div>
                    <div class="continue">
                        <button class="btn btn-outline-primary"> Continue Shopping </button>
                    </div>
                </div>
                
            </div>
        </div>
        </>
    )
}
export default Cart