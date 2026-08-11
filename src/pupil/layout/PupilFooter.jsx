import React from 'react'
import { Link } from 'react-router-dom'

function PupilFooter() {
  return (
    <>

      

      <footer id="footer mt-5">
<hr style={{ border: "2px solid black" }} />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="footer-item">
                <div className="company-brand">
                  <img
                    src="/images/main-logo.png"
                    alt="logo"
                    className="footer-logo"
                  />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis
                    sed ptibus liberolectus nonet psryroin. Amet sed lorem posuere sit
                    iaculis amet, ac urna. Adipiscing fames semper erat ac in
                    suspendisse iaculis.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu">
                <h5>About Us</h5>
                <ul className="menu-list">
                  <li className="menu-item">
                    <Link to="#">vision</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="#">articles </Link>
                  </li>
                  <li className="menu-item">
                    <Link to="#">careers</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="#">service terms</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="#">donate</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu">
                <h5>Discover</h5>
                <ul className="menu-list">
                  <li className="menu-item">
                    <Link to="#">Home</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="#">Books</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="#">Authors</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="#">Subjects</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="#">Advanced Search</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu">
                <h5>My account</h5>
                <ul className="menu-list">
                  <li className="menu-item">
                    <Link to="#">Sign In</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="#">View Cart</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="#">My Wishtlist</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="#">Track My Order</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu">
                <h5>Help</h5>
                <ul className="menu-list">
                  <li className="menu-item">
                    <Link to="#">Help center</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="#">Report a problem</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="#">Suggesting edits</Link>
                  </li>
                  <li className="menu-item">
                    <Link to="#">Contact us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* / row */}
        </div>
      </footer>


      <div id="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="copyright">
                <div className="row">

                  <div className="col-md-6">
                    <p>
                      © 2022 All rights reserved. Free HTML Template by{" "}
                      <Link
                        to="https://www.templatesjungle.com/"
                        target="_blank"
                      >
                        TemplatesJungle
                      </Link>
                    </p>
                  </div>

                  <div className="col-md-6">
                    <div className="social-links align-right">
                      <ul>
                        <li>
                          <Link to="#">
                            <i className="icon icon-facebook"></i>
                          </Link>
                        </li>

                        <li>
                          <Link to="#">
                            <i className="icon icon-twitter"></i>
                          </Link>
                        </li>

                        <li>
                          <Link to="#">
                            <i className="icon icon-youtube-play"></i>
                          </Link>
                        </li>

                        <li>
                          <Link to="#">
                            <i className="icon icon-behance-square"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default PupilFooter