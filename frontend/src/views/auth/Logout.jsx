import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BaseHeader from '../partials/BaseHeader';
import BaseFooter from '../partials/BaseFooter';
import { logout } from '../../utils/auth';

function Logout() {
  useEffect(() => {
    logout();
  }, []);

  return (
    <>
      <BaseHeader />

      <section className="container d-flex flex-column vh-100" style={{ marginTop: "120px" }}>
        <div className="row align-items-center justify-content-center g-0 h-lg-100 py-6">
          <div className="col-lg-5 col-md-8 py-6">
            <div className="card shadow-lg border-0 rounded-3">
              <div className="card-body p-5 text-center">
                <h1 className="fw-bold mb-3">You have been logged out</h1>
                <p className="text-muted">Thanks for visiting our website, come back anytime!</p>
                <div className="d-grid gap-3 mt-4">
                  <Link to="/login" className="btn btn-primary">
                    Login <i className="fas fa-sign-in-alt ms-2"></i>
                  </Link>
                  <Link to="/register" className="btn btn-outline-primary">
                    Register <i className="fas fa-user-plus ms-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BaseFooter />
    </>
  );
}

export default Logout;
