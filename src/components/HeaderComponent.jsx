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
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default HeaderComponent;
