// imr
import React from "react";
// impt
import PropTypes from "prop-types";
// https://legacy.reactjs.org/docs/typechecking-with-proptypes.html
function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light">
      <a className="navbar-brand" href="/">
        {props.title}
        {/* taking input ad props.title */}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home 
              {/* taking input props as props.title */}
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              {props.aboutText}
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-primary my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
export default Navbar;

// Inout types of props
Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};

// Specifies the default values for props:
// Navbar.defaultProps = {
//   title: "write title here",
//   aboutText: "write aboutText here",
// };
