import React, { useState } from 'react';
import apiInstance from '../../utils/axios';
import { login } from '../../utils/auth';
import BaseHeader from '../partials/BaseHeader';
import BaseFooter from '../partials/BaseFooter';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const { error } = await login(email, password);
    setIsLoading(false);
    if (error) return alert(error);
    navigate('/');
  };

  return (
    <>
      <BaseHeader />

      <section className="container d-flex flex-column vh-100 justify-content-center">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="card border-0 shadow-sm rounded-4 p-4">
              <div className="card-body">
                <h1 className="fw-bold text-center mb-4">Sign in</h1>
                <p className="text-center text-muted mb-4">
                  Don’t have an account? <Link to="/register/">Sign up</Link>
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      className="form-control rounded-3"
                      placeholder="johndoe@gmail.com"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                      type="password"
                      id="password"
                      className="form-control rounded-3"
                      placeholder="••••••••"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="form-check">
                      <input type="checkbox" id="rememberme" className="form-check-input" />
                      <label htmlFor="rememberme" className="form-check-label">Remember me</label>
                    </div>
                    <Link to="/forgot-password/" className="text-decoration-none">Forgot password?</Link>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-100 rounded-3"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>Processing <i className="fas fa-spinner fa-spin"></i></>
                    ) : (
                      <>Sign in <i className="fas fa-sign-in-alt"></i></>
                    )}
                  </button>
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

export default Login;
