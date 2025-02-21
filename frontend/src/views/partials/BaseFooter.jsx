import React from 'react';

function BaseFooter() {
  return (
    <footer className="pt-lg-8 pt-5 footer bg-light text-dark mt-5" style={{ backgroundColor: '#f5f5f7' }}>
      <div className="container mt-lg-2">
        <div className="row">
          {/* About Company */}
          <div className="col-lg-4 col-md-6 col-12">
            <div className="mb-4">
              <h1 style={{ fontSize: '1.5rem', fontWeight: '600', color: '#1d1d1f' }}>MOOC App</h1>
              <div className="mt-4">
                <p style={{ fontSize: '0.9rem', color: '#6e6e73' }}>
                  MOOC App is a feature-rich platform with beautifully designed components, built with the Bootstrap responsive framework.
                </p>
                {/* Social Media */}
                <div className="fs-4 mt-4">
                  <a href="#" className="me-3 text-dark" style={{ color: '#6e6e73', textDecoration: 'none' }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="bi bi-facebook"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </a>
                  <a href="#" className="me-3 text-dark" style={{ color: '#6e6e73', textDecoration: 'none' }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="bi bi-twitter"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                  </a>
                  <a href="#" className="text-dark" style={{ color: '#6e6e73', textDecoration: 'none' }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="bi bi-github"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="offset-lg-1 col-lg-2 col-md-3 col-6">
            <div className="mb-4">
              <h3 className="fw-bold mb-3" style={{ fontSize: '1rem', color: '#1d1d1f' }}>Company</h3>
              <ul className="list-unstyled nav nav-footer flex-column nav-x-0">
                {['About', 'Pricing', 'Blog', 'Careers', 'Contact'].map((link, index) => (
                  <li key={index}>
                    <a href="#" className="nav-link text-dark" style={{ fontSize: '0.9rem', color: '#6e6e73', textDecoration: 'none' }}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Support Links */}
          <div className="col-lg-2 col-md-3 col-6">
            <div className="mb-4">
              <h3 className="fw-bold mb-3" style={{ fontSize: '1rem', color: '#1d1d1f' }}>Support</h3>
              <ul className="list-unstyled nav nav-footer flex-column nav-x-0">
                {['Help and Support', 'Become Instructor', 'Get the app', 'FAQ’s', 'Tutorial'].map((link, index) => (
                  <li key={index}>
                    <a href="#" className="nav-link text-dark" style={{ fontSize: '0.9rem', color: '#6e6e73', textDecoration: 'none' }}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 col-md-12">
            <div className="mb-4">
              <h3 className="fw-bold mb-3" style={{ fontSize: '1rem', color: '#1d1d1f' }}>Get in touch</h3>
              <p style={{ fontSize: '0.9rem', color: '#6e6e73' }}>123 Main Street, U.S.A</p>
              <p className="mb-1" style={{ fontSize: '0.9rem', color: '#6e6e73' }}>
                Email: <a href="#" style={{ color: '#6e6e73', textDecoration: 'none' }}>support@mooc.com</a>
              </p>
              <p style={{ fontSize: '0.9rem', color: '#6e6e73' }}>
                Phone: <span style={{ color: '#6e6e73' }}>(000) 123 456 789</span>
              </p>
              <div className="d-flex">
                <a href="https://apps.apple.com/">
                  <img
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="App Store"
                    className="img-fluid me-2"
                    style={{ borderRadius: '8px', height: '40px' }}
                  />
                </a>
                <a href="https://play.google.com/store">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/512px-Google_Play_Store_badge_EN.svg.png"
                    alt="Play Store"
                    className="img-fluid"
                    style={{ borderRadius: '8px', height: '40px' }}
                  />
                </a>
              </div>            
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="row align-items-center g-0 border-top py-4 mt-6" style={{ borderColor: '#d2d2d7' }}>
          <div className="col-md-10 col-12">
            <div className="d-lg-flex align-items-center">
              <div className="me-4">
                <span style={{ fontSize: '0.9rem', color: '#6e6e73' }}>
                  © {new Date().getFullYear()} MOOC
                </span>
              </div>
              <div>
                <nav className="nav nav-footer">
                  {['Privacy Policy', 'Cookie Notice', 'Do Not Sell My Personal Information', 'Terms of Use'].map((link, index) => (
                    <a key={index} className="nav-link text-dark" href="#" style={{ fontSize: '0.9rem', color: '#6e6e73', textDecoration: 'none', marginRight: '1rem' }}>
                      {link}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-2 d-md-flex justify-content-end">
            <div className="dropdown">
              <a
                href="#"
                className="dropdown-toggle text-body"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ fontSize: '0.9rem', color: '#6e6e73', textDecoration: 'none' }}
              >
                <i className="fe fe-globe me-2 align-middle" />
                Language
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                {['English', 'Français', 'Deutsch'].map((lang, index) => (
                  <li key={index}>
                    <a className="dropdown-item" href="#" style={{ fontSize: '0.9rem', color: '#1d1d1f' }}>
                      {lang}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default BaseFooter;