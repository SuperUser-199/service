import React from 'react'
import './cart.css'
import Header from '../components/header'
function Cart(){
    return(
        <>
        <Header />
        <div>
            <div className="for-cart"> 
                                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Remove</th>
                            <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row"><img alt="service-img" className="cart-img" /></th>
                            <td>Name</td>
                            <td><button id="cart-btn" class="btn btn-outline-danger">Remove</button></td>
                            <td>@mdo</td>
                            </tr>
                            
                        </tbody>
                    </table>
                    </div>

                    <br />
                    <div className="for-checkout">
                    <table className="table">
                            <thead class="thead-light">
                                <tr>
                                <th scope="col">Price</th>
                                <th scope="col">Total Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">total price(including tax)</th>
                                <td>2000</td>

                                </tr>
                                <tr>
                                    <th>

                                    </th>
                                    <th>
                                        <button id="cart-btn" class="btn btn-outline-info">Checkout</button>
                                    </th>
                                </tr>
                            </tbody>
                    </table>
                    </div>
        </div>
        </>
    )
}
export default Cart