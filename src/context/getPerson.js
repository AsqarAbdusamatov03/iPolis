import axios from "axios";

const getPersonData = async (seria, number, birthDate) =>{
    console.log(seria, number, birthDate)
    try {

        const response = await axios.get(`${import.meta.env.VITE_REACT_APP_IPOLIS_ENDPOINT}/eosgouz/provider/birthdate`, {
            auth: {
                username: import.meta.env.VITE_REACT_APP_IPOLIS_USERNAME,
                password: import.meta.env.VITE_REACT_APP_IPOLIS_PASSWORD
            },
            params: {
                birthdate: birthDate,
                passportSeries: seria,
                passportNumber: number
            }
        });
        console.log(import.meta.env.VITE_REACT_APP_IPOLIS_ENDPOINT)
        console.log(response.data.operationResult)
        return {req: true, seria, number, birth: birthDate, ...response.data.operationResult.person}
    } catch (error) {

        return {req: false, ...error}
        //   throw new Error(error);
    }
}

export default getPersonData;