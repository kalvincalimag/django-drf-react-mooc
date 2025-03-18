import React from 'react'
import BaseHeader from '../partials/BaseHeader'
import BaseFooter from '../partials/BaseFooter'
import { Link } from 'react-router-dom'
function Index() {
    return (
        <>
            <BaseHeader />

            <section className="d-flex align-items-center bg-white" style={{ height: 'calc(100vh - 56px)'}}>
                <div className="container mx-auto" style={{ maxWidth: '1200px' }}>
                    <div className="row align-items-center justify-content-between">
                        <div className="col-lg-5">
                            <h5 className="text-muted mb-3 fw-medium">
                                <i className="fe fe-check icon-xs bg-light rounded-circle p-2 me-2" />
                                A Smarter Way to Learn
                            </h5>
                            <h1 className="display-4 fw-semibold text-dark mb-3">
                                Unlock Your Potential.
                            </h1>
                            <p className="lead text-secondary mb-4">
                                Learn from industry experts and top universities with courses designed for your success.
                            </p>
                            <div>
                                <a href="#" className="btn btn-dark btn-lg rounded-pill px-4 me-3" 
                                    style={{ opacity: 0.9, transition: 'opacity 0.3s' }} 
                                    onMouseEnter={(e) => e.target.style.opacity = 1} 
                                    onMouseLeave={(e) => e.target.style.opacity = 0.9}>
                                    Get Started <i className="fas fa-chevron-right ms-2"></i>
                                </a>
                                <a href="https://www.youtube.com/watch?v=Nfzi7034Kbg"
                                    className="btn btn-outline-dark btn-lg rounded-pill px-4">
                                    Watch Demo <i className="fas fa-play ms-2"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-end">
                            <img
                                src="https://img.freepik.com/free-photo/portrait-asian-teen-boy-ready-school_23-2149132894.jpg?t=st=1742338469~exp=1742342069~hmac=9b2181a77675f11173b3b7e0cb136a3c5b91a55e806b231905039f24a2be727d&w=2000"
                                alt="Learning Experience"
                                className="img-fluid"
                                style={{ borderRadius: '20px', maxWidth: '100%' }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className='mb-5'>
                <div className="container mb-lg-8 ">
                    <div className="row mb-5 mt-3">
                        {/* col */}
                        <div className="col-12">
                            <div className="mb-6">
                                <h2 className="mb-1 h1">🔥Most Popular Courses</h2>
                                <p>
                                    These are the most popular courses among Geeks Courses learners
                                    worldwide in year 2022
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                                <div className="col">
                                    {/* Card */}
                                    <div className="card card-hover shadow-sm border-0 rounded-4" style={{ backgroundColor: "#FFFFFF" }}>
                                        <Link to={`/course-detail/slug/`}>
                                            <img
                                                src="https://geeksui.codescandy.com/geeks/assets/images/course/course-css.jpg"
                                                alt="course"
                                                className="card-img-top rounded-top-4"
                                                style={{ width: "100%", height: "200px", objectFit: "cover" }}
                                            />
                                        </Link>
                                        {/* Card Body */}
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                <span className="badge text-dark" style={{ backgroundColor: "#EAEAEA" }}>Intermediate</span>
                                                <a href="#" className="fs-5">
                                                    <i className="fas fa-heart text-danger align-middle" />
                                                </a>
                                            </div>
                                            <h4 className="mb-2 text-truncate-line-2" style={{ fontFamily: "SF Pro Display, sans-serif", fontWeight: "600", color: "#1D1D1F" }}>
                                                <Link to={`/course-detail/slug/`} className="text-decoration-none text-dark">
                                                    The Ultimate Beginners CSS Crash Course
                                                </Link>
                                            </h4>
                                            <small className="text-muted">By: Claire Evans</small> <br />
                                            <small className="text-muted">16k Students</small> <br />
                                            <div className="lh-1 mt-3 d-flex align-items-center">
                                                <span className="fs-6 text-warning">
                                                    <i className='fas fa-star'></i>
                                                    <i className='fas fa-star'></i>
                                                    <i className='fas fa-star'></i>
                                                    <i className='fas fa-star'></i>
                                                    <i className='fas fa-star-half'></i>
                                                </span>
                                                <span className="text-dark ms-1 fw-semibold">4.5</span>
                                                <span className="fs-6 text-muted ms-2">(9,300)</span>
                                            </div>
                                        </div>
                                        {/* Card Footer */}
                                        <div className="card-footer bg-white border-0">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <h5 className="mb-0 fw-bold" style={{ fontFamily: "SF Pro Display, sans-serif", color: "#1D1D1F" }}>$39.00</h5>
                                                <div>
                                                    <button type="button" className="btn btn-outline-secondary rounded-pill me-2 px-3">
                                                        <i className="fas fa-shopping-cart" />
                                                    </button>
                                                    <Link to={""} className="btn btn-dark rounded-pill px-4">
                                                        Enroll Now <i className="fas fa-arrow-right align-middle ms-1" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <nav className="d-flex mt-5">
                                  <ul className="pagination">
                                    <li
                                      className=""
                                    >
                                      <button
                                        className="page-link me-1"
                                      >
                                        <i className="ci-arrow-left me-2" />
                                        Previous
                                      </button>
                                    </li>
                                  </ul>
                                  <ul className="pagination">
                                    <li
                                        key={1}
                                        className="active"
                                      >
                                        <button
                                          className="page-link"
                                        >
                                          1
                                        </button>
                                      </li>
                                  </ul>
                                  <ul className="pagination">
                                    <li
                                      className={`totalPages`}
                                    >
                                      <button
                                        className="page-link ms-1"
                                      >
                                        Next
                                        <i className="ci-arrow-right ms-3" />
                                      </button>
                                    </li>
                                  </ul>
                                </nav> */}

                                <div className="col">
                                    {/* Card */}
                                    <div className="card card-hover shadow-sm border-0 rounded-4" style={{ backgroundColor: "#FFFFFF" }}>
                                        <Link to={`/course-detail/slug/`}>
                                            <img
                                                src="https://geeksui.codescandy.com/geeks/assets/images/course/course-angular.jpg"
                                                alt="course"
                                                className="card-img-top rounded-top-4"
                                                style={{ width: "100%", height: "200px", objectFit: "cover" }}
                                            />
                                        </Link>
                                        {/* Card Body */}
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                <span className="badge text-dark" style={{ backgroundColor: "#EAEAEA" }}>Intermediate</span>
                                                <a href="#" className="fs-5">
                                                    <i className="fas fa-heart text-danger align-middle" />
                                                </a>
                                            </div>
                                            <h4 className="mb-2 text-truncate-line-2" style={{ fontFamily: "SF Pro Display, sans-serif", fontWeight: "600", color: "#1D1D1F" }}>
                                                <Link to={`/course-detail/slug/`} className="text-decoration-none text-dark">
                                                    Angular Intermediate In-depth Course
                                                </Link>
                                            </h4>
                                            <small className="text-muted">By: Claire Evans</small> <br />
                                            <small className="text-muted">16k Students</small> <br />
                                            <div className="lh-1 mt-3 d-flex align-items-center">
                                                <span className="fs-6 text-warning">
                                                    <i className='fas fa-star'></i>
                                                    <i className='fas fa-star'></i>
                                                    <i className='fas fa-star'></i>
                                                    <i className='fas fa-star'></i>
                                                    <i className='fas fa-star-half'></i>
                                                </span>
                                                <span className="text-dark ms-1 fw-semibold">4.5</span>
                                                <span className="fs-6 text-muted ms-2">(9,300)</span>
                                            </div>
                                        </div>
                                        {/* Card Footer */}
                                        <div className="card-footer bg-white border-0">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <h5 className="mb-0 fw-bold" style={{ fontFamily: "SF Pro Display, sans-serif", color: "#1D1D1F" }}>$39.00</h5>
                                                <Link to={""} className="btn btn-dark rounded-pill px-4">
                                                    <i className="fas fa-shopping-cart align-middle me-2 text-white" />
                                                    Enroll Now
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col">
                                    {/* Card */}
                                    <div className="card card-hover shadow-sm border-0 rounded-4" style={{ backgroundColor: "#FFFFFF" }}>
                                        <Link to={`/course-detail/slug/`}>
                                            <img
                                                src="https://geeksui.codescandy.com/geeks/assets/images/course/course-react.jpg"
                                                alt="course"
                                                className="card-img-top rounded-top-4"
                                                style={{ width: "100%", height: "200px", objectFit: "cover" }}
                                            />
                                        </Link>
                                        {/* Card Body */}
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                <span className="badge text-dark" style={{ backgroundColor: "#EAEAEA" }}>Intermediate</span>
                                                <a href="#" className="fs-5">
                                                    <i className="fas fa-heart text-danger align-middle" />
                                                </a>
                                            </div>
                                            <h4 className="mb-2 text-truncate-line-2" style={{ fontFamily: "SF Pro Display, sans-serif", fontWeight: "600", color: "#1D1D1F" }}>
                                                <Link to={`/course-detail/slug/`} className="text-decoration-none text-dark">
                                                    Your Complete Guide to React JS
                                                </Link>
                                            </h4>
                                            <small className="text-muted">By: Claire Evans</small> <br />
                                            <small className="text-muted">16k Students</small> <br />
                                            <div className="lh-1 mt-3 d-flex align-items-center">
                                                <span className="fs-6 text-warning">
                                                    <i className='fas fa-star'></i>
                                                    <i className='fas fa-star'></i>
                                                    <i className='fas fa-star'></i>
                                                    <i className='fas fa-star'></i>
                                                    <i className='fas fa-star-half'></i>
                                                </span>
                                                <span className="text-dark ms-1 fw-semibold">4.5</span>
                                                <span className="fs-6 text-muted ms-2">(9,300)</span>
                                            </div>
                                        </div>
                                        {/* Card Footer */}
                                        <div className="card-footer bg-white border-0">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <h5 className="mb-0 fw-bold" style={{ fontFamily: "SF Pro Display, sans-serif", color: "#1D1D1F" }}>$39.00</h5>
                                                <Link to={""} className="btn btn-dark rounded-pill px-4">
                                                    <i className="fas fa-shopping-cart align-middle me-2 text-white" />
                                                    Enroll Now
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    {/* Card */}
                                    <div className="card card-hover shadow-sm border-0 rounded-4" style={{ backgroundColor: "#FFFFFF" }}>
                                        <Link to={`/course-detail/slug/`}>
                                            <img
                                                src="https://geeksui.codescandy.com/geeks/assets/images/course/course-python.jpg"
                                                alt="course"
                                                className="card-img-top rounded-top-4"
                                                style={{ width: "100%", height: "200px", objectFit: "cover" }}
                                            />
                                        </Link>
                                        {/* Card Body */}
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between align-items-center mb-2">
                                                <span className="badge text-dark" style={{ backgroundColor: "#EAEAEA" }}>Intermediate</span>
                                                <a href="#" className="fs-5">
                                                    <i className="fas fa-heart text-danger align-middle" />
                                                </a>
                                            </div>
                                            <h4 className="mb-2 text-truncate-line-2" style={{ fontFamily: "SF Pro Display, sans-serif", fontWeight: "600", color: "#1D1D1F" }}>
                                                <Link to={`/course-detail/slug/`} className="text-decoration-none text-dark">
                                                    How to Easily Create a Web App with Python
                                                </Link>
                                            </h4>
                                            <small className="text-muted">By: Claire Evans</small> <br />
                                            <small className="text-muted">16k Students</small> <br />
                                            <div className="lh-1 mt-3 d-flex align-items-center">
                                                <span className="fs-6 text-warning">
                                                    <i className='fas fa-star'></i>
                                                    <i className='fas fa-star'></i>
                                                    <i className='fas fa-star'></i>
                                                    <i className='fas fa-star'></i>
                                                    <i className='fas fa-star-half'></i>
                                                </span>
                                                <span className="text-dark ms-1 fw-semibold">4.5</span>
                                                <span className="fs-6 text-muted ms-2">(9,300)</span>
                                            </div>
                                        </div>
                                        {/* Card Footer */}
                                        <div className="card-footer bg-white border-0">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <h5 className="mb-0 fw-bold" style={{ fontFamily: "SF Pro Display, sans-serif", color: "#1D1D1F" }}>$39.00</h5>
                                                <Link to={""} className="btn btn-dark rounded-pill px-4">
                                                    <i className="fas fa-shopping-cart align-middle me-2 text-white" />
                                                    Enroll Now
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="py-8 my-8">
                <div className="container">
                    <div className="row align-items-center bg-primary rounded-4 text-white p-5">
                        {/* Image Column (Hidden on Small Screens) */}
                        <div className="col-lg-6 d-none d-lg-flex justify-content-center">
                            <div className="position-relative">
                                <img 
                                    src="https://geeksui.codescandy.com/geeks/assets/images/png/cta-instructor-1.png" 
                                    alt="Instructor" 
                                    className="img-fluid mt-n5"
                                />
                                <img 
                                    src="https://geeksui.codescandy.com/geeks/assets/images/svg/dollor.svg" 
                                    alt="Dollar" 
                                    className="position-absolute bottom-0 start-0 mb-5 ms-n5"
                                />
                                <img 
                                    src="https://geeksui.codescandy.com/geeks/assets/images/svg/graph.svg" 
                                    alt="Graph" 
                                    className="position-absolute top-0 end-0 me-n4"
                                />
                            </div>
                        </div>

                        {/* Text Column */}
                        <div className="col-lg-5 text-center text-lg-start">
                            <h2 className="fw-bold">Become an Instructor Today</h2>
                            <p className="mb-4">
                                Join instructors worldwide who teach millions of students on Geeks. 
                                We provide the tools and skills to help you share your knowledge.
                            </p>
                            <a href="#" className="btn btn-light text-primary fw-semibold">
                                Start Teaching Today <i className="fas fa-arrow-right ms-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-200 pt-8 pb-8 mt-5">
                <div className="container pb-8">
                    {/* row */}
                    
                    <div className="row mb-5 mb-lg-8">
                        <div className="offset-lg-1 col-lg-10">
                            <div className="row align-items-center">
                                {/* Left Column - Ratings & Text */}
                                <div className="col-lg-6 col-md-8">
                                    {/* Rating */}
                                    <div className="mb-3 mt-5 d-flex align-items-center">
                                        <div className="text-gold">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star-half-alt"></i>
                                        </div>
                                        <span className="ms-2 text-dark fw-bold fs-5">4.5/5.0</span>
                                        <span className="ms-2 text-muted">(Based on 3,265 ratings)</span>
                                    </div>

                                    {/* Heading */}
                                    <h2 className="h1 fw-semibold text-dark">What Our Students Say</h2>
                                    <p className="text-gray-700 fs-5">
                                        Hear from <span className="fw-semibold text-dark">teachers</span>, 
                                        <span className="fw-semibold text-dark"> trainers</span>, and 
                                        <span className="fw-semibold text-dark"> leaders</span> about how 
                                        Geeks helps them create quality online learning experiences.
                                    </p>
                                </div>

                                {/* Right Column - Button */}
                                <div className="col-lg-6 col-md-4 text-md-end mt-4 mt-md-0">
                                    <a href="#" className="btn btn-dark fw-semibold px-4 py-2">
                                        View Reviews
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* row */}
                    <div className="row">
                        {/* col */}
                        <div className="col-md-12">
                            <div className="position-relative">
                                {/* controls */}
                                {/* slider */}
                                <div className="sliderTestimonial">
                                    {/* item */}
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <div className="item">
                                                <div className="card shadow-sm border-0 rounded-4 text-center p-4" style={{ backgroundColor: "#FFFFFF" }}>
                                                    <div className="card-body">
                                                        {/* Avatar */}
                                                        <img
                                                            src="../../assets/images/avatar/avatar-1.jpg"
                                                            alt="avatar"
                                                            className="rounded-circle"
                                                            style={{ width: "80px", height: "80px", objectFit: "cover" }}
                                                        />
                                                        {/* Quote */}
                                                        <p className="mt-3 text-muted" style={{ fontSize: "16px", fontFamily: "SF Pro Display, sans-serif", fontWeight: "400" }}>
                                                            “The generated lorem Ipsum is therefore always free from repetition, injected humour, or unnecessary words.”
                                                        </p>
                                                        {/* Rating */}
                                                        <div className="lh-1 mb-3 mt-3 text-warning">
                                                            {[...Array(5)].map((_, i) => (
                                                                <i key={i} className="fas fa-star"></i>
                                                            ))}
                                                            <span className="text-dark ms-1 fw-semibold">5.0</span>
                                                        </div>
                                                        {/* Name & Position */}
                                                        <h4 className="mb-0" style={{ fontFamily: "SF Pro Display, sans-serif", fontWeight: "600", color: "#1D1D1F" }}>Gladys Colbert</h4>
                                                        <span className="text-muted" style={{ fontSize: "14px" }}>Software Engineer at Palantir</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="item">
                                                <div className="card shadow-sm border-0 rounded-4 text-center p-4 bg-white">
                                                    <div className="card-body">
                                                        {/* Avatar */}
                                                        <img
                                                            src="../../assets/images/avatar/avatar-1.jpg"
                                                            alt="avatar"
                                                            className="rounded-circle"
                                                            style={{ width: "80px", height: "80px", objectFit: "cover" }}
                                                        />
                                                        {/* Quote */}
                                                        <p className="mt-3 text-muted" style={{ fontSize: "16px", fontWeight: "400" }}>
                                                            “The generated lorem Ipsum is therefore always free from repetition, injected humour, or unnecessary words.”
                                                        </p>
                                                        {/* Rating */}
                                                        <div className="lh-1 mb-3 mt-3 text-warning">
                                                            {[...Array(5)].map((_, i) => (
                                                                <i key={i} className="fas fa-star"></i>
                                                            ))}
                                                            <span className="text-dark ms-1 fw-semibold">5.0</span>
                                                        </div>
                                                        {/* Name & Position */}
                                                        <h4 className="mb-0 fw-semibold text-dark">Gladys Colbert</h4>
                                                        <span className="text-muted" style={{ fontSize: "14px" }}>Software Engineer at Palantir</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="item">
                                                <div className="card shadow-sm border-0 rounded-4 text-center p-4 bg-white">
                                                    <div className="card-body">
                                                        {/* Avatar */}
                                                        <img
                                                            src="../../assets/images/avatar/avatar-1.jpg"
                                                            alt="avatar"
                                                            className="rounded-circle"
                                                            style={{ width: "80px", height: "80px", objectFit: "cover" }}
                                                        />
                                                        {/* Quote */}
                                                        <p className="mt-3 text-muted" style={{ fontSize: "16px", fontWeight: "400" }}>
                                                            “The generated lorem Ipsum is therefore always free from repetition, injected humour, or unnecessary words.”
                                                        </p>
                                                        {/* Rating */}
                                                        <div className="lh-1 mb-3 mt-3 text-warning">
                                                            {[...Array(5)].map((_, i) => (
                                                                <i key={i} className="fas fa-star"></i>
                                                            ))}
                                                            <span className="text-dark ms-1 fw-semibold">5.0</span>
                                                        </div>
                                                        {/* Name & Position */}
                                                        <h4 className="mb-0 fw-semibold text-dark">Gladys Colbert</h4>
                                                        <span className="text-muted" style={{ fontSize: "14px" }}>Software Engineer at Palantir</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <BaseFooter />

        </>
    )
}

export default Index
