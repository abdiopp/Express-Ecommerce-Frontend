import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
// import "../../styles/AuthStyles.css";
import { useAuth } from "../../context/auth";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://frail-coat-colt.cyclic.app/api/v1/auth/login",
        {
          email,
          password,
        }
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title="Register - Ecommer App">
      <div
        className="form-container align-items-center justify-content-center d-flex flex-column"
        style={{ minHeight: "90vh" }}
      >
        <h4 className="title">LOGIN FORM</h4>
        <div className="card w-50 ">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="email"
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter Your Email "
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter Your Password"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                LOGIN
              </button>
              <div className="mt-1">
                <p
                  className="btn text-muted"
                  style={{ fontSize: 12 }}
                  onClick={() => {
                    navigate("/forgot-password");
                  }}
                >
                  Forgot Password?
                </p>
                <p
                  className="btn text-muted"
                  style={{ fontSize: 12 }}
                  onClick={() => {
                    navigate("/register");
                  }}
                >
                  New here?
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
