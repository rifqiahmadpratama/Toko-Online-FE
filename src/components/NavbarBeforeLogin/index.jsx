import React from "react";

import { useNavigate } from "react-router-dom";
import blanja from "../../assets/image/Blanja.png";
import searchImage from "../../assets/image/search_1.png";
import KeranjangImage from "../../assets/image/filter.png";

const Navbarbeforelogin = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <img src={blanja} alt="" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <div
            className="input-group mb-3 mt-3"
            style={{
              paddingRight: "30px",
              paddingLeft: "30px",
            }}
          >
            <span className="input-group-text" id="basic-addon1">
              <img src={searchImage} alt="" />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          <img src={KeranjangImage} alt="KeranjangImage" />
          <button
            className="btn btn-success "
            style={{ marginLeft: "30px", marginRight: "10px" }}
            type="button"
            onClick={() => {
              navigate("/register");
            }}
          >
            Daftar
          </button>
          <button
            className="btn btn-outline-success"
            type="button"
            onClick={() => {
              navigate("/login");
            }}
          >
            Masuk
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbarbeforelogin;
