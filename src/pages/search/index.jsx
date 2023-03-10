import React from "react";
import { useSelector } from "react-redux";
import { searchSelectors } from "../../features/searchSlice";
import { FormatRupiah } from "@arismun/format-rupiah";
import { Link } from "react-router-dom";
const Search = () => {
  const search = useSelector(searchSelectors.selectAll);
  return (
    <div className="page-search">
      <div className="row row-cols-2 row-cols-sm-3 row-cols-md-5 g-3">
        {search.map((item) => (
          <div className="col" key={item.id}>
            <div className="card shadow-sm">
              <img src={item.photo} className="img-fluid" alt="..." />
              <div className="card-body">
                <h5 className="card-title">
                  <Link to={item.id}>{item.name}</Link>
                </h5>
                <p className=" price">{<FormatRupiah value={item.price} />}</p>
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
    </div>
  );
};

export default Search;
