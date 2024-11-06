// src/ExampleComponent.js

import React from 'react';
import { useAppContext } from './AppContext';

const ExampleComponent = () => {
    const { appData, updateUser, addDocument } = useAppContext();

    const handleUserUpdate = (newUser) => {
        updateUser(newUser);
    };

    const handleAddDocument = (document) => {
        addDocument(document);
    };

    return (
        <div>
            <h1>User: {appData.user ? appData.user.name : 'No user logged in'}</h1>
            {/* Add your component logic here */}
        </div>
    );
};

export default ExampleComponent;
