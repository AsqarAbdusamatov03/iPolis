import "./Banner.css"
import {useState} from "react";
import getVehile from "../../context/getVehile.js";
import {useNavigate, } from "react-router-dom";

const BannerCom = () => {

    // const [button, setButton] = useState(true)

    const navigate = useNavigate();

    // Osago box function
    function btnOsago() {
        // Div block
        document.getElementById('box-osago').style.display = 'flex';

        // Div none
        document.getElementById('box-kasko').style.display = 'none';
        document.getElementById('box-travel').style.display = 'none';

        // Toggle Class Btn
        document.getElementById('btn-osago').classList.add('active-toggle--btn');
        document.getElementById('btn-kasko').classList.remove('active-toggle--btn');
        document.getElementById('btn-travel').classList.remove('active-toggle--btn');
    }
    // Kasko box function
    function btnKasko() {
        // Div block
        document.getElementById('box-kasko').style.display = 'flex';
        // Div none
        document.getElementById('box-osago').style.display = 'none';
        document.getElementById('box-travel').style.display = 'none';

        // Toggle Class Btn
        document.getElementById('btn-osago').classList.remove('active-toggle--btn');
        document.getElementById('btn-kasko').classList.add('active-toggle--btn');
        document.getElementById('btn-travel').classList.remove('active-toggle--btn');
    }
    // Travel box function
    function btnTravel() {
        // Div block
        document.getElementById('box-travel').style.display = 'flex';
        // Div none
        document.getElementById('box-osago').style.display = 'none';
        document.getElementById('box-kasko').style.display = 'none';

        // Toggle Class Btn
        document.getElementById('btn-osago').classList.remove('active-toggle--btn');
        document.getElementById('btn-kasko').classList.remove('active-toggle--btn');
        document.getElementById('btn-travel').classList.add('active-toggle--btn');
    }

    const regionsIDForEosgouz = {
        "01": 10,
        "10": 11,
        "20": 12,
        "25": 13,
        "30": 14,
        "40": 15,
        "50": 16,
        "60": 17,
        "70": 18,
        "75": 19,
        "80": 20,
        "85": 21,
        "90": 22,
        "95": 23,
    };


    const [vehicle, setVehicle] = useState()
    const [car, setCar] = useState();
    const [vehilePinfl, SetvehilePinfl] = useState();


    const [govNumber, setGovNumber] = useState("01M717KA");  /// 01M717KA
    const [techpassportseria, setSeria] = useState("AAF");  ///   AAF
    const [techPassportNumber, setNumber] = useState("4250550"); /// 4250550


    const getVehicle = async () => {
        let req = await getVehile(govNumber, techpassportseria, techPassportNumber);
        if (await req.req) {
            navigate("/osago")
            SetvehilePinfl(req.pinfl);
            setCar(await req);
            localStorage.setItem("car", JSON.stringify({
                ... req,
                govNumber,
                techpassportseria,
                techPassportNumber
            }));
            setVehicle(  {
                brand: req.modelName,
                model: req.modelName,
                engineNumber: req.engineNumber,
                insurancePeriodIdForEosgoUz: 1,
                typeIdForEosgoUz: req.vehicleTypeId,  // Bu avtomobil turi; shuni calculatorga olib o'tish kerak, car_type ga berib yuborish kerak, if ishlatib, 243 qatordagi if ni olib ishlaish kerak!
                manufacturedYear: req.issueYear,
                stateRegistrationNumber: req.govNumber,
                bodyNumber: req.bodyNumber,
                passportSeries: techpassportseria,
                passportNumber: techPassportNumber,
                passportIssueDate: req.techPassportIssueDate.slice(0, 10), // API dan kelgan malumotni chiqarish kerak20-11-2002
                discountTypeIdForEosgoUz: "1",
                registeredPlaceIdForEosgoUz: "1",
                regionIdForEosgoUz: regionsIDForEosgouz[req.govNumber.substr(0,2)],  // Hato (To'g'ri qo'yish kerak)
                pinfl : req.pinfl,
                inn: req.inn
            },)


        } else {
            alert("Ma'lumot topilmadi!");
        }
    };


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
                                        <div className="newsletter-form wow fadeInDown mt-4" data-wow-delay="1200ms" data-wow-duration="400ms">
                                            <div className="d-flex gap-4">
                                                <button id="btn-osago" className="small-btn active-toggle--btn" onClick={btnOsago}>OSAGO</button>
                                                <button id="btn-kasko" className="small-btn" onClick={btnKasko}>KASKO</button>
                                                <button id="btn-travel" className="small-btn" onClick={btnTravel}>TRAVEL</button>
                                            </div>

                                            {/* ====================== OSAGO Section ====================== */}
                                            <div id="box-osago" className="mt-3 bg-white rounded p-3 row">
                                                <div className="col-sm-12 col-lg-4">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="01A111AB"
                                                        maxLength={8}
                                                        onChange={
                                                            (e) => setSeria(e.target.value)
                                                        }
                                                    />
                                                </div>
                                                <div className="col-sm-12 col-lg-2">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="AAF"
                                                        id="vehilegobNumber"
                                                        maxLength={8}
                                                        onChange={
                                                            (e) => setGovNumber(e.target.value)
                                                        }
                                                    />
                                                </div>
                                                <div className="col-sm-12 col-lg-4">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="1234567"
                                                        maxLength={7}
                                                        id="vehileNumber"
                                                        pattern="[0-9]+"
                                                        onInput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                                                        onChange={
                                                            (e) => setNumber(e.target.value)
                                                        }
                                                    />
                                                </div>
                                                <div className="col-sm-12 col-lg-2">
                                                    <button onClick={getVehicle} style={{padding: "11px 30px"}}><i className="fa-solid fa-right-long"></i></button>
                                                </div>
                                            </div>
                                            {/* ======================  OSAGO Section ====================== */}

                                            {/* ====================== KASKO Section ====================== */}
                                            <div id="box-kasko" className="mt-3 bg-white rounded p-3 row position-relative overly-div" style={{display: "none"}}>
                                                <span className="btn-warning comming-soon--span text-white rounded">Tez Kunda</span>
                                                <div className="col-sm-12 col-lg-5">
                                                    <select className="form-control" name="brand" id="">
                                                        <option aria-checked>Marka, model va komple...</option>
                                                        <option value="Chevrolet">Chevrolet</option>
                                                        <option value="Tayota">Tayota</option>
                                                        <option value="BYD">BYD</option>
                                                    </select>
                                                </div>
                                                <div className="col-sm-12 col-lg-5">
                                                    <select className="form-control" name="year" id="">
                                                        <option aria-checked>Yilni tanlang</option>
                                                        <option value="2020">2020</option>
                                                        <option value="2021">2021</option>
                                                        <option value="2022">2022</option>
                                                        <option value="2023">2023</option>
                                                    </select>
                                                </div>
                                                <div className="col-sm-12 col-lg-2">
                                                    <button style={{padding: "11px 30px"}}><i className="fa-solid fa-right-long"></i></button>
                                                </div>
                                            </div>
                                            {/* ====================== / KASKO Section ====================== */}

                                            {/* ====================== TRAVEL Section ====================== */}
                                            <div id="box-travel" className="mt-3 bg-white rounded p-3 row position-relative overly-div" style={{display: "none"}}>
                                                <span className="btn-warning comming-soon--span text-white rounded">Tez Kunda</span>
                                                <div className="col-sm-12 col-lg-5">
                                                    <select className="form-control" name="" id="">
                                                        <option aria-checked>Davlatni tanlang</option>
                                                        <option value="Amerika">Amerika</option>
                                                        <option value="Dubay">Dubay</option>
                                                        <option value="Turkiya">Turkiya</option>
                                                    </select>
                                                </div>
                                                <div className="col-sm-12 col-lg-5">
                                                    <select className="form-control" name="" id="">
                                                        <option aria-checked>Maqsad</option>
                                                        <option value="Sayohat">Sayohat</option>
                                                        <option value="Chet elda ta'lim">Chet elda tali</option>
                                                        <option value="Sport (aktiv dam olish)">Sport (aktiv dam olish)</option>
                                                        <option value="Og'ir mehnat">gzip mehnat</option>
                                                    </select>
                                                </div>
                                                <div className="col-sm-12 col-lg-2">
                                                    <button style={{padding: "11px 30px"}}><i className="fa-solid fa-right-long"></i></button>
                                                </div>
                                            </div>
                                            {/* ====================== / TRAVEL Section ====================== */}

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