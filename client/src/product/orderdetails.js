import React from "react";
import "./orderdetail.css";
import Header from "../components/header";
import MetaData from "../components/layout/MetaData";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Orderdetails() {
    const { id } = useParams();
    const { user } = useSelector(state => state.user);
    const details = user.professional.orders.find(info => info.order.service._id.toString() === id);
  return (
    <>
      <MetaData title={"Detailed Order"} />
      <Header />
      <div id="margin-dedo">
        <div className="card">
          <div className="title">Service Reciept</div>
          <div className="info">
            <div className="row">
              <div className="col-7">
                {" "}
                <span id="heading">Date</span>
                <br /> <span id="details">{details.order.placedAt.toString().substr(0, 10)}</span>{" "}
              </div>
              <div className="col-5 pull-right">
                {" "}
                <span id="heading">Order Id</span>
                <br /> <span id="details">{details.order._id}</span>{" "}
              </div>
            </div>
          </div>
          <div className="pricing">
            <div className="row">
              <div className="col-9">
                {" "}
                <span id="name">{details.order.service.name}</span>{" "}
              </div>
              <div className="col-3">
                {" "}
                <span id="price">&#8377;{details.order.totalCost}</span>{" "}
              </div>
            </div>
          </div>
          <div className="total">
            <div className="row">
              <div className="col-9"></div>
              <div className="col-3">
                <big>&#8377;{details.order.totalCost}</big>
              </div>
            </div>
          </div>
          <div className="tracking">
            <div className="title">Tracking Order</div>
          </div>
          <div className="progress-track">
            <ul id="progressbar">
              <li className="step0 active " id="step1">
                Ordered
              </li>
              <li className="step0 active text-center" id="step2">
                Shipped
              </li>
              <li className="step0 active text-right" id="step3">
                On the way
              </li>
              <li className="step0 text-right" id="step4">
                Delivered
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Orderdetails;
