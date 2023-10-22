import "./Osago.css"
import {useEffect, useState} from "react";

const Osago = () => {
// const [dataCar, setDataCar] = useState()

    //
    // useEffect(() => {
    //     const storedData = localStorage.getItem('car');
    //     if (storedData) {
    //         setDataCar(storedData);
    //     }
    // }, []);

    console.log(dataCar)

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
                                                <i className="fa-solid fa-house" /> Home
                                            </a>
                                        </li>
                                        <li className="active">OSAGO</li>
                                    </ol>
                                </nav>
                                <h1>Onlayn polis rasmiylashtirish</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="contact-area contact-page bg-gray overflow-hidden default-padding"
                style={{ backgroundImage: "url(assets/img/shape/map.png)" }}
            >
                <div className="shape-right-bottom">
                    <img src="assets/img/shape/18.png" alt="Shape" />
                </div>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-tact-stye-one col-lg-6">
                            <div className="contact-form-style-one">
                                <form
                                    action="assets/mail/contact.php"
                                    method="POST"
                                    className="contact-form contact-form"
                                >
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    id="name"
                                                    name="name"
                                                    placeholder="Mashina raqami"
                                                    type="text"
                                                />
                                                <span className="alert-error" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    id="email"
                                                    name="email"
                                                    placeholder="Tex passport seriasi"
                                                    type="email"
                                                />
                                                <span className="alert-error" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input
                                                    className="form-control"
                                                    id="phone"
                                                    name="phone"
                                                    placeholder="Tex passport raqami"
                                                    type="text"
                                                />
                                                <span className="alert-error" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <button
                                                className="btn-danger"
                                                type="submit"
                                                name="submit"
                                                id="submit"
                                            >
                                                <i className="fa-solid fa-arrow-left" /> Ortga qaytish
                                            </button>
                                            <button type="submit" name="submit" id="submit">
                                                Davom etish <i className="fa-solid fa-arrow-right" />
                                            </button>
                                        </div>
                                    </div>
                                    {/* Alert Message */}
                                    <div className="col-lg-12 alert-notification">
                                        <div id="message" className="alert-msg" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-tact-stye-one col-lg-5 offset-lg-1 mt--80 mt-md-50 mt-xs-50">
                            <div className="contact-style-one-info border rounded p-4">
                                <div className="mb-20">
                                    <h2>Avtomobil ma'lumotlari</h2>
                                </div>
                                <ul className="contact-address">
                                    <li
                                        className="wow fadeInUp"
                                        style={{ visibility: "visible", animationName: "fadeInUp" }}
                                    >
                                        <div className="content">
                                            <p>Mashina raqami:</p>
                                            <h5 className="fw-bold step-title">{dataCar.govNumber}</h5>
                                        </div>
                                    </li>
                                    <li
                                        className="wow fadeInUp"
                                        data-wow-delay="300ms"
                                        style={{
                                            visibility: "visible",
                                            animationDelay: "300ms",
                                            animationName: "fadeInUp"
                                        }}
                                    >
                                        <div className="info">
                                            <p>Tex passport seriasi va raqami:</p>
                                            <h5 className="fw-bold step-title">AAF 4250550</h5>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
};

export default Osago;