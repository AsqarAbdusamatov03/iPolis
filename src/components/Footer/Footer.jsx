import React from 'react'

export default function Footer() {
  return (
    <>
       
  {/* Start Footer 
    ============================================= */}
  <footer
    className="bg-dark text-light"
    style={{ backgroundImage: "url(assets/img/shape/5.png)" }}
  >
    <div className="container">
      <div className="f-items default-padding-bottom pt-70 pt-xs-0">
        <div className="row">
          {/* Singel Item */}
          <div className="col-lg-3 col-md-6 footer-item mt-50">
            <div className="footer-animated-shape">
              <img src="assets/img/shape/6.png" alt="Image Not Found" />
            </div>
            <div className="f-item about pr-50 pr-xs-0 pr-md-0">
              <img
                className="logo"
                src="assets/img/logo-white.png"
                alt="Logo"
              />
              <p>
                Qog‘ozbozliklarsiz va bosh og‘riqlarsiz polislarni onlayn
                rasmiylashtiring
              </p>
              <div className="footer-social mt-30">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-linkedin-in" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* End Singel Item */}
          {/* Singel Item */}
          <div className="col-lg-3 col-md-6 mt-50 footer-item pl-50 pl-md-15 pl-xs-15">
            <div className="f-item link">
              <h4 className="widget-title">XIZMATLAR</h4>
              <ul>
                <li>
                  <a href="#">OSAGO</a>
                </li>
                <li>
                  <a href="#">KASKO</a>
                </li>
                <li>
                  <a href="#">SAYOHAT</a>
                </li>
                <li>
                  <a href="#">BAXTSIZ HODISA</a>
                </li>
              </ul>
            </div>
          </div>
          {/* End Singel Item */}
          {/* Singel Item */}
          <div className="col-lg-3 col-md-6 footer-item  mt-50">
            <div className="f-item contact">
              <h4 className="widget-title">Aloqa uchun</h4>
              <ul>
                <li>
                  <div className="content">
                    <strong>Manzil:</strong>
                    O‘zbekiston, Toshkent shahri, Muqimiy ko'chasi 15A
                  </div>
                </li>
                <li>
                  <div className="content">
                    <strong>Email:</strong>
                    <a href="mailto:info@ipolis.uz">info@ipolis.uz</a>
                  </div>
                </li>
                <li>
                  <div className="content">
                    <strong>Phone:</strong>
                    <a href="tel:+998935125324">+998 (93) 512 53 24</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* End Singel Item */}
          {/* Singel Item */}
          <div className="col-lg-3 col-md-6 footer-item mt-50">
            <div className="f-item newsletter">
              <h4 className="widget-title">Xabar yo‘llang</h4>
              <p>
                O'zingizni qiziqtirgan savol va takliflaringiz bo'lsa telefon
                raqamingizni qoldiring. Biz sizga tez orada aloqaga chiqamiz
              </p>
              <form action="#">
                <input
                  type="text"
                  placeholder="Telefon raqamingiz"
                  className="form-control"
                  name="phone"
                />
                <button type="submit">
                  <i className="fas fa-arrow-right" />
                </button>
              </form>
            </div>
          </div>
          {/* End Singel Item */}
        </div>
      </div>
    </div>
    {/* Footer Bottom */}
    <div className="footer-bottom bg-dark text-light text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p>
              Copyright © 2023 <a href="https://dora.uz">DORA</a>. Barcha
              huquqlar himoyalanadi
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* End Footer Bottom */}
  </footer>
  {/* End Footer */}
  {/* jQuery Frameworks
    ============================================= */}

    </>
  )
}
