import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div class="banner-container">
      <div className="banner">
        <h2 className="text-3xl mb-4 font-bold p-10">
          Learn computer Science major courses from here!!
        </h2>
        <Link to="/courses">
          <button className="btn btn-active btn-primary ">Get Start</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
