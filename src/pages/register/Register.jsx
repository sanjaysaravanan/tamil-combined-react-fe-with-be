import { useState } from "react";
import { userSignup } from "../../apis/auth";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roles, setRoles] = useState([]);

  const handleRoleChange = (event) => {
    const options = event.target.options;
    const selectedRoles = [];
    for (let i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        selectedRoles.push(options[i].value);
      }
    }
    setRoles(selectedRoles);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission logic
    const data = await userSignup({ name, email, password, roles });

    console.log(data);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Register</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
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
                <div className="form-group">
                  <label htmlFor="roles">Roles</label>
                  <select
                    multiple
                    className="form-control"
                    id="roles"
                    value={roles}
                    onChange={handleRoleChange}
                    required
                  >
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                    <option value="Editor">Editor</option>
                    <option value="Viewer">Viewer</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Register
                </button>
                <Link to="/login">Go to Login</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
