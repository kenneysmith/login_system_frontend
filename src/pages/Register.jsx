import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("");
  const [fullname, setFullname] = useState("");
  const [dob, setDob] = useState("");
  const [successStatus, setSuccessStatus] = useState(false);
  const [message, setMessage] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
      address,
      contact,
      gender,
      fullname,
      dob,
    };
    const response = await axios.post(
      "http://localhost/login_system/register",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response.data.statusCode);
   if (response.data.statusCode === 201) {
     setSuccessStatus(false);
     setMessage(response.data.message);
     navigate("/verify");
   } else {
     setSuccessStatus(true);
     setMessage(response.data.message);
   }

  };

  return (
    <>
      <div className="col-md-12 col-lg-6">
        <div className="card p-4 rounded-3 shadow">
          <div className="text-center mb-4">
            <h3 className="card-title">Welcome </h3>
            <p className="text-muted">Sign up to continue</p>
            {successStatus && (
              <div className="alert alert-warning">{message}</div>
            )}
          </div>
          <form onSubmit={handleSubmit} className="row">
            <div className="col-6">
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="fullname" className="form-label">
                  Fullname
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fullname"
                  placeholder="john doe"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="contact" className="form-label">
                  Contact
                </label>
                <input
                  type="phone"
                  className="form-control"
                  id="contact"
                  placeholder="john doe"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="gender" className="form-label">
                  Gender
                </label>
                <select
                  className="form-control"
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
            <div className="col-6">
              <div className="mb-3">
                <label htmlFor="dob" className="form-label">
                  Date of Birth
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="dob"
                  placeholder=""
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="e.g. mbarara or kabale"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary btn-lg">
                  Sign Up
                </button>
              </div>
            </div>
          </form>
          <hr className="my-4" />
          <div className="text-center">
            <p className="mb-0">
              Don't have an account? <a href="#">Sign Up</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
