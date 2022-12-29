import React from 'react'
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import {Link} from 'react-scroll';

const About = () => {
  return (
    <div name="About" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg pg-4 mx-auto flex flex-col justify-center w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-grey-500'>
                    About
                </p>
            </div>
            <p className='text-xl mt-5'>
            I have starting to Learn  in web development from Jan-2022 and completed Front end with React Js in Besant Technology Pvt Ltd, Where i get more explore about frontend and database technologies.
Coding, its make me more interest to learn more technologies, and looking for the right place to gain strong knowledge on web development.
My specialty is front-end web design and development, making pixel magic in web pages  and turning it into beautiful, semantic HTML,CSS,js,. My interests, however, extend beyond the web and I love helping people with branding. I even love making
            </p>
            <br/>

            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-grey-500'>
                    Education
                </p>
                </div>
            <p>
            I have completed BSc computer science in 2020 and I have 1.2 Years Experience in Technical support session In aabasoft pvt Kakkanad, In there am doing based on Network troubleshooting and find the packects loss  and resolved it.
             This online portfolio is a good example of based on knowledge and skill in web development  
            </p>
            <div>
               <Link  to="Contact"smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex item-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 to blue-500 cursor-pointer'>
                        Know more
                        <span className='hover:rotate-90 duration-300'>
                        <MdOutlineKeyboardArrowRight size={25}
                        className='ml-1'/>
                        </span>
                    </Link>
               </div>
        </div>
    </div>
  )
}

export default About;