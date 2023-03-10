import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";

//pages
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import Profile from "./pages/profile";
import Search from "./pages/search";

//components
import Navbarafterlogin from "./components/NavbarAfterLogin";
import NavbarBeforeLogin from "./components/NavbarBeforeLogin";
import PageDeviceNotSupported from "./pages/PageDeviceNotSupported";
import PageNotFound from "./pages/PageNotFound";
import useWindowDimensions from "./components/WindowsSize";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();

  const { height, width } = useWindowDimensions();
  const isAuth = localStorage.getItem("token");

  return (
    <>
      <ScrollToTop>
        {width >= 576 ? (
          location.pathname === "/login" ||
          location.pathname === "/register" ? null : isAuth === null ? (
            <NavbarBeforeLogin />
          ) : (
            <Navbarafterlogin />
          )
        ) : null}

        {width >= 576 ? (
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace="true" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="*" element={<PageDeviceNotSupported />} />
          </Routes>
        )}
        <ToastContainer />
        {width >= 576 ? (
          location.pathname === "/login" ||
          location.pathname === "/register" ? null : (
            <Footer />
          )
        ) : null}
      </ScrollToTop>
    </>
  );
}

export default App;
