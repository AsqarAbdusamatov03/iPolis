import React from 'react'
import "./Services.css";
import {Link} from "react-router-dom";

export default function Services() {
    return (
        <>
            <div className="services-style-two-area bg-gray default-padding bottom-less">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 mb-30">
                            <div
                                className="service-style-two-heading bg-theme bg-cover text-light"
                                style={{ backgroundImage: "url(assets/img/shape/banner-3.webp)" }}
                            >
                                <h5 className="sub-title">Xizmatlar</h5>
                                <h2 className="title">Eng ko'p foydalanilgan xizmatlar</h2>
                                <div className="button-border-length mt-35">
                                    <Link to={"/insurance-companies"} className="btn-arrow-length">
                                        See All
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* Start Single Item */}
                        <div className="col-xl-3 col-lg-6 col-md-6 mb-30">
                            <div className="service-style-two">
                                <div className="icon">
                                    <img src="assets/img/icon/4.png" alt="Image Not Found" />
                                </div>
                                <p>Comparison new entertain melancholy son themselves.</p>
                                <h4>
                                    <a href="services-details.html.htm">OSAGO</a>
                                </h4>
                                <a href="services-details.html.htm" className="icon-btn">
                                    <i className="fas fa-arrow-right" />
                                </a>
                                <div className="shape">
                                    <img src="assets/img/shape/15.webp" alt="Image Not Found" />
                                </div>
                            </div>
                        </div>
                        {/* End Single Item */}
                        {/* Start Single Item */}
                        <div className="col-xl-3 col-lg-6 col-md-6 mb-30">
                            <div className="service-style-two">
                                <div className="icon">
                                    <img src="assets/img/icon/5.png" alt="Image Not Found" />
                                </div>
                                <p>Comparison new entertain melancholy son themselves.</p>
                                <h4>
                                    <a href="services-details.html.htm">KASKO</a>
                                </h4>
                                <a href="services-details.html.htm" className="icon-btn">
                                    <i className="fas fa-arrow-right" />
                                </a>
                                <div className="shape">
                                    <img src="assets/img/shape/15.webp" alt="Image Not Found" />
                                </div>
                            </div>
                        </div>
                        {/* End Single Item */}
                        {/* Start Single Item */}
                        <div className="col-xl-3 col-lg-6 col-md-6 mb-30">
                            <div className="service-style-two">
                                <div className="icon">
                                    <img src="assets/img/icon/6.png" alt="Image Not Found" />
                                </div>
                                <p>Comparison new entertain melancholy son themselves.</p>
                                <h4>
                                    <a href="services-details.html.htm">TRAVEL</a>
                                </h4>
                                <a href="services-details.html.htm" className="icon-btn">
                                    <i className="fas fa-arrow-right" />
                                </a>
                                <div className="shape">
                                    <img src="assets/img/shape/15.webp" alt="Image Not Found" />
                                </div>
                            </div>
                        </div>
                        {/* End Single Item */}
                        {/* Start Single Item */}
                        <div className="col-xl-3 col-lg-6 col-md-6 mb-30">
                            <div className="service-style-two">
                                <div className="icon">
                                    <img src="assets/img/icon/7.png" alt="Image Not Found" />
                                </div>
                                <p>Comparison new entertain melancholy son themselves.</p>
                                <h4>
                                    <a href="services-details.html.htm">BAXTSIZ HODISA</a>
                                </h4>
                                <span>Optimized</span>
                                <a href="services-details.html.htm" className="icon-btn">
                                    <i className="fas fa-arrow-right" />
                                </a>
                                <div className="shape">
                                    <img src="assets/img/shape/15.webp" alt="Image Not Found" />
                                </div>
                            </div>
                        </div>
                        {/* End Single Item */}
                       
                    </div>
                </div>
            </div>

        </>
    )
}
