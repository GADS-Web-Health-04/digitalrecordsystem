import React, { useEffect, useState } from 'react';
import { Redirect } from "react-router-dom";
import Footer from './Footer';

const Login = () => {

  const [ redirect, setRedirect ] = useState(null);

    useEffect(() => {
      const signUpButton = document.getElementById('signUp');
      const signInButton = document.getElementById('signIn');
      const loginPage = document.getElementById('loginPage');

      signUpButton.addEventListener('click', () => loginPage.classList.add('right-panel-active'));

      signInButton.addEventListener('click', () => loginPage.classList.remove('right-panel-active'));

      return () => {
        signUpButton.removeEventListener('click', () => loginPage.classList.add('right-panel-active'));

        signInButton.removeEventListener('click', () => loginPage.classList.remove('right-panel-active'));

      }
    })
    useEffect(() => {
      const form = document.getElementById('sign-in-form');
      form.addEventListener('submit', (e) => {
        e.preventDefault();
      const formData = new FormData(form);
        const email = formData.get('email');
        const password = formData.get('password');
        console.log(email)
        console.log(password)
        if (email === 'admin@gmail.com' && password === 'medrecadmin'){
          setRedirect('/dashboard');
        }
      return () => {
        form.removeEventListener('submit', (e) => {
        e.preventDefault();
      const formData = new FormData(form);
        const email = formData.get('email');
        const password = formData.get('password');
        console.log(email)
        console.log(password)
        if (email === 'admin@gmail.com' && password === 'medrecadmin'){
          setRedirect('/dashboard');
        }
      }
      )
    }}, []);
  });

    if (redirect !== null){
      return <Redirect to={redirect} />
    }
    else return (
    <>
    <div className="single-page">
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
                                <li  className="current-menu-item"><a href="/login">Sign Up/In</a></li>
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
                    <h2 data-aos="fade-up">Sign Up/In</h2>

                    <div data-aos="fade-up" data-aos-delay="100" className="breadcrumbs">
                        <ul className="d-flex flex-wrap align-items-center p-0 m-0">
                            <li><a href="/">Home</a></li>
                            <li>Sign Up/In</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>

        <img data-aos="fade-left" className="header-img" src="https://res.cloudinary.com/lawfirm1000/image/upload/v1602714215/WebRec/about-bg_yybmu4.png" alt=""/>
    </header>

      <div data-aos="fade-up" data-aos-delay="100" className="container" id="loginPage">
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <a href="/register-hosp" className="register-links">Sign up your hospital</a>
            <a href="/register-personal" className="register-links">Sign up as a healthcare provider</a>
          </form>
        </div>

        <div className="form-container sign-in-container">
        <form id="sign-in-form">
            <h1>Sign In</h1>
            <div className="social-container">
              <a href="#fab" className="social"><i className="fa fa-facebook"></i></a>
              <a href="#fab" className="social"><i className="fa fa-google-plus"></i></a>
              <a href="#fab" className="social"><i className="fa fa-linkedin"></i></a>
            </div>
            <span>or use your account</span>
            <input type="email" name="email" placeholder="Email" />
            <input type="password" name="password" placeholder="Password" />
            <a href="#ab">Forgot your password?</a>
            <button type="submit">Sign In</button>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us, please login with your personal details</p>
              <button className="ghost" id="signIn">Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, friend!</h1>
              <p>Enter your personal details and start journey with us!</p>
              <button className="ghost" id="signUp">Sign Up</button>
            </div>
          </div>
        </div>
      </div>

  </div>
        <Footer/>
        </>
    );
  };

  export default Login;