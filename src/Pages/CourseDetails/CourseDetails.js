import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const abc = useLoaderData();
    console.log(abc);
    return (
        <div>
            <h3 className='text-center'>Course details for {abc.name}</h3>
        </div>
    );
};

export default CourseDetails;