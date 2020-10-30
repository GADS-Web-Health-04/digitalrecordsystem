import React, { useEffect } from 'react';
import Footer from './Footer';
import Chart from "chart.js";

const Visualise = () => {

    useEffect(() => {
        const ctx = document.getElementById("barChart").getContext('2d');
        new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
          datasets: [{
            label: 'Total records per month',
            data: [15, 25, 10, 20, 12, 8, 5, 10, 21, 9, 11, 32],
            backgroundColor: "rgba(255,0,0,1)",
            color: "#485281",
          }]
        }
    })

    new Chart(document.getElementById("pieChart"), {
    type: 'pie',
    data: {
      labels: ["0-5", "6-18", "19-60", "60 and above"],
      datasets: [{
        label: "Number of cases",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9"],
        data: [24,17,44,31]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Patients Records by Age-groups'
      }
    }
});
})
    return (
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
                            <li>Data Visualization</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>

        <img data-aos="fade-left" className="header-img" src="https://res.cloudinary.com/lawfirm1000/image/upload/v1602714215/WebRec/about-bg_yybmu4.png" alt=""/>
    </header>

    <div className="visualise-container d-flex flex-column justify-content-center" data-aos="fade-up">

    <div id="bar-chart"><canvas id="barChart"></canvas></div><br/>

    <div id="pie-chart"><canvas id="pieChart"></canvas></div>

    <div className="choose-chart d-flex flex-column justify-content-center">
        <h3>Create Chart</h3>
        <select>
            <option value="">Select Chart Type</option>
            <option value="bar-chart">Bar Chart</option>
            <option value="pie-chart">Pie Chart</option>
            <option value="line-chart">Line Chart</option>
            <option value="doughnut-chart">Doughnut Chart</option>
            <option value="horizontal-bars">Horizontal Bars</option>
            <option value="mixed-charts">Mixed Chart</option>
        </select>
        <select>
            <option value="">Select Data Types</option>
            <option value="age-groups">Age Groups</option>
            <option value="sex">Sex</option>
            <option value="occupation">Occupation</option>
            <option value="marital-status">Marital Status</option>
            <option value="religion">Religion</option>
            <option value="diagnosis">Diagnosis</option>
            <option value="socio-economic-status">Socio-Economic Status</option>
            <option value="referred-cases">Referred Cases</option>
            <option value="specialty">Managing Specialty</option>
            <option value="state">State</option>
        </select>
        <div className="d-flex justify-content-center">
        <button>Submit</button>

        </div>
    </div>

        </div>

        <Footer />
    </div>
)
}
export default Visualise;