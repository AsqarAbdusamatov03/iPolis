import {createContext, useState} from 'react';


const Context = createContext();

const ContextProvider = ({children}) => {

    // const localStorageData = localStorage.getItem('car');
    const [vehilePinfl, SetvehilePinfl] = useState();

    const [client, setClient] = useState();
    const [owner, setOwner] = useState();
    const [iSCalculate, setiSCalculate] = useState(false);
    const [isClient, setIsClient] = useState(true);

    const [vehicle, setVehicle] = useState()
    const [car, setCar] = useState();


    return (
        <Context.Provider
            value={{
                vehilePinfl,
                SetvehilePinfl,
                client,
                setClient,
                owner,
                setOwner,
                iSCalculate,
                setiSCalculate,
                isClient,
                setIsClient,
                vehicle,
                setVehicle,
                car,
                setCar
            }}
        >
            {children}
        </Context.Provider>
    );
};

export {Context, ContextProvider};
