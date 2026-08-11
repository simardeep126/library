import React from "react";
import { Link } from "react-router-dom";

function PupilHeader() {
    return (
        <>


           


            <div className="container">

                <div id="header-wrap">

                    {/* Top Content */}
                    <div className="top-content">
                        <div className="container-fluid">
                            <div className="row">

                                <div className="col-md-6">
                                    <div className="social-links">
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

                                <div className="col-md-6">
                                    <div className="right-element">

                                        <Link to="#" className="user-account for-buy">
                                            <i className="icon icon-user"></i>
                                            <span>Account</span>
                                        </Link>

                                        <Link to="#" className="cart for-buy">
                                            <i className="icon icon-clipboard"></i>
                                            <span>Cart:(0 $)</span>
                                        </Link>

                                        <div className="action-menu">
                                            <div className="search-bar">

                                                <Link
                                                    to="#"
                                                    className="search-button search-toggle"
                                                    data-selector="#header-wrap"
                                                >
                                                    <i className="icon icon-search"></i>
                                                </Link>

                                                <form
                                                    role="search"
                                                    method="get"
                                                    className="search-box"
                                                >
                                                    <input
                                                        className="search-field text search-input"
                                                        placeholder="Search"
                                                        type="search"
                                                    />
                                                </form>

                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>


                    {/* Main Header */}
                    <header id="header">
                        <div className="container-fluid">
                            <div className="row">

                                <div className="col-md-2">
                                    <div className="main-logo">
                                        <Link to="/">
                                            <img
                                                src="/images/main-logo.png"
                                                alt="logo"
                                            />
                                        </Link>
                                    </div>
                                </div>


                                <div className="col-md-10">
                                    <nav id="navbar">

                                        <div className="main-menu stellarnav">

                                            <ul className="menu-list">

                                                <li className="menu-item active">
                                                    <Link to="/">
                                                        Home
                                                    </Link>
                                                </li>

                                              


                                                <li className="menu-item">
                                                    <Link
                                                        to="/featurebook"
                                                        className="nav-link"
                                                    >
                                                        Library
                                                    </Link>
                                                </li>

                                                <li className="menu-item">
                                                    <Link
                                                        to="/popularbooks"
                                                        className="nav-link"
                                                    >
                                                        Popular
                                                    </Link>
                                                </li>

                                               

                                                

                                                <li className="menu-item">
                                                    <Link
                                                        to="/download"
                                                        className="nav-link"
                                                    >
                                                        Download App
                                                    </Link>
                                                </li>

                                            </ul>


                                            <div className="hamburger">
                                                <span className="bar"></span>
                                                <span className="bar"></span>
                                                <span className="bar"></span>
                                            </div>

                                        </div>

                                    </nav>
                                </div>

                            </div>
                        </div>
                    </header>

                </div>





            </div>
        </>
    );
}

export default PupilHeader