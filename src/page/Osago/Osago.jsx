import "./Osago.css"
import AutoVhaile from "../../components/OsagoVhile/AutoVhaile.jsx";
import {Link} from "react-router-dom";
import {useState} from "react";
import Ovner from "../../components/OsagoVhile/Ovner.jsx";
import Client from "../../components/OsagoVhile/Client.jsx";


const Osago = () => {
    const localStorageData = localStorage.getItem('car');
    const dataArray = localStorageData ? JSON.parse(localStorageData) : [];
    const [vehilePinfl, SetvehilePinfl] = useState();

    const [client, setClient] = useState();
    const [owner, setOwner] = useState();
    const [iSCalculate, setiSCalculate] = useState(false);
    const [isClient, setIsClient] = useState(true);

    const [vehicle, setVehicle] = useState()
    const [car, setCar] = useState();

    const OvnerOpen = () =>
    {
        document.getElementById('auto').style.display = 'none';
        // Div none
        document.getElementById('ovner').style.display = 'flex';
        document.getElementById('client').style.display = 'none';
    }
    const OvnerClose = () =>
    {
        document.getElementById('auto').style.display = 'flex';
        // Div none
        document.getElementById('ovner').style.display = 'none';
        document.getElementById('client').style.display = 'none';
    }
    const ClientOpen = () =>
    {
        document.getElementById('auto').style.display = 'none';
        // Div none
        document.getElementById('ovner').style.display = 'none';
        document.getElementById('client').style.display = 'flex';
    }
    const ClientClose = () =>
    {
        document.getElementById('auto').style.display = 'none';
        // Div none
        document.getElementById('ovner').style.display = 'flex';
        document.getElementById('client').style.display = 'none';
    }

    /// write code to validate the email address


    return (
        <>
            <div
                className="breadcrumb-area bg-gray bg-cover"
                style={{backgroundImage: "url(assets/img/shape/banner-3.jpg)"}}
            >
                <div className="container">
                    <div className="breadcrumb-item">
                        <div className="breadcrum-shape">
                            <img src="assets/img/shape/16.png" alt="Image Not Found"/>
                        </div>
                        <div className="row">
                            <div className="col-lg-8">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li>
                                            <Link to={"/"}>
                                                <i className="fa-solid fa-house"/> Home
                                            </Link>
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
                style={{backgroundImage: "url(assets/img/shape/map.png)"}}
            >
                <div className="shape-right-bottom">
                    <img src="assets/img/shape/18.png" alt="Shape"/>
                </div>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-tact-stye-one col-lg-6">

                            <div id="auto">
                                <AutoVhaile
                                    data={dataArray}
                                    OvnerOpen={OvnerOpen}
                                    vehilePinfl={vehilePinfl}
                                    SetvehilePinfl={SetvehilePinfl}
                                    vehilePinfl={vehilePinfl}
                                    SetvehilePinfl={SetvehilePinfl}
                                />
                            </div>
                            <div style={{display: "none"}}  id="ovner">
                                <Ovner
                                    OvnerClose={OvnerClose}
                                    ClientOpen={ClientOpen}
                                    vehilePinfl={vehilePinfl}
                                    SetvehilePinfl={SetvehilePinfl}
                                    setClient={setClient}
                                    setOwner={setOwner}
                                    setiSCalculate={setiSCalculate}
                                    setIsClient={setIsClient}
                                />
                            </div>
                            <div style={{display: "none"}}  id="client">
                                <Client
                                    ClientClose={ClientClose}
                                    setClient={setClient}
                                    data={dataArray}
                                />
                            </div>

                        </div>
                        <div className="col-tact-stye-one col-lg-5 offset-lg-1 mt--80 mt-md-50 mt-xs-50">
                            <div className="contact-style-one-info border rounded p-4">
                                <div className="mb-20">
                                    <h2>Avtomobil malumotlari</h2>
                                </div>
                                <ul className="contact-address">
                                    <li
                                        className="wow fadeInUp"
                                        style={{visibility: "visible", animationName: "fadeInUp"}}
                                    >
                                        <div className="content">
                                            <p>Mashina raqami:</p>
                                            <h5 className="fw-bold step-title">{dataArray.govNumber || "0000000"}</h5>
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
                                            <h5 className="fw-bold step-title">{dataArray.techpassportseria  || "AAA"} {dataArray.techPassportNumber || "000000"}</h5>
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