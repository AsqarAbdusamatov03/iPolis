import getDriver from "../../context/getDraiver.js";
import {useState} from "react";
import toastify from "../../hooks/toastify.js";

const Ovner = ({OvnerClose, ClientOpen, vehilePinfl, SetvehilePinfl,
                setClient, setIsClient, setOwner, setiSCalculate}) => {

    const [Pseria, setPseria] = useState("AA");
    const [Pnumber, setPnumbr] = useState(6194736);


    const req = async () => {

        let req = await getDriver(Pseria, Pnumber, vehilePinfl);

        if (await req.req) {

            toastify({
                text: "Siznig malumotlaringiz togri keldi",
                status: true,
                time: 3000,
            });

            setIsClient(true);
            const firstName = req.driverPersonInfo.firstNameLatin;
            const lastName = req.driverPersonInfo.lastNameLatin;
            const surName = req.driverPersonInfo.middleNameLatin;

            setiSCalculate(true);
            setIsClient(true);
            ClientOpen()
            const owner = {
                firstName,
                lastName,
                surName,
                organizationName: `${lastName} ${firstName} ${surName}`,
                innNumber: null,
                pinfl: vehilePinfl,
                passportSeries: Pseria,
                passportNumber: Pnumber
            };
            setOwner(owner);


            setClient({
                firstName: req.driverPersonInfo.firstNameLatin,
                lastName: req.driverPersonInfo.lastNameLatin,
                surName: req.driverPersonInfo.middleNameLatin,
                typeId: 1, // chala
                legalTypeId: 3, // chala
                innNumber: null, // chala
                phone: "+998994288038",
                address: req.driverPersonInfo.address,
                organizationName: `${
                    req.driverPersonInfo.lastNameLatin
                } ${
                    req.driverPersonInfo.firstNameLatin
                } ${
                    req.driverPersonInfo.middleNameLatin
                }`,
                email: "example@example.com",
                pinfl: req.driverPersonInfo.pinfl,
                passportSeries: Pseria,
                passportNumber: Pnumber,
                passportAuthority: req.driverPersonInfo.issuedBy,
                passportIssueDate: req.driverPersonInfo.startDate.slice(0, 10),
                passportExpirationDate: req.driverPersonInfo.endDate.slice(0, 10),
                birthDate: req.driverPersonInfo.birthDate.slice(0, 10),
                gender: req.driverPersonInfo.gender === "1",
                countryIdForEosgoUz: 210,
                regionIdForEosgoUz: 10,
                districtIdForEosgoUz: 1007,
                residentTypeId: 1,
                mfoCode: null,
                settlementAccount: null,
                activityType: null
            })


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
            <div className="contact-form-style-one">
                <div
                >
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    value={Pseria}
                                    id="name"
                                    name="name"
                                    placeholder="AA"
                                    maxLength={2}
                                    onChange={
                                        (e) => setPseria(e.target.value)
                                    }
                                    type="text"
                                />
                                <span className="alert-error"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 d-none">
                            <div className="form-group">
                                <input
                                    value={vehilePinfl}
                                    className="form-control"
                                    name="text"
                                    placeholder="Pnfil"
                                    id="vehilegobNumber"
                                    maxLength={14}
                                    onChange={
                                        (e) => SetvehilePinfl(e.target.value)
                                    }
                                />
                                <span className="alert-error"/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <input
                                    value={Pnumber}
                                    type="text"
                                    className="form-control"
                                    placeholder="1234567"
                                    maxLength={7}
                                    id="vehileNumber"
                                    pattern="[0-9]+"
                                    onInput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                                    onChange={
                                        (e) => setPnumbr(e.target.value)
                                    }
                                />
                                <span className="alert-error"/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <button
                                className="btn-danger"
                                type="button"
                                onClick={OvnerClose}
                            >
                                <i className="fa-solid fa-arrow-left"/> Ortga qaytish
                            </button>
                            <button type="button" className="ms-2" onClick={req}>
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

export default Ovner;