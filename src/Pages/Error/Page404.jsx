import React from 'react';
import Breadcrumb from '../../components/Breadcrumb';

const Page404 = () => {
  return (
    <>
      <Breadcrumb pageName="404 Page Not Found" />
      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
              <h1 className="display-1 mb-3">404</h1>
              <h2 className="mb-4">Page Not Found</h2>
              <p className="lead mb-4">
                We’re sorry, the page you have looked for does not exist on our website! Maybe go back to our home page or try using the search.
              </p>
              <a className="btn btn-primary rounded-pill py-3 px-5" href="/">Go Back To Home</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page404;
