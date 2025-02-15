import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";
import { rolesOptions, interestToRoles } from "./CareerRoles";

const CareerForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [filteredRoles, setFilteredRoles] = useState(rolesOptions);
  const [selectedRoles, setSelectedRoles] = useState([]);

  const handleInterestChange = (interest) => {
    let updatedInterests = selectedInterests.includes(interest)
      ? selectedInterests.filter((i) => i !== interest)
      : [...selectedInterests, interest];

    setSelectedInterests(updatedInterests);

    if (updatedInterests.length === 0) {
      setFilteredRoles(rolesOptions);
    } else {
      const recommended = updatedInterests.flatMap(
        (i) => interestToRoles[i] || []
      );
      setFilteredRoles([
        { value: "select_all", label: "Select All" },
        ...recommended.map((r) => ({ value: r, label: r })),
      ]);
    }
    setSelectedRoles([]);
  };

  const handleRoleChange = (selected) => {
    if (selected.some((role) => role.value === "select_all")) {
      setSelectedRoles(
        filteredRoles
          .filter((r) => r.value !== "select_all")
          .map((r) => r.value)
      );
    } else {
      setSelectedRoles(selected.map((r) => r.value));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }

    const userData = {
      name,
      age,
      interests: selectedInterests,
      roles: selectedRoles,
    };
    localStorage.setItem("userProfile", JSON.stringify(userData));

    navigate("/profile");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="container">
        <div className="card shadow-lg p-4 mx-auto">
          <h1 className="text-center mb-4 fw-bold">Talent Details</h1>
  
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <h5>Name:</h5>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>
  
            <div className="mb-3">
              <h5>Age / Grade (Optional):</h5>
              <input
                type="number"
                className="form-control"
                value={age}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value === "" || (Number(value) > 0 && Number(value) < 100)) {
                    setAge(value);
                  }
                }}
                placeholder="Enter your age"
              />
            </div>
  
            <div className="mb-3">
              <h5>Select Your Interests:</h5>
              <div className="row">
                {Object.keys(interestToRoles).map((interest) => (
                  <div key={interest} className="col-md-4">
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value={interest}
                        checked={selectedInterests.includes(interest)}
                        onChange={() => handleInterestChange(interest)}
                      />
                      <label className="form-check-label">{interest}</label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
  
            <div className="mb-3">
              <h5>Select Roles:</h5>
              <Select
                isMulti
                options={filteredRoles}
                value={filteredRoles.filter((option) =>
                  selectedRoles.includes(option.value)
                )}
                onChange={handleRoleChange}
              />
            </div>
  
            <button type="submit" className="btn btn-dark rounded-pill d-block mx-auto w-50 mt-4">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
  };

export default CareerForm;
