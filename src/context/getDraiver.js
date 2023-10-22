import axios from "axios";

const getDriver = async (seria, number, pinfl) =>{
    console.log(seria, number, pinfl)
    try {
        const response = await axios.get(`${import.meta.env.VITE_REACT_APP_IPOLIS_ENDPOINT}/eosgouz/provider/driversummary`, {
            auth: {
                username: import.meta.env.VITE_REACT_APP_IPOLIS_USERNAME,
                password: import.meta.env.VITE_REACT_APP_IPOLIS_PASSWORD
            },
            params: {
                pinfl: pinfl,
                passportSeries: seria,
                passportNumber: number
            }
        });
        console.log(response)
        console.log(response.data.operationResult.driverSummary)
        return {req: true, seria, number, birth: pinfl, ...response.data.operationResult.driverSummary}
    } catch (error) {

        return {req: false, ...error}
        //   throw new Error(error);
    }
}

export default getDriver;