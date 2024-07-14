import "./HeaderComponent.css";

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
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default HeaderComponent;
