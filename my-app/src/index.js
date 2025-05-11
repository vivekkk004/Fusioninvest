import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Homepage from './Landing_page/home/Homepage';
import Signup from './Landing_page/signup/Signup.jsx';
import Login from './Landing_page/signup/Login.jsx';
import EmailVerify from './Landing_page/signup/EmailVerify.jsx';
import ResetPassword from './Landing_page/signup/ResetPassword.jsx';
import AboutPage from './Landing_page/about/AboutPage';
import ProductPage from './Landing_page/product/ProductPage.js';
import PricingPage from './Landing_page/Pricing/Pricing.js';
import SupportPage from './Landing_page/support/SupportPage';
import Navbar from './Landing_page/Navbar.js';
import Footer from './Landing_page/Footer';
import NotFound from "./Landing_page/NotFound.js";
import { AppContextProvider } from './context/Appcontext.jsx'; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppContextProvider>
        <ToastContainer/>
        <Router>
            <Navbar />
            <Routes>
           
                <Route path="/" element={<Homepage />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/email-verify" element={<EmailVerify />} />
                <Route path="/reset-password" element={<ResetPassword />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/product" element={<ProductPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/support" element={<SupportPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </Router>
    </AppContextProvider>
);

reportWebVitals();
