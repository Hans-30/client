// src/AppContext.js

import React, { createContext, useContext, useState } from 'react';

// Create the AppContext
const AppContext = createContext();

// Create a custom hook to use the AppContext
export const useAppContext = () => {
    return useContext(AppContext);
};

// Create a provider component
export const AppProvider = ({ children }) => {
    const [appData, setAppData] = useState({
        user: null, // User information
        documents: [], // Array to hold uploaded documents
        // Add other states as needed
    });

    const updateUser = (user) => {
        setAppData((prevData) => ({ ...prevData, user }));
    };

    const addDocument = (document) => {
        setAppData((prevData) => ({ ...prevData, documents: [...prevData.documents, document] }));
    };

    const value = {
        appData,
        updateUser,
        addDocument,
        // Add other functions as needed
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
