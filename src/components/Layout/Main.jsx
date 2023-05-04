import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
    return (
        <>
        <Header></Header>
        <Outlet></Outlet>
        <ToastContainer />
        <Footer></Footer>
        </>
    );
};

export default Main;