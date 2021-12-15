import React from "react";
import './orderdetail.css';
import Header from "../components/header";
import MetaData from "../components/layout/MetaData";

function Orderdetails(){
    return(
        <>       
         <MetaData title={"Detailed Order"} />
         <Header />
         <div id="margin-dedo">
         <div class="card">
    <div class="title">Service Reciept</div>
    <div class="info">
        <div class="row">
            <div class="col-7"> <span id="heading">Date</span><br /> <span id="details">10 October 2018</span> </div>
            <div class="col-5 pull-right"> <span id="heading">Order Id</span><br /> <span id="details">012j1gvs356c</span> </div>
        </div>
    </div>
    <div class="pricing">
        <div class="row">
            <div class="col-9"> <span id="name">Service Name</span> </div>
            <div class="col-3"> <span id="price">&#8377;299</span> </div>
        </div>
      
    </div>
    <div class="total">
        <div class="row">
            <div class="col-9"></div>
            <div class="col-3"><big>&#8377;299</big></div>
        </div>
    </div>
    <div class="tracking">
        <div class="title">Tracking Order</div>
    </div>
    <div class="progress-track">
        <ul id="progressbar">
            <li class="step0 active " id="step1">Ordered</li>
            <li class="step0 active text-center" id="step2">Shipped</li>
            <li class="step0 active text-right" id="step3">On the way</li>
            <li class="step0 text-right" id="step4">Delivered</li>
        </ul>
    </div>
    
</div>
         </div>
        </>
    )
}

export default Orderdetails