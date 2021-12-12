import './orderplace.css';
import React from 'react';
import MetaData from '../components/layout/MetaData';
import Header from '../components/header';
function OrderPlaced(){
    return (
        <>
        <Header />
        <MetaData title="Order Placed"/>
        <div className="order-cont">
            <h1>Congratulations ! <br />Order Placed Successful</h1>
            <h3>Your Order id is "andlan"</h3>
            <a href="/orders"><button id="order-btn" className="btn btn-outline-dark">Orders</button></a>
            <a href="/dashboard"><button id="order-btn" className="btn btn-outline-dark">Dashboard</button></a>
            
        </div>
        </>
    )
}

export default OrderPlaced;