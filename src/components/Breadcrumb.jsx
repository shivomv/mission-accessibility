import React from 'react';
import { NavLink } from 'react-router-dom';

const Breadcrumb = ({ pageName }) => {
  return (
    <div className="container-xxl py-5 page-header position-relative mb-5">
      <div className="container py-5">
        <h1 className="display-2 text-white animated slideInDown mb-4">{pageName}</h1>
        <nav aria-label="breadcrumb animated slideInDown">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><NavLink to="/home">Home</NavLink></li>
            <li className="breadcrumb-item text-white active" aria-current="page">{pageName}</li>
          </ol>
        </nav>
      </div>
    </div>
  );
}

export default Breadcrumb;
