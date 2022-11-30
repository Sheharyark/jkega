import React from 'react';
import { useNavigate } from 'react-router-dom';
import BreadCrumb from '../../Components/BreadCrumb/BreadCrumb';
import { useUserAuth } from '../../Context/UserAuthContext';

const ValidatedLandingPage = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <BreadCrumb />
      Welcome User ! {user && user.email}
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default ValidatedLandingPage;
