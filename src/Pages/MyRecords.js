import React from 'react';
import Footer from './Footer';

const MyRecords = () => (
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
                            <li>My Saved Records</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>

        <img data-aos="fade-left" className="header-img" src="https://res.cloudinary.com/lawfirm1000/image/upload/v1602714215/WebRec/about-bg_yybmu4.png" alt=""/>
    </header>

    <div className="my-records-container row d-flex justify-content-center" data-aos="fade-up">
        <h2>My Saved Records</h2>
    <table>
  <tr>
    <th>S/N</th>
    <th>Patient Name (a-z)</th>
    <th>Date Saved</th>
  </tr>
  <tr>
    <td>1</td>
    <td><a href="/avemaria-anders">Avemaria Anders</a></td>
    <td>01/11/2019</td>
  </tr>
  <tr>
    <td>2</td>
    <td><a href="/avemaria-anders">Francisco Chang</a></td>
    <td>29/02/2020</td>
  </tr>
  <tr>
    <td>6</td>
    <td><a href="/avemaria-anders">Giovanni Rovelli</a></td>
    <td>10/07/2019</td>
  </tr>
  <tr>
    <td>4</td>
    <td><a href="/avemaria-anders">Helen Bennett</a></td>
    <td>31/06/2020</td>
  </tr>
  <tr>
    <td>3</td>
    <td><a href="/avemaria-anders">Roland Mendel</a></td>
    <td>04/05/2020</td>
  </tr>
  <tr>
    <td>6</td>
    <td><a href="/avemaria-anders">Yoshi Tannamuri</a></td>
    <td>12/01/2020</td>
  </tr>
</table>
        </div>

        <Footer />
    </div>
)

export default MyRecords;