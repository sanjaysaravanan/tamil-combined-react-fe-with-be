import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { userSignIn } from "../../apis/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isAuthenticated = Boolean(localStorage.getItem("isAuthenticated"));

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission logic

    const data = await userSignIn({ email, password });

    if (data.code === 1) {
      localStorage.setItem("isAuthenticated", true);
      localStorage.setItem("token", data.token);
      navigate("/"); // redirect to home page
    } else {
      alert("Please check Your Credentials");
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Login</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Login
                </button>
                <Link style={{ float: "right" }} to="/register">
                  Go to Register
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
