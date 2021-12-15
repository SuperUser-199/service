import React from 'react';
import './cofirmorder.css';
import MetaData from '../components/layout/MetaData';
import Header from '../components/header';
function ConfirmOrder(){
    return(
        <>
        <MetaData title={"Confirm Order"} />
        <Header />
        <div>
            <div>
                <h3 id="center-it">Confirm Your Details</h3>
            </div>
            <div id="service-card">
                <div class="card" >
                    <img class="card-img-top" src="..." alt="Card  cap" />
                    <div class="card-body">
                        <h5 class="card-title">Service Name</h5>
                    </div>
                   
                    <div class="card-body">
                       <p>Price</p>
                    </div>
                </div>
            </div>
            <br /> 
            <div>
           
                <div id="service-card">
                    <div class="card" >
                        <img class="card-img-top" src="..." alt="Card  cap" />
                        <div class="card-body">
                            <h5 class="card-title">Professional Name</h5>
                        </div>
                    
                        <div class="card-body">
                        <p>Address</p>
                        </div>
                    </div>
                </div>
            </div>
            <h3 id="center-it">Select Your Payment Mode</h3>

            <div id="center-it">
                <form>
                    <div id="select-payment">
                     <select
                      id="payment"
                      name="payment"
                        >
                      <option value="">Select Payment Method</option>
                      <option value="cod">Cash on Delivery</option>
                      <option value="online">Online</option>
                     
                    </select>
                    </div>
                    <div>
                        <a href="/" ><button id="order-btn" class="btn btn-primary">Confirm Order</button></a>
                        <a href="/"><button id="order-btn" class="btn btn-primary"> Cancel Order</button></a>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}

export default ConfirmOrder;