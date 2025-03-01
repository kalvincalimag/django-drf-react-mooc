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

      <section className="container d-flex flex-column vh-100" style={{ marginTop: "150px" }}>
        <div className="row align-items-center justify-content-center g-0 h-lg-100 py-6">
          <div className="col-lg-5 col-md-8 py-6">
            <div className="card shadow-sm border-0 rounded-[20px] hover:shadow-[0_8px_16px_rgba(0,0,0,0.04)] transition-shadow duration-200">
              <div className="card-body p-8 text-center">
                <h1 className="text-3xl font-semibold text-gray-900 mb-4 tracking-tight">
                  You're Signed Out
                </h1>
                <p className="text-[15px] text-[#86868b] mb-8">
                  Thank you for visiting. We look forward to welcoming you back.
                </p>
                <div className="d-grid gap-2">
                  <Link 
                    to="/login" 
                    className="btn border border-gray-300 text-gray-600 hover:bg-gray-50/80 py-3 rounded-[12px] font-medium text-[15px] transition-colors duration-200 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                  >
                    Sign In
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2 inline">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                    </svg> */}
                  </Link>
                  <Link 
                    to="/register" 
                    className="btn border border-gray-300 text-gray-600 hover:bg-gray-50/80 py-3 rounded-[12px] font-medium text-[15px] transition-colors duration-200 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
                  >
                    Create Account
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2 inline">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                    </svg> */}
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
