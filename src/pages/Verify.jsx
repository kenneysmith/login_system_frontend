import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Verify = () => {
  const navigate = useNavigate();
  const [otpcode, setOtpCode] = useState("");
  const [successStatus, setSuccessStatus] = useState(false);
  const [message, setMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      otpcode,
    };
    const response = await axios.post(
      "http://localhost/login_system/verify",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
        // withCredentials: true
      }
    );
    if (response.data.statusCode === 201) {
      setSuccessStatus(false);
      setMessage(response.data.message);
      navigate("/");
    } else {
      setSuccessStatus(true);
      setMessage(response.data.message);
    }
  };

  return (
    <>
      <div className="col-md-6 col-lg-4">
        <div className="card p-4 rounded-3 shadow">
          <div className="text-center mb-4">
            <h3 className="card-title">Verify Account</h3>
            {successStatus && (
              <div className="alert alert-warning">{message}</div>
            )}{" "}
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="number"
                className="form-control"
                id="otpcode"
                placeholder="enter otp code"
                value={otpcode}
                onChange={(e) => setOtpCode(e.target.value)}
                required
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary btn-lg">
                Verify
              </button>
            </div>
          </form>
          <hr className="my-4" />
        </div>
      </div>
    </>
  );
};

export default Verify;
