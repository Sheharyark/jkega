import React from 'react';
import Registration from './Pages/Registration/Registration';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Navbar from './Components/Header/Navbar';
import ValidatedLandingPage from './Pages/Landing/ValidatedLandingPage';
import SecureRoute from './Config/SecureRoute';

const Application = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/registration' element={<Registration />} />
          <Route
            path='/landing'
            element={
              <SecureRoute>
                <ValidatedLandingPage />
              </SecureRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Application;
