import React from 'react';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';

const About = () => {
  return (
    <div name="About" className='w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg mx-auto px-4 py-8 flex flex-col justify-center'>
        <div className='pb-4'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            About
          </p>
        </div>
        <p className='text-xl mt-5 mb-5'>
          I started learning web development in Jan-2022 and completed Frontend with React Js at Besant Technology Pvt Ltd, where I gained extensive knowledge of frontend and database technologies. Coding has piqued my interest in learning more technologies, and I'm always looking for opportunities to strengthen my web development skills.

          My specialty is front-end web design and development, creating pixel-perfect web pages with beautiful, semantic HTML, CSS, and JavaScript. My interests also extend to branding. I enjoy helping people with branding and design.

          <br />
        </p>

        <div className='pb-4'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            Education
          </p>
        </div>
        <p>
          I completed my BSc in computer science in 2020, and I have 1.2 years of experience in technical support at Aabasoft Pvt Ltd in Kakkanad. In this role, I focused on network troubleshooting and resolving packet loss issues.

          This online portfolio is a testament to my knowledge and skills in web development.
        </p>

        <div>
          <Link to="Contact" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
            Know more
            <span className='hover:rotate-90 duration-300'>
              <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
