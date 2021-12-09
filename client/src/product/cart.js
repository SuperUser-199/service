import React from 'react'
import './cart.css'
import Header from '../components/header'
function Cart(){
    return(
        <>
        <Header />
        <div className="cart-main">
            <div className="cart-container">
                <h4>Your Cart</h4>
                <div className="cart-items">
                    <table className="table" id="cart-table">
                        <thead className="thead-dark">
                            <tr>
                            <th scope="col">Service</th>
                            <th scope="col"></th>
                            <th scope="col">Price</th>
                           
                            <th scope="col"></th>
                            <th scope="col">Total</th>
                            </tr>
                        </thead>
                            <tr>
                                <th>
                                    <img className="service-img" alt="service"/>
                                    
                                </th>
                                <th>
                                    <h4>Service Name</h4>
                                    <p>Description</p>
                                </th>
                                <th>
                                &#8377;   100
                                </th>
                               
                                <th>
                                    <button className="btn btn-outline-dark">Remove</button>
                                </th>
                                <th>&#8377;100</th>
                            </tr>

                        <tbody>

                        </tbody>
                    </table>
                    <div className="float-right text-right">
                        <h4>Subtotal:</h4>
                        <h1>&#8377;100</h1>
                    </div>
                        
                </div>
                <br />
                <div>
                    <div className="checkout">
                         <button className="btn btn-outline-primary">Checkout</button>
                    </div>
                    <div className="continue">
                        <button className="btn btn-outline-primary"> Continue Shopping </button>
                    </div>
                </div>
                
            </div>
        </div>
        </>
    )
}
export default Cart