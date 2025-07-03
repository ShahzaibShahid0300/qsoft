import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const NotFound = () => (
  <div className="py-20 text-center">
    <Helmet>
      <title>404 Not Found | QSoft</title>
      <meta name="robots" content="noindex" />
    </Helmet>
    <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
    <p className="mt-4 text-gray-600">Sorry, the page you are looking for does not exist.</p>
    <Link to="/" className="inline-block mt-6 px-6 py-3 bg-[#00aeef] text-white rounded font-semibold">
      Go to Home
    </Link>
  </div>
);

export default NotFound;
