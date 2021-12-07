import React from "react";
import './orderdetail.css';
import logo from "../logo.svg";

function Orderdetails(){
    return(
        <>       
          <div className="main-orderdetail">
            <header className="clearfix">
            <div id="logo">
                <img src={logo}   alt="..."/> 
            </div>
            <div id="company">
                <h1 className="name">Service Fare</h1>
                <div>J.C. Bose University of Science & Technology , YMCA , Faridabad</div>
                <div>8888888888</div>
                <div><a href="mailto:company.email">servicefare@gmail.com</a></div>
            </div>
            
            </header>
    
      <div id="details" className="clearfix">
        <div id="client">
          <div className="to">INVOICE TO:</div>
          <h2 className="name">customer</h2>
          <div className="address">billing_address</div>
          <div className="email"><a href="mailto:customer_email">customer_email</a></div>
        </div>
        <div id="invoice">
          <h1>#invoice_id</h1>
          <div className="date">Date of Invoice: date</div>
         
        </div>
      </div>
      <table className="detail-order" border="0" cellspacing="0" cellpadding="0">
        <thead>
          <tr>
            <th className="no">#</th>
            <th className="desc"></th>
            <th className="unit">RATE</th>
            <th className="qty">QUANTITY</th>
            <th className="total">TOTAL</th>
          </tr>
        </thead>
        <tbody>
			
          <tr>
            <td className="no">Sr No.</td>
            <td className="desc"></td>
            <td className="unit">item.rate</td>
            <td className="qty">item.quantity</td>
            <td className="total">item.amount</td>
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