import "./checkout1.css";
import React, { useEffect } from "react";
import Header from "../components/header";
import MetaData from "../components/layout/MetaData";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { clearErrors } from "../actions/userActions";
import Loader from "../components/layout/Loader/Loader";
import { getAllProfsByCategory } from "../actions/profActions";

function Checout1() {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { error, success, profs, loading } = useSelector(
    (state) => state.getProfsByCategory
  );

  useEffect(() => {
    dispatch(getAllProfsByCategory("AC Service & Repair"));
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [error, alert, dispatch]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <div>
            <MetaData title="Select Professional " />
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
                          <th>Select</th>
                        </tr>
                      </thead>
                      <tbody>
                        {profs &&
                          profs.map((prof, idx) => (
                            <tr>
                              <td>
                                <div>
                                  <img
                                    id="user-img"
                                    src={prof.avatar.url}
                                    // src="#"
                                    alt=""
                                  />
                                </div>
                                <div>
                                  <div>
                                    <div>
                                      <h5>{prof.name}</h5>
                                    </div>
                                    <div>
                                      <ul id="user-ul">
                                        <li>
                                          <i className="fas fa-filter pr-1"></i>
                                          {prof.professional.specialization}
                                        </li>
                                        <li>
                                          <i className="fas fa-map-marker-alt pr-1"></i>
                                          {`${prof.address.city}, ${prof.address.district}, ${prof.address.state}`}
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
                                <Link
                                  to={`/viewprofile/`}
                                  style={{ textDecoration: "none" }}
                                >
                                  <button id="viewprofilebtn">
                                    View Profile
                                  </button>
                                </Link>
                              </td>
                              <td id="user-td">
                                <button id="viewprofilebtn">Select Me</button>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
export default Checout1;
