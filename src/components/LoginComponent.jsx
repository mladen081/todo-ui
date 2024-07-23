import { useState } from "react";
import {
  loginAPICall,
  saveLoggedInUser,
  storeToken,
} from "../services/AuthService";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleLoginForm(e) {
    e.preventDefault();

    await loginAPICall(username, password)
      .then((response) => {
        // const token = "Basic " + window.btoa(username + ":" + password);
        const token = "Bearer " + response.data.accessToken;

        const role = response.data.role;

        storeToken(token);
        saveLoggedInUser(username, role);

        navigate("/todos");

        // window.location.reload(false);
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
