import { useState } from "react";
import { loginAPICall } from "../services/AuthService";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleLoginForm(e) {
    e.preventDefault();

    loginAPICall(username, password)
      .then((response) => {
        console.log(response.data);
        navigate("/todos");
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="container">
      <h1>Login</h1>

      <div className="form-container">
        <form>
          <label htmlFor="username">Username or Email</label>
          <input
            type="text"
            placeholder="Enter username"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>

          <label htmlFor="password">Password</label>
          <input
            type="text"
            placeholder="Enter password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>

          <button
            // disabled={!username || !password}
            onClick={(e) => handleLoginForm(e)}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;