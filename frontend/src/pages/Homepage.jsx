import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

import VideoWrapper from '../components/VideoWrapper';
import HomePageVideo from "../assets/video/HomePageVideo.mp4"
import astronautImage from '../assets/images/astronaut.png';
const Homepage = () => {
  const navigate = useNavigate();


  const handleExplore = (path) => {
    navigate(path);
  };

  return(
    <>
      <VideoWrapper url ={HomePageVideo}>

      <div className="text-center">
      <h1 className="text-6xl font-bold text-white mt-3 mb-0">NASAVERSE</h1>
      {/* <p className="text-sm text-white px-4 mb-10">A MULTISENSORY EXPLORATION</p> */}
      <div className="max-w-lg mx-auto p-4  bg-opacity-30 rounded-lg">
            <p className="text-white text-lg leading-relaxed text-center">
              Welcome to NASAVERSE, a captivating journey through the realms of space exploration.
            </p>
          </div>
   </div>
   <div className="flex justify-center mt-0">
          <img
            src={astronautImage}
            alt="Astronaut"
            className="mx-auto"
            style={{ maxWidth: "300px" }}
          />
        </div>

    <div className="flex justify-center mt-4">
    <button

onClick={() => handleExplore("/Selection")}

            type="button"
            className="text-white font-medium text-lg px-5 py-2.5 rounded-full bg-black bg-opacity-10 border border-white rounded-full  hover:bg-opacity-40 focus:outline-none focus:ring-4 focus:ring-white"
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            Explore the NASAVERSE
          </button>
        </div>


        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mx-10 mt-64'>
          <div className='bg-gradient-to-r from-white border rounded-lg shadow-lg p-4 mx-10'>
            <h2 className='text-xl font-semibold mb-2'>Mars Rover Photos</h2>
            <p className='text-gray-700 mb-4'>
              Explore the latest photos captured by Mars rovers.
            </p>
            <button
              // onClick={() => handleExplore("/mars")}
              className='bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500'
            >
              Explore
            </button>
          </div>

          <div className='bg-gradient-to-r from-white border rounded-lg shadow-lg p-4 mx-10'>
            <h2 className='text-xl  font-semibold mb-2'>APOD</h2>
            <p className='text-gray-700 mb-4'>
              Discover the Astronomy Picture of the Day.
            </p>
            <button
              // onClick={() => handleExplore("/apod")}
              className='bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500'
            >
              Explore
            </button>
          </div>
          <div className='bg-gradient-to-r from-white border rounded-lg shadow-lg p-4 mx-10'>
            <h2 className='text-xl font-semibold mb-2'>Earth</h2>
            <p className='text-gray-700 mb-4'>
              Unlock the beauty of our planet with satellite imagery.
            </p>
            <button
              // onClick={() => handleExplore("/earth")}
              className='bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500'
            >
              Explore
            </button>
          </div>
        </div>
      </VideoWrapper>
    </>
  )

};

export default Homepage;
