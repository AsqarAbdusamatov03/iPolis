// import {useNavigate} from "react-router-dom";
import { useState} from "react";
import getVehile from "../../context/getVehile.js";
import toastify from "../../hooks/toastify.js";

const AutoVhaile = ({OvnerOpen, data, SetvehilePinfl, vehilePinfl}) => {

    // const navigate = useNavigate();

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

    // console.log(vehicle, car ,vehilePinfl)


    const [govNumber, setGovNumber] = useState("");  /// 01M717KA
    const [techpassportseria, setSeria] = useState("");  ///   AAF
    const [techPassportNumber, setNumber] = useState(""); /// 4250550



    const getVehicle = async () => {
        let req = await getVehile(govNumber, techpassportseria, techPassportNumber);
        if (await req.req) {
            // navigate("/osago")

            OvnerOpen()
            toastify({
                text: "Siznig malumotlaringiz togri keldi",
                status: true,
                time: 3000,
            });

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
            toastify({
                text: "Malumotni qayta tekshrib ko'ring",
                status: false,
                time: 4000,
            });
        }
    };


    return (
        <div>
            <div className="contact-form-style-one onePgaes">
                <div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    value={govNumber}
                                    id="name"
                                    name="name"
                                    placeholder="01A111AB"
                                    maxLength={8}
                                    onChange={
                                        (e) => setGovNumber(e.target.value)
                                    }
                                    type="text"
                                />
                                <span className="alert-error"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="form-group">
                                <input
                                    value={techpassportseria}
                                    className="form-control"
                                    name="text"
                                    placeholder="AAF"
                                    id="vehilegobNumber"
                                    maxLength={8}
                                    onChange={
                                        (e) => setSeria(e.target.value)
                                    }
                                />
                                <span className="alert-error"/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <input
                                    value={techPassportNumber}
                                    type="text"
                                    className="form-control"
                                    placeholder="1234567"
                                    maxLength={7}
                                   id="number"
                                    pattern="[0-9]+"
                                    onInput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                                    onChange={
                                        (e) => setNumber(e.target.value)
                                    }
                                />
                                <span className="alert-error"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <button type="button"  onClick={getVehicle}
                                className="ms-0">
                                Davom etish <i className="fa-solid fa-arrow-right"/>
                            </button>
                        </div>
                    </div>
                    {/* Alert Message */}
                    <div className="col-lg-12 alert-notification">
                        <div id="message" className="alert-msg"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AutoVhaile;