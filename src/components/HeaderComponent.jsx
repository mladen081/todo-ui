import "./HeaderComponent.css";
import { NavLink } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <div>
      <header>
        <div className="flex-container">
          <div>
            <p>Logo</p>
          </div>
          <nav className="tabs">
            <ul>
              <li>
                <NavLink to="/todos">Todos</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default HeaderComponent;
