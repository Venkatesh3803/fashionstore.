import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux"
import  store  from "./redux/store"
import "./index.css"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <ToastContainer/>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
