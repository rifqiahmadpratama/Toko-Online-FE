import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postLogin } from "../../features/loginSlice";
import { useNavigate } from "react-router-dom";
import vektor from "../../assets/image/Vector.png";
import blanja from "../../assets/image/Blanja.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const SubmitLogin = async (e) => {
    e.preventDefault();
    await dispatch(postLogin({ email, password }));
    navigate("/");
  };
  return (
    <div className="form-login">
      <div className="row justify-content-center ">
        <div className="text-center mt-4">
          <img src={vektor} alt="" />
          <img src={blanja} alt="" />
        </div>
        <div className="text-center mt-3">
          <h5>Silahkan Login akunmu!</h5>
        </div>
        <div className="container mt-4 ">
          <div className="container">
            <form
              onSubmit={SubmitLogin}
              className="row justify-content-center text-center"
            >
              <input
                className="form-control mb-3 rounded-5"
                type="text"
                name="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="form-control mb-3 rounded-5"
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="btn btn-danger mb-3 rounded-5" type="submit">
                Login
              </button>
              <label className="login mb-3 mt-4" for="">
                Belum Punya akun Toko Online
                <Link to="/register" className="page-login">
                  Register
                </Link>
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
