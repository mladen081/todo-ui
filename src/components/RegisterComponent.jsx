import { useState } from "react";
import { registerAPICall } from "../services/AuthService";

const RegisterComponent = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleRegistrationForm(e) {
    e.preventDefault();
    const register = { name, username, email, password };

    registerAPICall(register)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="container">
      <h1>Register</h1>

      <div className="form-container">
        <form>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            placeholder="Enter name"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>

          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Enter username"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></input>

          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Enter email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            // disabled={!name || !username || !email || !password}
            onClick={(e) => handleRegistrationForm(e)}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterComponent;
