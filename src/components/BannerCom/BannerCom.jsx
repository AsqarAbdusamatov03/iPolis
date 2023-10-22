
const BannerCom = () => {
    return (
        <>
            {/* Start Banner Area ============================================= */}
            <div
                className="banner-style-three-area overflow-hidden"
                style={{ backgroundImage: "url(assets/img/shape/banner-5.jpg)" }}
            >
                {/* Single Item */}
                <div className="banner-style-three pt-150 pt-md-120 pt-xs-60">
                    <div className="container">
                        <div className="content">
                            <div className="row align-center">
                                <div className="col-xl-6 col-lg-6 pr-50 pr-md-15 pr-xs-15 mt--80 mt-md-0 mt-xs-0">
                                    <div className="information">
                                        <h2
                                            className="wow fadeInUp"
                                            data-wow-delay="500ms"
                                            data-wow-duration="400ms"
                                        >
                                            Onlayn sug‘urta bozori
                                        </h2>
                                        <p
                                            className="wow fadeInUp"
                                            data-wow-delay="900ms"
                                            data-wow-duration="400ms"
                                        >
                                            Qog‘ozbozlik va bosh og‘riqsiz sug‘urta polislarini onlayn
                                            rasmiylashtiring
                                        </p>
                                        <div
                                            className="newsletter-form wow fadeInDown"
                                            data-wow-delay="1200ms"
                                            data-wow-duration="400ms"
                                        >
                                            <form action="#">
                                                <input
                                                    type="text"
                                                    placeholder="Telefon raqamingiz"
                                                    className="form-control"
                                                    name="phone"
                                                />
                                                <button type="submit">Boshlash</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 pl-60 pl-md-15 pl-xs-15">
                                    <div className="thumb">
                                        <img
                                            className="wow fadeInDown"
                                            src="assets/img/illustration/2.png"
                                            alt="Thumb"
                                        />
                                        <img
                                            src="assets/img/illustration/3.png"
                                            alt="Image Not Found"
                                        />
                                        <div className="progress-card">
                                            <div className="icon">
                                                <i className="flaticon-startup-5" />
                                            </div>
                                            <div className="info">
                                                <p>Sug‘urta savdosi</p>
                                                <h4>+79%</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Single Item */}
            </div>
            {/* End Banner */}
        </>

    );
};

export default BannerCom;