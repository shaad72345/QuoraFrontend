import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import { Provider } from "react-redux";
import { Store } from './commonStore/comStore';
import AuthContextProvider from './commonStore/contextapi';
import CustomProviderComp from './CustomProviderComp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CustomProviderComp>
  <ChakraProvider>
    <AuthContextProvider>
    <Provider store={Store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    </AuthContextProvider>
  </ChakraProvider>
  </CustomProviderComp>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
