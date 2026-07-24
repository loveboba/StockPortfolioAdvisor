import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="/fileUpload">Upload Stocks as File</Link>
        </li>
        <li>
          <Link to="/manualUpload">Add Stocks Manually</Link>
        </li>
        <li>
          <Link to="/stockNewsletter">Stock Newsletter</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
