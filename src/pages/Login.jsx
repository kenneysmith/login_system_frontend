import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
        email,
        password
    }
    const response = await axios.post("http://localhost/login_system/login", data, {headers
        : {
            "Content-Type" : "application/json"
        }});
        console.log(response);
        
  };

  return (
    <>
      <div className="col-md-6 col-lg-4">
        <div className="card p-4 rounded-3 shadow">
          <div className="text-center mb-4">
            <h3 className="card-title">Welcome Back</h3>
            <p className="text-muted">Sign in to continue</p>
          </div>
          <form onSubmit={handleSubmit}>
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
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="rememberMe">
                  Remember me
                </label>
              </div>
              <a href="#" className="small">
                Forgot password?
              </a>
            </div>
            <div className="d-grid">
              <button type="submit" className="btn btn-primary btn-lg">
                Sign In
              </button>
            </div>
          </form>
          <hr className="my-4" />
          <div className="text-center">
            <p className="mb-0">
              Don't have an account? <Link to="/register">Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
