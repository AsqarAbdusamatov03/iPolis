import React from 'react'
import "./Companies.css"
import { Link } from 'react-router-dom'

export default function Companies() {
    return (
        <>
            <div
                className="breadcrumb-area bg-gray bg-cover"
                style={{ backgroundImage: "url(assets/img/shape/banner-3.jpg)" }}
            >
                <div className="container">
                    <div className="breadcrumb-item">
                        <div className="breadcrum-shape">
                            <img src="assets/img/shape/16.png" alt="Image Not Found" />
                        </div>
                        <div className="row">
                            <div className="col-lg-8">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li>
                                            <a href="#">
                                                <i className="fas fa-home" /> Home
                                            </a>
                                        </li>
                                        <li className="active">Sugurta kompaniyalar</li>
                                    </ol>
                                </nav>
                                <h1>Sugurta kompaniyalar</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="blog-area blog-grid-colum default-padding">
                <div className="container">
                    <div className="row">
                        {/* Single Item */}
                        <div className="col-lg-4 col-md-6 mb-50">
                            <div className="blog-style-one">
                                <div className="thumb">
                                    <a href="">
                                        <img src="assets/img/blog/5.jpg" alt="Image Not Found" />
                                    </a>
                                </div>
                                <div className="info">
                                    <h3 className="post-title">
                                        
                                        <Link to={'/single-company'}>
                                            Kafil Sug‘urta 
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
