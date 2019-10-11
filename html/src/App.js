import React from 'react';
// import logo from './logo.svg';
import './App.css';

// Font Awesome Lib 
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faMugHot, faCheckSquare } from '@fortawesome/free-solid-svg-icons';


// Images Loaded
import logo from './assets/images/logo.png';
import bodyBg from './assets/images/body-bg.svg';
// import headerBanner from './assets/images/header-banner.png';
import studyVisa from './assets/images/study-visa-icon.png';
import visitorVisa from './assets/images/visitor-visa.png';
import workVisa from './assets/images/work-visa.png';

library.add(faCheckSquare, faCoffee);

function App() {
  return (
    <div className="outer-container">


      <header>
        <div className="container">
          <nav className="navbar navbar-expand-md">
            <a className="navbar-brand" href="#">

              <img src={logo} alt="Logo" />


            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04"
              aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fas fa-bars"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample04">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">About us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">How it works</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Signup</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Become a Member</a>
                </li>

              </ul>

            </div>
          </nav>
        </div>
      </header>




      <div className="row below-header mt-4">
        <div className="container">
          <div className="row">

            <div className="col-md-12 col-lg-7">
              <div className="content">
                <h3 className="mb-5">LET'S SETTLE YOU QUICKLY IN </h3>
                <h4 className="mb-5">YOUR NEW HOME, CANADA!!!</h4>
                <p className="mt-3">
                  <a href="#" className="button">More About us</a>
                  <a href="#" className="button bg-transparent"> Get in Touch</a>
                </p>
              </div>
            </div>


            <div className="col-md-12 col-lg-5 banner-right">
              <div className="section-form">
                <h2> Lets Starts!!!</h2>
                <form className="needs-validation" novalidate>
                  <div className="form-row">
                    <div className="col-md-12 mb-3">
                      <label for="landingat">Landing At</label>
                      <div className="form-group">
                        <select className="custom-select form-control" required>
                          <option value="" selected>Select... </option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                        <div className="invalid-feedback">Example invalid custom select feedback</div>
                      </div>
                    </div>

                    <div className="col-md-12 mb-3">
                      <label for="visatype">Visa Type</label>
                      <div className="form-group">
                        <select className="custom-select form-control" required>
                          <option value="" selected>Select... </option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                        <div className="invalid-feedback">Example invalid custom select feedback</div>
                      </div>
                    </div>

                    <div className="col-md-12 mb-3">
                      <div className="form-group">
                        <label for="visatype">Travel Date</label>
                        <input type="date" className="form-control" placeholder="08/15/2018" />
                        <div className="invalid-feedback">Example invalid custom select feedback</div>
                      </div>
                    </div>
                    <div className="col-md-12 mb-3">
                      <div className="row">
                        <div className="col-md-4">
                          <label className="w-100 text-center"> Adults</label>
                          <div className="select-passenger">
                            <button type="button" id="sub" className="sub">-</button>
                            <input type="number" id="1" value="1" min="1" max="3" />
                            <button type="button" id="add" className="add">+</button>
                          </div>

                        </div>
                        <div className="col-md-4">
                          <label className="w-100 text-center"> Children (2 - 18)</label>
                          <div className="select-passenger">
                            <button type="button" id="sub" className="sub">-</button>
                            <input type="number" id="1" value="1" min="1" max="3" />
                            <button type="button" id="add" className="add">+</button>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <label className="w-100 text-center"> Infants (0 - 2)</label>
                          <div className="select-passenger">
                            <button type="button" id="sub" className="sub">-</button>
                            <input type="number" id="1" value="1" min="1" max="3" />
                            <button type="button" id="add" className="add">+</button>
                          </div>
                        </div>

                      </div>

                    </div>


                  </div>
                  <div className="pt-5 text-center">
                    <button className="button" type="submit">Search Now</button>
                  </div>

                </form>
              </div>



            </div>
            {/* <!-- right section finsih --> */}
          </div>
        </div>
      </div>
      {/* <!-- form and left sections content finish --> */}

      {/* <!-- our serfvices section starst --> */}
      <div className="row our-services">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-12 col-lg-3">
              <h4 className="section-heading-left">Anything
                     you need</h4>
              <p className="cta"><a href="#" className="button">Get in Touch</a></p>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3">
              <div className="section">
                <span className="icon"><img src={workVisa} alt="Study Visa" /></span>
                <h2 className="section-heading">Study Visa with
                     IELTS</h2>
                <p>Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan
                     tincidunt.</p>
              </div>
            </div>

            <div className="col-12 col-sm-6  col-md-6 col-lg-3"><div className="section">
              <span className="icon"><img src={studyVisa} alt="" /></span>
              <h2 className="section-heading">Study Visa with
                     IELTS</h2>
              <p>Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan
                     tincidunt.</p></div>
            </div>

            <div className="col-12 col-sm-12  col-md-12 col-lg-3"><div className="section">
              <span className="icon"><img src={visitorVisa} alt="" /></span>
              <h2 className="section-heading">Temporary Visitor Visa
                     </h2>
              <p>Vestibulum ac diam sit amet quam vehicula elementum amet est on dui. Nulla porttitor accumsan
                     tincidunt.</p></div>
            </div>


          </div>
        </div>
      </div>
      {/* <!-- our services section finsih --> */}

      {/* <!-- footer section starst --> */}
      <footer style={{ height: 450 }}>
        <div className="container">
          <div className="col-md-12">
            <div className="row">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">How it Works</a></li>
                <li><a href="#">Become Member</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <p> © 2019 - Easy landing, All Right Reserved</p>
          <p>
            <a href=""><i className="fab fa-facebook-f fa-3x"></i></a>
            <a href=""><i className="fab fa-twitter fa-3x"></i></a>
            <a href=""><i className="fab fa-dribbble fa-3x"></i></a>
          </p>
        </div>
      </footer>
      {/* <!-- footer section finsih --> */}
    </div>
  );
}

export default App;
