import getPersonData from "../../context/getPerson.js";
import {useState} from "react";
import toastify from "../../hooks/toastify.js";
import { useNavigate } from "react-router-dom";

const Client = ({setClient, ClientClose}) => {

     const navigate = useNavigate();

    // get client
    const [seriaClient, setClinetSeria] = useState();
    const [numberClient, setClinetNumber] = useState();
    const [birthdateCLient, setBClientirthdate] = useState();
    // const [phone, setPhone] = useState(+ 9989)


    const reqCleint = async () => {
        let req = await getPersonData(seriaClient, numberClient, birthdateCLient)
        if (await req.req) {
            
            toastify({
                text: "Siznig malumotlaringiz qabul qlindi",
                status: true,
                time: 3000,
            });

            setTimeout(() => {
                localStorage.clear();
                navigate("/")
              }, 3000);
              
        
            setClient({
                firstName: req.firstNameLatin,
                lastName: req.lastNameLatin,
                surName: req.middleNameLatin,
                typeId: 1, // chala
                legalTypeId: 3, // chala
                innNumber: null, // chala
                phone: "+998994288038",
                address: req.address,
                organizationName: `${
                    req.lastNameLatin
                } ${
                    req.firstNameLatin
                } ${
                    req.middleNameLatin
                }`,
                email: "example@example.com",
                pinfl: req.pinfl,
                passportSeries: req.seria,
                passportNumber: req.number,
                passportAuthority: req.issuedBy,
                passportIssueDate: req.startDate.slice(0, 10),
                passportExpirationDate: req.endDate.slice(0, 10),
                birthDate: req.birth,
                gender: req.gender === "1",
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
    }

    return (
        <div>
            <div className="contact-form-style-one onePgaes">
                <div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    value={seriaClient}
                                    id="name"
                                    name="name"
                                    placeholder={seriaClient ? '' : "AA"}
                                    maxLength={3}
                                    onChange={
                                        (e) => setClinetSeria(e.target.value)
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
                                    value={numberClient}
                                    className="form-control"
                                    name="text"
                                    placeholder={numberClient ? '' : "1234567"}
                                    id="number"
                                    maxLength={8}
                                    pattern="[0-9]+"
                                    onInput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
                                    onChange={
                                        (e) => setClinetNumber(e.target.value)
                                    }
                                />
                                <span className="alert-error"/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="form-group">
                                <input
                                    value={birthdateCLient}
                                    type="date"
                                    className="form-control"
                                    placeholder="data"
                                    onChange={
                                        (e) => setBClientirthdate(e.target.value)
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
                                onClick={ClientClose}
                            >
                                <i className="fa-solid fa-arrow-left"/> Ortga qaytish
                            </button>
                            <button type="button" onClick={reqCleint}
                                    className="ms-2">
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

export default Client;