import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
    const [value, setValue] = useState('Initial Value');

    const updateValue = (newValue) => {
        setValue(newValue);
    };

    return (
        <MyContext.Provider value={{ value, updateValue }}>
            {children}
        </MyContext.Provider>
    );
};