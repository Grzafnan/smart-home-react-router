import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about-wrapper">
      <div className="about-container">
        <h1 className="about-title">
          Help Center
        </h1>
        <div className="relative mt-6 mb-12">
          <span className="absolute inset-y-0 flex items-center pl-2 mx-auto">
            <button
              type="submit"
              title="Search"
              className="p-1 focus:outline-none focus:ring"
            >
              <svg
                fill="currentColor"
                viewBox="0 0 512 512"
                className="w-4 h-4 text-gray-900"
              >
                <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
              </svg>
            </button>
          </span>
          <input
            type="search"
            name="Search"
            placeholder="Search..."
            className="about-search-input"
          />
        </div>
        <div className="about-link-wrapper">
          <div className="flex flex-col w-full divide-y divide-gray-700">
            <Link
              to="/support"
              className="about-link"
            >
              Billing
            </Link>
            <Link
              to="/support"
              className="about-link"
            >
              Support
            </Link>
            <Link
              to="/support"
              className="about-link"
            >
              Account
            </Link>
          </div>
          <div className="flex flex-col w-full divide-y divide-gray-700">
            <Link
              to="/support"
              className="about-link"
            >
              Features
            </Link>
            <Link
              to="/support"
              className="about-link"
            >
              Contact us
            </Link>
            <Link
              to="/support"
              className="about-link"
            >
              My orders
            </Link>
          </div>
          <div className="hidden w-full divide-y sm:flex-col sm:flex divide-gray-700">
            <Link
              to="/support"
              className="about-link"
            >
              Enterprise
            </Link>
            <Link
              to="/support"
              className="about-link"
            >
              Privacy
            </Link>
            <Link
              to="/support"
              className="about-link"
            >
              Developers
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
