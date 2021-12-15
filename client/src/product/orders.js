import React from 'react'
import Header from "../components/header"
import './order.css';
import MetaData from "../components/layout/MetaData";

function Orders() {
    return (
        <>
        <MetaData title={"Orders"} />
        <Header />
        <div >
            <div class="alert alert-success" role="alert">
                <h4 class="alert-heading"><span id="left-krdo">Order Id:</span> <span id="right-krdo">15-12-2021</span></h4><br/>
                <p><span id="left-krdo">Service Name </span><span  id="right-krdo">Total Price</span></p><br/>
                <hr />
                <p class="mb-0"><a href="/orderdetails"><button  id="order-btn" class="btn btn-light">Track Order</button></a> <a href="/updateorder"><button  id="order-btn" class="btn btn-light">Update Order</button></a></p>
            </div>
        
        </div>
        </>
    )
}

export default Orders
