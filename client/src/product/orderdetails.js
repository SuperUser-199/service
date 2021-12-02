import React from "react";
import './orderdetail.css';
import logo from "../logo.svg";

function Orderdetails(){
    return(
        <>       
          <div class="main-orderdetail">
            <header class="clearfix">
            <div id="logo">
                <img src={logo}   alt="..."/> 
            </div>
            <div id="company">
                <h1 class="name">Service Fare</h1>
                <div>J.C. Bose University of Science & Technology , YMCA , Faridabad</div>
                <div>8888888888</div>
                <div><a href="mailto:company.email">servicefare@gmail.com</a></div>
            </div>
            
            </header>
    
      <div id="details" class="clearfix">
        <div id="client">
          <div class="to">INVOICE TO:</div>
          <h2 class="name">customer</h2>
          <div class="address">billing_address</div>
          <div class="email"><a href="mailto:customer_email">customer_email</a></div>
        </div>
        <div id="invoice">
          <h1>#invoice_id</h1>
          <div class="date">Date of Invoice: date</div>
         
        </div>
      </div>
      <table class="detail-order" border="0" cellspacing="0" cellpadding="0">
        <thead>
          <tr>
            <th class="no">#</th>
            <th class="desc"></th>
            <th class="unit">RATE</th>
            <th class="qty">QUANTITY</th>
            <th class="total">TOTAL</th>
          </tr>
        </thead>
        <tbody>
			
          <tr>
            <td class="no">Sr No.</td>
            <td class="desc"></td>
            <td class="unit">item.rate</td>
            <td class="qty">item.quantity</td>
            <td class="total">item.amount</td>
		      </tr>
		  
        </tbody>
        <tfoot>
          <tr>
            <td colspan="2"></td>
            <td colspan="2">SUBTOTAL</td>
            <td>invoice_total</td>
          </tr>
          <tr>
            <td colspan="2"></td>
            <td colspan="2">TAX 0%</td>
            <td>invoice_total</td>
          </tr>
          <tr>
            <td colspan="2"></td>
            <td colspan="2">GRAND TOTAL</td>
            <td>invoice_total</td>
          </tr>
        </tfoot>
      </table>
      <div id="thanks">Thank you!</div>
      </div>
        </>
    )
}

export default Orderdetails