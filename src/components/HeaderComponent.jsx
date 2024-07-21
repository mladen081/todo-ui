import { isUserLoggedIn, logout } from "../services/AuthService";
import "./HeaderComponent.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const HeaderComponent = () => {
  const isAuth = isUserLoggedIn();

  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/login");
  }
  return (
    <div>
      <header>
        <div className="flex-container">
          <div>
            <p>Logo</p>
          </div>
          <nav className="tabs">
            <ul>
              {isAuth && (
                <li>
                  <NavLink to="/todos">Todos</NavLink>
                </li>
              )}

              {!isAuth && (
                <li>
                  <NavLink to="/register">Register</NavLink>
                </li>
              )}

              {!isAuth && (
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
              )}

              {isAuth && (
                <li>
                  <NavLink to="/login" onClick={handleLogout}>
                    Logout
                  </NavLink>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default HeaderComponent;
