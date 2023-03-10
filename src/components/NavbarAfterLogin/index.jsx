import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import blanja from "../../assets/image/Blanja.png";
import searchImage from "../../assets/image/search_1.png";
import KeranjangImage from "../../assets/image/filter.png";
import ProfileImage from "../../assets/image/icons/profile.svg";
import { getSearch } from "../../features/searchSlice";

function Navbarafterlogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const handleLogout = async (e) => {
    e.preventDefault();
    navigate("/login");
    localStorage.clear();
  };
  const SubmitSearch = async (e) => {
    e.preventDefault();
    navigate("/search");
    await dispatch(getSearch(username));
  };
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <img src={blanja} alt="" onClick={() => navigate("/")} />
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
            {" "}
            <span className="input-group-text" id="basic-addon1">
              <img
                src={searchImage}
                alt=""
                type="submit"
                onClick={SubmitSearch}
              />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <img src={KeranjangImage} alt="KeranjangImage" />
          <div className="dropdown">
            <button
              className="btn dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                src={ProfileImage}
                alt="ProfileImage"
                width={50}
                height={50}
              />
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <Link className="dropdown-item" href="#" to="/profile">
                Profile
              </Link>

              <Link className="dropdown-item" href="#" onClick={handleLogout}>
                Logout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbarafterlogin;
