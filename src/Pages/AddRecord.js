import React from 'react';
import Footer from './Footer';

const AddRecord = () => (
    <div className="add-record single-page">
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
                            <li>Add Patient Records</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>

        <img data-aos="fade-left" className="header-img" src="https://res.cloudinary.com/lawfirm1000/image/upload/v1602714215/WebRec/about-bg_yybmu4.png" alt=""/>
    </header>

    <div className="add-record-container row d-flex justify-content-center" data-aos="fade-up">
        <form id="add-record-form" className="d-flex justify-content-center flex-column col-lg-4 col-md-6 col-sm-12">

            <input type="name" name="patient name" placeholder="Patient Name" /> <br/>
            <input type="number" name="age" placeholder="Age" /> <br/>
            <select>
                <option value="">Select Sex</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select> <br/>
            <input type="text" name="occupation" placeholder="Occupation" /> <br/>
            <select>
                <option value="">Marital Status</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
                <option value="widowed">Widowed</option>
                <option value="single-parent">Single Parent</option>
            </select> <br/>

            <input type="text" name="address" placeholder="Address" /> <br/>
            <select>
                <option value="">Religion</option>
                <option value="christianity">Christianity</option>
                <option value="islam">Islam</option>
                <option value="traditional">Traditional Religion</option>
                <option value="others">Others</option>
            </select> <br/>
            <input type="number" name="phone" placeholder="Phone Number" /> <br/>

            <textarea placeholder="Presenting Complaints (summary)"></textarea> <br/>
            <textarea placeholder="Relevant General Examination Findings"></textarea> <br/>
            <textarea placeholder="Relevant Systemic Examination Findings"></textarea> <br/>
            <textarea placeholder="Investigations Ordered"></textarea> <br/>
            <textarea placeholder="Relevant Investigation results"></textarea> <br/>
            <input type="text" name="diagnosis" placeholder="Diagnosis/Impression" /> <br/>
            <textarea placeholder="Management Plan"></textarea><br/>

            <div className="d-flex">
            <button type="submit">Submit</button>
            </div>
          </form>
        </div>

        <Footer />
    </div>
)

export default AddRecord;