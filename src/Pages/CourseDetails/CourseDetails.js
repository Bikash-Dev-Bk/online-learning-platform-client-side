import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Pdf from "react-to-pdf";
import "./CourseDetails.css";

const ref = React.createRef();

const CourseDetails = () => {
  const course = useLoaderData();

  return (
      <div className="pdf">
        <Pdf targetRef={ref} filename="code-example.pdf" >
          {({ toPdf }) =>  <Link onClick={toPdf} className="btn">Download</Link>}
        </Pdf>
        
        <div  ref={ref} >
          <div className="course-details-container ">
            <div className="flex items-center justify-center">
              <h3 className=" text-3xl my-6 mr-5">{course.name}</h3>
              
            </div>
            <img className="my-6" src={course.img} alt="" />
            <p className="text-justify my-6">{course.info}</p>
            <Link to={`/courses/${course.id}/checkout`}>
              <button className="btn btn-active btn-primary ">
                Get premium access
              </button>
            </Link>
          </div>
        </div>
      </div>
  );
};

export default CourseDetails;
