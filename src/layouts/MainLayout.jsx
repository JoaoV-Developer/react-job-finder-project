import React from 'react'
import { Outlet } from 'react-router-dom'

import Navbar from '../components/Navbar';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.min.css'

// Creates the layout which will be used in all pages

const MainLayout = () => {
  return (
    <>
        <ToastContainer/>
        <Navbar />
        <Outlet />
    </>
  );
};

export default MainLayout