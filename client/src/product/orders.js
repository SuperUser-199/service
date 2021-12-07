import React from 'react'
import Header from "../components/header"
import './order.css'
function Orders() {
    return (
        <>
        <Header />
        <div className="order-main">
            <table className="order-table">
                <thead>
                    <tr>
                        <th className="order-th">Order ID</th>
                        <th className="order-th">Service Name</th>
                        <th className="order-th">Status</th>
                        <th className="order-th">Total Amount</th>
                        <th className="order-th">Time</th>
                        <th className="order-th">Details</th>
                        
                    </tr>
                </thead>
                <tbody>
                   <th className="order-th">1</th>
                   <th className="order-th">AC Repairing</th>
                   <th className="order-th">Delivered</th>
                   <th className="order-th">400</th>
                   <th className="order-th">07:00pm</th>
                   <th className="order-th"><a href="/orderdetails"><button className="view-button">View</button></a></th>
                </tbody>
            </table>
        </div>
        </>
    )
}

export default Orders
