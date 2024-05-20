import React from 'react';
import { ABOUT_URL } from '../utils/constants';

const About = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${ABOUT_URL})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative flex flex-col justify-center items-center h-full">
        <h1 className="text-white text-6xl font-bold">About Us</h1>
        <h3 className='text-white my-2'>This is a dummy food web app.</h3>
      </div>
    </div>
  );
};

export default About;
