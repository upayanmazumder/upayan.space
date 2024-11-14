import React from "react";
import { BsEmojiFrownFill } from "react-icons/bs";
import "./404.module.css";

const NotFoundPage = () => {
  return (
    <div className="container container-center">
      <div className="card">
        <h1>404 - Page Not Found</h1>
        <div className="icon">
          <BsEmojiFrownFill />
        </div>
        <div className="container">
          <p>Sorry, the page you are looking for does not exist.</p>
          <p>Please check the URL or return to the homepage.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
