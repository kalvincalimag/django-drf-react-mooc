import React, { useState } from 'react';
import BaseHeader from '../partials/BaseHeader';
import BaseFooter from '../partials/BaseFooter';
import { Link } from 'react-router-dom';
import apiInstance from '../../utils/axios';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await apiInstance.get(`user/password-reset/${email}/`).then((res) => {
        setIsLoading(false);
        console.log(res.data);
        alert('Password reset email has been sent.');
      });
    } catch (error) {
      setIsLoading(false);
      console.log('error: ', error);
    }
  };

  return (
    <>
      <BaseHeader />

      <section className="container d-flex flex-column vh-100" style={{ marginTop: '150px' }}>
        <div className="row align-items-center justify-content-center g-0 h-lg-100 py-8">
          <div className="col-lg-5 col-md-8 py-8 py-xl-0">
            <div className="card shadow-sm p-4">
              <div className="card-body p-4">
                <div className="mb-4 text-center">
                  <h1 className="mb-1 fw-bold">Forgot Password</h1>
                  <p className="text-muted">Let's help you get back into your account</p>
                </div>
                <form className="needs-validation" noValidate onSubmit={handleEmailSubmit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      name="email"
                      placeholder="johndoe@gmail.com"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="d-grid">
                    {isLoading ? (
                      <button disabled type="submit" className="btn btn-primary">
                        Processing <i className="fas fa-spinner fa-spin"></i>
                      </button>
                    ) : (
                      <button type="submit" className="btn btn-primary">
                        Reset Password <i className="fas fa-arrow-right"></i>
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BaseFooter />
    </>
  );
}

export default ForgotPassword;
