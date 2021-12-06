import React, { useState } from "react";
import "./allusers.css";
import Header from "./header";
// import { useNavigate } from "react-router";
import MetaData from "./layout/MetaData";
import { useSelector, useDispatch } from "react-redux";
import Loader from "./layout/Loader/Loader";
import { useAlert } from "react-alert";
import { clearErrors } from "../actions/userActions";

function AllUsers() {
  const alert = useAlert();
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const { error, loading, profs } = useSelector((state) => state.allProfs);

  useState(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [error, dispatch, alert]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <MetaData title="All Users" />

          <div>
            <div>
              <div>
                <div>
                  <table id="table-alluser">
                    <thead id="table-head">
                      <tr>
                        <th>Candidate Name</th>
                        <th>Rating</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {profs &&
                        profs.map((data, idx) => (
                          <tr>
                            <td>
                              <div>
                                <img
                                  id="user-img"
                                  src={data.avatar.url}
                                  // src="#"
                                  alt=""
                                />
                              </div>
                              <div>
                                <div>
                                  <div><h5>{data.name}</h5></div>
                                  <div>
                                    <ul>
                                      <li>
                                        <i class="fas fa-filter pr-1"></i>
                                        {data.professional.specialization}
                                      </li>
                                      <li>
                                        <i class="fas fa-map-marker-alt pr-1"></i>
                                        {data.address.city},{data.address.district},
                                        {data.address.state},{data.address.pincode}
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td id="user-td">
                              <span>{5}</span>
                              <img
                                id="star-img"
                                alt="star"
                                src="https://img.icons8.com/fluency/48/000000/star.png"
                              />
                            </td>
                            <td id="user-td">
                              <a
                                href="/"
                                data-toggle="tooltip"
                                title=""
                                data-original-title="view"
                              >
                                <button id="viewprofilebtn">
                                  View Profile
                                </button>
                              </a>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default AllUsers;
