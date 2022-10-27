import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./CourseDetails.css";

const CourseDetails = () => {
  const course = useLoaderData();
  console.log(course);
  return (
    <div className="">
      <div className="navbar bg-gray-700  px-4">
        <div className="navbar-start">
        <h3 className="text-2xl">{course.name}</h3>
        </div>
        <div className="navbar-end">
          <Link className="btn">Download</Link>
        </div>
      </div>
      
      <div className="course-details-container ">
        <h3 className="text-center text-3xl my-6">
          Course details for {course.name}
        </h3>
        <img className="my-6" src={course.img} alt="" />
        <p className="text-justify my-6">{course.info}</p>
        <button className="btn btn-active btn-primary ">
          Get premium access
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;
