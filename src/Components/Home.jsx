import React from 'react';
import HeroImage from '../assets/heroImage.png';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="Home" className='w-full bg-gradient-to-b from-black via-black to-gray-800 text-white'>
      <div className='max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center px-4'>
        <div className='flex flex-col justify-center md:w-1/2'>
          <h2 style={{ marginTop: '100px' }} className='text-2xl sm:text-7xl font-bold text-white mb-4 text-center md:text-left'>
            I'm Full Stack Web Developer
          </h2>
          <p className='text-gray-500 py-4 max-w-md text-center md:text-left '>
          I Working on Canary digital. Aias a MERN Full Stack developer, accumulating 1 year of industrial experience. My proficiency spans REST APIs, NoSQL databases, Node.js, React.js, and more. With a robust foundation in software development, I excel in collaborative team environments, demonstrating strong technical skills. I am adept at multitasking and time management. Additionally, I have hands-on experience in database management, particularly with PostgreSQL.

During my training, andI focused on frontend development using React, mastering key concepts such as React Hooks and Context API. As a MERN stack developer, I am eager to further explore backend development with Node.js, aiming to build robust RESTful APIs. My commitment to continuous learning drives me to stay updated with the ever-evolving tech landscape. I look forward to showcasing my growth and expertise through a portfolio of projects that reflect my dedication to creating meaningful web experiences.
          </p>
          <div className='text-center md:text-left'>
            <Link to="Skill" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              Skills
              <span className='hover:rotate-90 duration-300'>
                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
              </span>
            </Link>
          </div>
        </div>
        <div className='md:w-1/2'>
          <img src={HeroImage} alt="my profile" className='w-full md:w-2/3 mx-auto' />
        </div>
      </div>
    </div>
  );
};

export default Home;
