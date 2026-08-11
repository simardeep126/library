import React from 'react'
import { Link } from 'react-router-dom'


export default function PupilHome() {
  return (
    <>



      <section id="billboard">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">

            {/* Slide 1 */}
            <div className="carousel-item active">
              <div className="container">
                <div className="row align-items-center">

                  {/* LEFT - TEXT */}
                  <div className="col-md-6">
                    <div className="banner-content">
                      <h2 className="banner-title">
                        Life of the Wild
                      </h2>

                      <p>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Sed eu feugiat amet, libero
                        ipsum enim pharetra hac. Urna commodo, lacus
                        ut magna velit eleifend. Amet, quis urna, a eu.
                      </p>

                      <div className="btn-wrap">
                        <Link
                          to="/login"
                          className="btn btn-outline-accent btn-accent-arrow"
                        >
                          Log-in...
                          <i className="icon icon-ns-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT - BOOK */}
                  <div className="col-md-6">
                    <div className="banner-image-wrap">
                      <img
                        src="/images/main-banner1.jpg"
                        alt="Life of the Wild"
                        className="banner-image"
                      />
                    </div>
                  </div>

                </div>
              </div>
            </div>


            {/* Slide 2 */}
            <div className="carousel-item">
              <div className="container">
                <div className="row align-items-center">

                  {/* LEFT - TEXT */}
                  <div className="col-md-6">
                    <div className="banner-content">
                      <h2 className="banner-title">
                        Birds gonna be Happy
                      </h2>

                      <p>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Sed eu feugiat amet, libero
                        ipsum enim pharetra hac. Urna commodo, lacus
                        ut magna velit eleifend. Amet, quis urna, a eu.
                      </p>

                      <div className="btn-wrap">
                        <Link
                          to="#"
                          className="btn btn-outline-accent btn-accent-arrow"
                        >
                          Read More
                          <i className="icon icon-ns-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT - BOOK */}
                  <div className="col-md-6">
                    <div className="banner-image-wrap">
                      <img
                        src="/images/main-banner2.jpg"
                        alt="Birds gonna be Happy"
                        className="banner-image"
                      />
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>


          {/* Previous */}



          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>

        </div>
      </section>
      <section id="client-holder pb-5 mb" >
        <div className="container">
          <div className="row">
            <div className="inner-content">
              <div className="logo-wrap">
                <div className="grid">
                  <Link to="#">
                    <img src="/images/client-image1.png" alt="client" />
                  </Link>
                  <Link to="#">
                    <img src="/images/client-image2.png" alt="client" />
                  </Link>
                  <Link to="#">
                    <img src="/images/client-image3.png" alt="client" />
                  </Link>
                  <Link to="#">
                    <img src="/images/client-image4.png" alt="client" />
                  </Link>
                  <Link to="#">
                    <img src="/images/client-image5.png" alt="client" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    

    </>
  )
}
