import React, { useState, Fragment } from "react";
import { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import Stack from "@mui/material/Stack";
import { useSelector, useDispatch } from "react-redux";
import { FormatRupiah } from "@arismun/format-rupiah";
import { Link } from "react-router-dom";
import axios from "axios";
import Pagination from "@mui/material/Pagination";
// import image
import Slide1 from "../../assets/image/slide1.png";
import Slide2 from "../../assets/image/slide2.png";

import Category1 from "../../assets/image/category1.png";
import Category2 from "../../assets/image/category2.png";
import Category3 from "../../assets/image/category3.png";
import Category4 from "../../assets/image/category4.png";
import Category5 from "../../assets/image/category5.png";

import { getHome, homeSelectors } from "../../features/homeSlice";

const Home = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getHome());
  // }, [dispatch]);

  // const products = useSelector(homeSelectors.selectAll);
  // console.log("cek data = ", products);

  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [query, setQuery] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    getUsers();
  }, [page, keyword]);

  const getUsers = async () => {
    const response = await axios.get(
      process.env.REACT_APP_API_BACKEND +
        `product?search=${keyword}&page=${page}&limit=${limit}`
    );
    setProduct(response.data.data.data);
    setPage(response.data.data.page);
    setPages(response.data.data.totalPage);
    setRows(response.data.data.totalRows);
  };

  const changePage = (event, value) => {
    setPage(value);
    if (value === 9) {
      setMsg(
        "Jika tidak menemukan data yang anda cari, silahkan cari data dengan kata kunci spesifik"
      );
    } else {
      setMsg("");
    }
  };

  console.log("env = ", process.env.REACT_APP_API_BACKEND);
  return (
    <Fragment>
      <div className="home-page" style={{ margin: "15px" }}>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={Slide1} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Slide2} alt="Second slide" />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Slide1} alt="Third slide" />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="mt-3">
          <h2>Category</h2>
          <p>Apa yang kamu cari</p>
          <div className="row align-items-start">
            <div className="col mt-2">
              <div className="card card-1 text-center d-flex flex-colum">
                <div className="card-body m-2">
                  <img src={Category1} alt="" />
                </div>
              </div>
            </div>
            <div className="col mt-2">
              <div className="card card-1 text-center d-flex flex-colum">
                <div className="card-body m-2">
                  <img src={Category2} alt="" />
                </div>
              </div>
            </div>
            <div className="col mt-2">
              <div className="card card-1 text-center d-flex flex-colum">
                <div className="card-body m-2">
                  <img src={Category3} alt="" />
                </div>
              </div>
            </div>
            <div className="col mt-2">
              <div className="card card-1 text-center d-flex flex-colum">
                <div className="card-body m-2">
                  <img src={Category4} alt="" />
                </div>
              </div>
            </div>
            <div className="col mt-2">
              <div className="card card-1 text-center d-flex flex-colum">
                <div className="card-body m-2">
                  <img src={Category5} alt="" />
                </div>
              </div>
            </div>
          </div>

          <h2 className="mt-2">Products</h2>
          <Stack spacing={2}>
            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-5 g-3">
              {product.map((item) => (
                <div className="col" key={item.id}>
                  <div className="card shadow-sm">
                    <img src={item.photo} className="img-fluid" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">
                        <Link to={item.id}>{item.name}</Link>
                      </h5>
                      <p className=" price">
                        {<FormatRupiah value={item.price} />}
                      </p>
                      <p className="card-text merk">{item.description}</p>
                      <div className="d-flex justify-content-start text-warning start">
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <p className="rating  mt-2 ms-1 text-dark">(10)</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 justify-content-center text-center">
              <p>
                Total Data: {rows} Page : {rows ? page : 0} of {pages}
              </p>
              <p className="has-text-centered has-text-danger">{msg}</p>

              <Pagination
                count={pages}
                defaultPage={page}
                color="primary"
                onChange={changePage}
              />
            </div>
          </Stack>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
