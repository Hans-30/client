// src/ApplicantContext.js

import React, { createContext, useState } from 'react';

export const ApplicantContext = createContext();

export const ApplicantProvider = ({ children }) => {
    const [applicantData, setApplicantData] = useState({});

    return (
        <ApplicantContext.Provider value={{ applicantData, setApplicantData }}>
            {children}
        </ApplicantContext.Provider>
    );
};
