import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <nav className="navbar-nav">
      <ul className="nav-item">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          {" "}
          <Link to="/fileUpload" className="nav-link">
            Upload Stocks as File
          </Link>
        </li>
        <li>
          <Link to="/manualUpload" className="nav-link">
            Add Stocks Manually
          </Link>
        </li>
        <li>
          <Link to="/stockNewsletter" className="nav-link">
            Stock Newsletter
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
