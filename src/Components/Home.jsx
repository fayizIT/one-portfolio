import React from 'react'
import HeroImage from '../assets/heroImage.png'

import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import {Link} from 'react-scroll';

const Home = () => {
  return (
    <div name="Home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <br /><br />
          <h2 className='text-1xl sm:text-7xl font-bold text-white'>I'm Full Stack Web Developer</h2>
          <p className='text-gray-500 py-4 max-w-md text-center'>
            I have had the privilege of undergoing an 8-month training program at Besant Technologies, where my passion for web application development flourished. I thoroughly enjoy working with technologies like React, CSS, and JavaScript to create dynamic and user-friendly interfaces. Additionally, I have gained valuable experience in database management with MySQL. During my training, I focused on frontend development with React, mastering concepts like React Hooks and Context API. Now, as a MERN stack developer, I am eager to further explore backend development with Node.js and build robust RESTful APIs. I strongly believe in the power of continuous learning, and I am dedicated to expanding my skillset to stay at the forefront of the ever-evolving tech landscape. I am excited to showcase my growth and expertise through a portfolio of projects that reflect my dedication to creating meaningful web experiences.
          </p>
          <div className='text-center md:text-left'>
            <Link to="Skill" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex item-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              Skills
              <span className='hover:rotate-90 duration-300'>
                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img src={HeroImage} alt="my profile" className='ro2xl mx-auto w-2/3 md:w-full' />
        </div>
      </div>
    </div>
  )
}

export default Home;
