import { Link } from "react-router-dom";

function BaseHeader() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-2 shadow-sm" style={{ backgroundColor: '#f5f5f7' }}>
        <div className="container">
          <Link className="navbar-brand fw-bold text-dark" to="/" style={{ fontSize: '1.25rem', fontWeight: '600', marginRight: '2rem' }}>
            MOOC
          </Link>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link px-2 text-dark" to="/pages/contact-us/" style={{ fontSize: '0.9rem' }}>
                  <i className="fas fa-phone me-1"></i>Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link px-2 text-dark" to="/pages/about-us/" style={{ fontSize: '0.9rem' }}>
                  <i className="fas fa-address-card me-1"></i>About Us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle px-2 text-dark"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ fontSize: '0.9rem' }}
                >
                  <i className="fas fa-chalkboard-user me-1"></i>Instructor
                </a>
                <ul className="dropdown-menu dropdown-menu-light shadow">
                  <li>
                    <Link
                      className="dropdown-item py-2 text-dark"
                      to={`/instructor/dashboard/`}
                    >
                      <i className="bi bi-grid-fill me-2"></i>Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item py-2 text-dark"
                      to={`/instructor/courses/`}
                    >
                      <i className="fas fa-shopping-cart me-2"></i>My Courses
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item py-2 text-dark"
                      to={`/instructor/create-course/`}
                    >
                      <i className="fas fa-plus me-2"></i>Create Course
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item py-2 text-dark"
                      to={`/instructor/reviews/`}
                    >
                      <i className="fas fa-star me-2"></i>Reviews
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item py-2 text-dark"
                      to={`/instructor/question-answer/`}
                    >
                      <i className="fas fa-envelope me-2"></i>Q/A
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item py-2 text-dark"
                      to={`/instructor/students/`}
                    >
                      <i className="fas fa-users me-2"></i>Students
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item py-2 text-dark"
                      to={`/instructor/earning/`}
                    >
                      <i className="fas fa-dollar-sign me-2"></i>Earning
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item py-2 text-dark"
                      to={`/instructor/profile/`}
                    >
                      <i className="fas fa-gear me-2"></i>Settings & Profile
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle px-2 text-dark"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ fontSize: '0.9rem' }}
                >
                  <i className="fas fa-graduation-cap me-1"></i>Student
                </a>
                <ul className="dropdown-menu dropdown-menu-light shadow">
                  <li>
                    <Link
                      className="dropdown-item py-2 text-dark"
                      to={`/student/dashboard/`}
                    >
                      <i className="bi bi-grid-fill me-2"></i>Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item py-2 text-dark"
                      to={`/student/courses/`}
                    >
                      <i className="fas fa-shopping-cart me-2"></i>My Courses
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item py-2 text-dark"
                      to={`/student/wishlist/`}
                    >
                      <i className="fas fa-heart me-2"></i>Wishlist
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item py-2 text-dark"
                      to={`/student/question-answer/`}
                    >
                      <i className="fas fa-envelope me-2"></i>Q/A
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item py-2 text-dark"
                      to={`/student/profile/`}
                    >
                      <i className="fas fa-gear me-2"></i>Profile & Settings
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex me-3" role="search">
              <div className="input-group">
                <input
                  className="form-control border-0 rounded"
                  type="search"
                  placeholder="Search Courses"
                  aria-label="Search Courses"
                  style={{ padding: '0.375rem 0.75rem', fontSize: '0.9rem' }}
                />
                <button className="btn btn-outline-dark rounded ms-2" type="submit" style={{ padding: '0.375rem 0.75rem', fontSize: '0.9rem' }}>
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </form>
            <div className="d-flex gap-2">
              <Link to="/login/" className="btn btn-outline-dark btn-sm rounded" style={{ fontSize: '0.9rem', padding: '0.375rem 0.75rem' }}>
                <i className="fas fa-sign-in-alt me-1"></i>Login
              </Link>
              <Link to="/register/" className="btn btn-outline-dark btn-sm rounded" style={{ fontSize: '0.9rem', padding: '0.375rem 0.75rem' }}>
                <i className="fas fa-user-plus me-1"></i>Register
              </Link>
              <Link
                to="/cart/"
                className="btn btn-dark btn-sm position-relative rounded"
                style={{ fontSize: '0.9rem', padding: '0.375rem 0.75rem' }}
              >
                <i className="fas fa-shopping-cart me-1"></i>Cart
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  3
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default BaseHeader;