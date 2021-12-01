import React from 'react'
import Header from "../components/header"
import './order.css'
function Orders() {
    return (
        <>
        <Header />
        <div class="order-main">
            <table class="order-table">
                <thead>
                    <tr>
                        <th class="order-th">Order ID</th>
                        <th class="order-th">Service Name</th>
                        <th class="order-th">Status</th>
                        <th class="order-th">Total Amount</th>
                        <th class="order-th">Time</th>
                        <th class="order-th">Details</th>
                        
                    </tr>
                </thead>
                <tbody>
                   <th class="order-th">1</th>
                   <th class="order-th">AC Repairing</th>
                   <th class="order-th">Delivered</th>
                   <th class="order-th">400</th>
                   <th class="order-th">07:00pm</th>
                   <th class="order-th"><a href="/orderdetails"><button class="view-button">View</button></a></th>
                </tbody>
            </table>
        </div>
        </>
    )
}

export default Orders
