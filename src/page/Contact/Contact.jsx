import React from 'react'

export default function () {
  return (
    <>
      <div
        className="breadcrumb-area bg-gray bg-cover"
        style={{ backgroundImage: "url(public/assets/img/shape/banner-3.jpg)" }}
      >
        <div className="container">
          <div className="breadcrumb-item">
            <div className="breadcrum-shape">
              <img src="public/assets/img/shape/16.png" alt="Image Not Found" />
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
                    <li className="active">Contact</li>
                  </ol>
                </nav>
                <h1>Siz bilan hamkorlikdan mamnunmiz</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="contact-area contact-page bg-gray overflow-hidden default-padding"
        style={{ backgroundImage: "url(public/assets/img/shape/map.png)" }}
      >
        <div className="shape-right-bottom">
          <img src="public/assets/img/shape/18.png" alt="Shape" />
        </div>
        <div className="container">
          <div className="row align-center">
            <div className="col-tact-stye-one col-lg-6">
              <div className="contact-form-style-one">
                <form
                  action=""
                  method="POST"
                  className="contact-form contact-form"
                >
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="Ismingiz"
                          type="text"
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
                        placeholder="Telefon raqamingiz"
                        type="text"
                      />
                      <span className="alert-error" />
                    </div>
                  </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group comments">
                        <textarea
                          className="form-control"
                          id="comments"
                          name="comments"
                          placeholder="Xabar"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <button type="submit" name="submit" id="submit">
                        <i className="fa fa-paper-plane" /> Yuborish
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
              <div className="contact-style-one-info">
                <div className="mb-40">
                  <h2>Aloqa uchun malumotlar</h2>
                  <p>
                    Biz sizga har doim va har yerda yordam <br /> berish uchun harakatdamiz
                  </p>
                </div>
                <ul className="contact-address">
                  <li
                    className="wow fadeInUp"
                    style={{ visibility: "visible", animationName: "fadeInUp" }}
                  >
                    <div className="content">
                      <h4 className="title">Telefon</h4>
                      <a href="+998935125324">+998 (93) 512 53 24</a>
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
                      <h4 className="title">Manzil</h4>
                      <p>O‘zbekiston, Toshkent shahri, Muqimiy ko'chasi 15A</p>
                    </div>
                  </li>
                  <li
                    className="wow fadeInUp"
                    data-wow-delay="500ms"
                    style={{
                      visibility: "visible",
                      animationDelay: "500ms",
                      animationName: "fadeInUp"
                    }}
                  >
                    <div className="info">
                      <h4 className="title">Elektron pochta</h4>
                      <a href="mailto:info@ipolis.uz">info@ipolis.uz</a>
                    </div>
                  </li>
                  <li
                    className="wow fadeInUp"
                    data-wow-delay="700ms"
                    style={{
                      visibility: "visible",
                      animationDelay: "700ms",
                      animationName: "fadeInUp"
                    }}
                  >
                    <div className="info">
                      <h4 className="title">Follow Us</h4>
                      <ul className="social-link">
                        <li>
                          <a className="facebook" href="#" target="_blank">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li>
                          <a className="twitter" href="#" target="_blank">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li>
                          <a className="pinterest" href="#" target="_blank">
                            <i className="fab fa-pinterest-p" />
                          </a>
                        </li>
                        <li>
                          <a className="linkedin" href="#" target="_blank">
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
