import React from 'react';
import Footer from './Footer';

const Avemaria = () => (
    <div className="my-records single-page">
        <header className="site-header">
        <div className="nav-bar">
            <div className="container">
                <div className="row">
                    <div className="col-12 d-flex flex-wrap justify-content-between align-items-center">
                        <div className="site-branding d-flex align-items-center">
                            <a data-aos="fade-down" className="d-block" href="/" rel="home"><img className="d-block" src="images/logo.png" alt="logo"/></a>
                        </div>

                        <nav className="site-navigation d-flex justify-content-end align-items-center">
                            <ul className="d-flex flex-column flex-lg-row justify-content-lg-end align-items-center">
                                <li><a href="/">Home</a></li>
                                <li><a href="/about">About us</a></li>
                                <li  className="current-menu-item"><a href="/dashboard">Dashboard</a></li>
                                <li><a href="/contact">Contact</a></li>

                                <li className="call-btn button gradient-bg mt-3 mt-md-0">
                                    <a className="d-flex justify-content-center align-items-center" href="tel:=2348160983729"><img src="images/emergency-call.png" alt=""/> Call us!</a>
                                </li>
                            </ul>
                        </nav>

                        <div className="hamburger-menu d-lg-none">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2 data-aos="fade-up">Add Patient Record</h2>

                    <div data-aos="fade-up" data-aos-delay="100" className="breadcrumbs">
                        <ul className="d-flex flex-wrap align-items-center p-0 m-0">
                            <li><a href="/">Home</a></li>
                            <li><a href="/dashboard">Dashboard</a></li>
                            <li><a href="my-records">My Saved Records</a></li>
                            <li>Avemaria Anders</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>

        <img data-aos="fade-left" className="header-img" src="https://res.cloudinary.com/lawfirm1000/image/upload/v1602714215/WebRec/about-bg_yybmu4.png" alt=""/>
    </header>

    <div className="records-details container row d-flex flex-column justify-content-center" data-aos="fade-up">
        <h2>Avemaria Anders</h2>

        <p><strong>Name:</strong> Avemaria Anders</p>
        <p><strong>Age:</strong> 35 years</p>
        <p><strong>Sex:</strong> Female</p>
        <p><strong>Occupation:</strong> Teacher</p>
        <p><strong>Marital Status:</strong> Single Mother</p>
        <p><strong>Address:</strong> C34, Highland Cresents, Port Harcourts, Nigeria</p>
        <p><strong>Religion:</strong> Christianity</p>
        <p><strong>Tribe:</strong> Igbo</p>
        <p><strong>Phone No.:</strong> +234 813 4567 890</p>
        <p><strong>Presenting Complaints:</strong> <ul>
            <li> Dry cough of 6weeks duration</li>
            <li> Unintended weight loss of 2 months</li></ul></p>
        <p><strong>General examination findings:</strong> <ul>
            <li>Slightly pale</li>
            <li>Cachexic</li></ul></p>
        <p><strong>Systemic examination findings:</strong> <ul>
            <li>Soft Wheeze</li>
            <li>Non-symmetric chest expansion</li></ul></p>
        <p><strong>Investigations Ordered:</strong> <ul>
            <li>Chest X-ray</li>
            <li>Sputum Mantoux Tuberculin test</li></ul></p>
        <p><strong>Investigation results:</strong> Not done yet</p>
        <p><strong>Impression/Diagnosis:</strong> Chest infection ? TB</p>
        <p><strong>Management Plan:</strong> <ul>
            <li>Await test result</li></ul></p>
    </div>

        <Footer />
    </div>
)

export default Avemaria;