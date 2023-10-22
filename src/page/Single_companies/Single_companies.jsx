import React from 'react'
import "./Single_companies.css"

export default function Single_companies() {
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
                                            <i class="fa-solid fa-house"></i> Home
                                            </a>
                                        </li>
                                        <li className="active">KAFIL SUGURTA</li>
                                    </ol>
                                </nav>
                                <h1>KAFIL SUGURTA</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="project-details-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="project-top-info">
                                <div className="row">
                                    <div className="col-xl-12 pr-50 pr-md-15 pr-xs-15">
                                        <div className="project-thumb">
                                            <img src="assets/img/blog/5.jpg" alt="Thumb" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="project-details-items">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="project-details mt-40">
                                    <h2>"KAFIL-SUG‘URTA" AJ sug‘urta</h2>
                                    <p>
                                    "KAFIL-SUG‘URTA" AJ sug‘urta kompaniyasi 2004- yil 21- maydan boshlab O‘zbekiston Respublikasi Moliya vazirligining litsenziyasi asosida sug‘urtaning barcha 17 ta klassi bo‘yicha ixtiyoriy va majburiy shakllarda xizmat ko‘rsatadi.
              
                                    </p>
                                    <ul className="check-list mb-30">
                                        <li>
                                            <h3>Kompaniya nomi:</h3>
                                            <p>
                                            «KAFIL SUGURTA» Sugʼurta kompaniyasi Masʼuliyati cheklangan jamiyat
                                            </p>
                                        </li>
                                        <li>
                                            <h3>Manzil:</h3>
                                            <p>
                                            100000, Toshkent sh., Mirzo-Ulug‘bek tumani, Mustaqillik shox ko‘chasi 59
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className='col-xl-12'>
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <th scope="row">Kompaniya nomi:</th>
                                            <td>«KAFIL SUGURTA» Sugʼurta kompaniyasi Masʼuliyati cheklangan jamiyat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Manzil:</th>
                                            <td>100000, Toshkent sh., Mirzo-Ulug‘bek tumani, Mustaqillik shox ko‘chasi 59</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Ish tartibi:</th>
                                            <td>Dushanba-Juma 09:00-18:00 (tushlik vaqti 13:00-14:00)</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Аloqa telefoni:</th>
                                            <td><a href="tel:+998712373326" style={{fontWeight: "100"}}>+998 (71) 237-33-26</a></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">Korporativ sayti:</th>
                                            <td><a href="http://www.kafil.uz" style={{fontWeight: "100"}}>kafil.uz</a></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">E-mail:</th>
                                            <td><a href='mailto:info@kafil.uz' style={{fontWeight: "100"}}>info@kafil.uz</a></td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
