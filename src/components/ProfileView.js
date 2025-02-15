import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const ProfileView = () => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userProfile"));


  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="card profile-card shadow-lg p-4 text-center" >
        <h2 className="mb-3 fw-bold">Talent Profile</h2>
        <ul className="list-group list-group-flush text-start">
          <li className="list-group-item">
            <strong>Name:</strong> {userData.name}
          </li>
          <li className="list-group-item">
            <strong>Age / Grade:</strong> {userData.age || "Not Provided"}
          </li>
          <li className="list-group-item">
            <strong>Interests:</strong> {userData.interests.length > 0 ? userData.interests.join(", ") : "None"}
          </li>
          <li className="list-group-item">
            <strong>Chosen Roles:</strong> {userData.roles.length > 0 ? userData.roles.join(", ") : "None"}
          </li>
        </ul>
        <button className="btn btn-dark rounded-pill d-block mx-auto w-50 mt-4" onClick={() => navigate("/")}>
          Go Back
        </button>
      </div>
    </div>
  );
  
};

export default ProfileView;
