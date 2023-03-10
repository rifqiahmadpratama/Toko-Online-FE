import React, { useState } from "react";
import vektor from "../../assets/image/Vector.png";
import blanja from "../../assets/image/Blanja.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postRegister } from "../../features/registerSlice";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userPenjual, setUserPenjual] = useState({
    email: "",
    password: "",
    name: "",
  });
  console.log(userPenjual);
  const handleChangePenjual = (e) => {
    setUserPenjual({
      ...userPenjual,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegisterPenjual = async (e) => {
    e.preventDefault();
    await dispatch(postRegister(userPenjual));
    navigate("../login");
  };

  const handleRegisterPembeli = (e) => {
    e.preventDefault();
  };
  return (
    <div className="form-register">
      <div className="row justify-content-center ">
        <div className="text-center mt-4">
          <img src={vektor} alt="" />
          <img src={blanja} alt="" />
        </div>
        <div className="text-center mt-3">
          <h5>Silahkan Registrasikan akunmu!</h5>
        </div>
        <div
          className="nav nav-pills mb-3 justify-content-center"
          id="pills-tab"
          role="tablist"
        >
          <div className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="pills-penjual-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-penjual"
              type="button"
              role="tab"
              aria-controls="pills-penjual"
              aria-selected="true"
            >
              Penjual
            </button>
          </div>
          <div className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-pembeli-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-pembeli"
              type="button"
              role="tab"
              aria-controls="pills-pembeli"
              aria-selected="false"
            >
              Pembeli
            </button>
          </div>
        </div>
        <div className="tab-content text-center" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-penjual"
            role="tabpanel"
            aria-labelledby="pills-penjual-tab"
            tabindex="0"
          >
            <div className="container mt-4 ">
              <div className="container">
                <form
                  className="row justify-content-center"
                  onSubmit={handleRegisterPenjual}
                >
                  <input
                    className="form-control mb-3 rounded-5"
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={handleChangePenjual}
                  />
                  <input
                    className="form-control mb-3 rounded-5"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChangePenjual}
                  />
                  <input
                    className="form-control mb-3 rounded-5"
                    type="text"
                    name="name"
                    placeholder="Name"
                    onChange={handleChangePenjual}
                  />
                  <button
                    className="btn submit btn-danger mb-3 rounded-5"
                    type="submit"
                  >
                    Register
                  </button>
                  <label className="login mb-3 mt-4" for="">
                    Apakah kamu sudah punya akun?
                    <Link to="/login" className="page-login">
                      Login
                    </Link>
                  </label>
                </form>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-pembeli"
            role="tabpanel"
            aria-labelledby="pills-pembeli-tab"
            tabindex="0"
          >
            <div className="container mt-4 ">
              <div className="container">
                <form
                  className="row justify-content-center"
                  onSubmit={handleRegisterPembeli}
                >
                  <input
                    className="form-control mb-3 rounded-5"
                    type="text"
                    name="name"
                    placeholder="Name"
                  />
                  <input
                    className="form-control mb-3 rounded-5"
                    type="text"
                    name="email"
                    placeholder="Email"
                  />
                  <input
                    className="form-control mb-3 rounded-5"
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <button
                    className="btn btn-danger mb-3 rounded-5"
                    type="submit"
                  >
                    Register
                  </button>
                  <label className="login mb-3 mt-4" for="">
                    Apakah kamu sudah punya akun?
                    <Link to="/login" className="page-login">
                      Login
                    </Link>
                  </label>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
