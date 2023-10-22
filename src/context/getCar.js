import axios from "axios";


const getCar = async (govNumber, techpassportseria, techPassportNumber) =>{

    try {
        const response = await axios.get(`${import.meta.env.VITE_REACT_APP_IPOLIS_ENDPOINT}/eosgouz/provider/vehicle`, {
            auth: {
                username: import.meta.env.VITE_REACT_APP_IPOLIS_USERNAME,
                password: import.meta.env.VITE_REACT_APP_IPOLIS_PASSWORD
            },
            params: {
                govNumber: govNumber,
                techPassportSeria: techpassportseria,
                techPassportNumber: techPassportNumber
            }
        });
        return {req: true, ...response.data.operationResult.vehicle}
    } catch (error) {
        return {req: false, ...error}
        //   throw new Error(error);
    }

}

export default getCar;