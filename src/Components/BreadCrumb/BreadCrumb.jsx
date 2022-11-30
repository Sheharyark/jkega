import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import './BreadCrumb.css';

function BreadCrumb() {
  return (
    <div className='breadCrum'>
      <Breadcrumb>
        <Breadcrumb.Item href='#'>Home</Breadcrumb.Item>
        <Breadcrumb.Item href='#'>About</Breadcrumb.Item>
        <Breadcrumb.Item href='#'>Add User</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}

export default BreadCrumb;
//window.location.pathname.split("/")
//window.location.href
