import { Link, NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <svg
              className="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              <use xlinkHref="#bootstrap" />
            </svg>
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <NavLink to="/manage" className="nav-link px-2 text-white">
                Manage
              </NavLink>
            </li>
            <li>
              <NavLink to="/manage" className="nav-link px-2 text-white">
                Framer Modal
              </NavLink>
            </li>
            <li>
              <NavLink to="/crud" className="nav-link px-2 text-white">
                CRUD
              </NavLink>
            </li>
            <li>
              <NavLink to="/scene" className="nav-link px-2 text-white">
                Scene
              </NavLink>
            </li>
            <li>
              <NavLink to="/main/signup" className="nav-link px-2 text-white">
                Signup
              </NavLink>
            </li>
            <li class="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                to=""
              >
                Admin
              </Link>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="/admin/dashboard/manageuser"
                  >
                    Manage Users
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input
              type="search"
              className="form-control form-control-dark"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div className="text-end">
            <button
              type="button"
              className="btn btn-outline-light me-2"
              onClick={(e) => navigate("/main/login")}
            >
              Login
            </button>
            <button
              type="button"
              className="btn btn-warning"
              onClick={(e) => navigate("/main/signup")}
            >
              Sign-up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
