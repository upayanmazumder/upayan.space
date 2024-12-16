import React from "react";
import { BsEmojiFrownFill } from "react-icons/bs";

const NotFoundPage = () => {
  return (
    <div>
      <div>
        <h1>404 - Page Not Found</h1>
        <div>
          <BsEmojiFrownFill />
        </div>
        <div>
          <p>Sorry, the page you are looking for does not exist.</p>
          <p>Please check the URL or return to the homepage.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;