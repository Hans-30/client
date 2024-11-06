import React from 'react';
import ReactDOM from 'react-dom';
import Root from './App';
import { AuthProvider } from './AuthContext';

ReactDOM.render(
  <AuthProvider>
    <Root />
  </AuthProvider>,
  document.getElementById('root')
);
