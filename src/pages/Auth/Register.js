import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
// import "../../styles/AuthStyles.css";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password != conPassword) {
      toast.error("Password and confirm password not match");
      return;
    }
    try {
      const res = await axios.post(
        "https://frail-coat-colt.cyclic.app/api/v1/auth/register",
        {
          name,
          email,
          password,
          phone,
          address,
          answer,
        }
      );
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
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
        className="form-container align-items-center justify-content-center d-flex"
        style={{ minHeight: "90vh" }}
      >
        <div className="card w-50 mt-3">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <h4 className="title">REGISTER FORM</h4>
              <div className="mb-3 ">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter Your Name"
                  required
                  autoFocus
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
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
              <div className="mb-3">
                <input
                  type="password"
                  value={conPassword}
                  onChange={(e) => setConPassword(e.target.value)}
                  className="form-control"
                  id="exampleInputConPassword1"
                  placeholder="Confirm Password"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter Your Phone"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Enter Your Address"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="What is Your Favorite sports"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                REGISTER
              </button>
              <div className="mt-2">
                <p
                  className="btn text-muted"
                  style={{ fontSize: 12 }}
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Already have an account?
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
