import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = useState([]);

  //getall products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        "https://frail-coat-colt.cyclic.app/api/v1/product/get-product"
      );
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <Layout>
      <div className="container-fluid mt-3 dashboard">
        <div className="row dashboard-product">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9 ">
            <h1>All Products List</h1>
            <div className="d-flex flex-wrap">
              {products?.map((p) => (
                <Link
                  key={p._id}
                  className="text-decoration-none product-link card mx-1 mb-2"
                  style={{ width: "18rem" }}
                  to={`/dashboard/admin/product/${p.slug}`}
                >
                  <div className="card-body m-2">
                    <img
                      src={`https://frail-coat-colt.cyclic.app/api/v1/product/product-photo/${p._id}`}
                      className="card-img-top"
                      alt={p.name}
                    />

                    <h5 className="text-muted text-decoration-none">
                      {p.name}
                    </h5>
                    <p>{p.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
