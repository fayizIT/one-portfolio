import React from 'react'
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import bootstrap from '../assets/bootstrap.png';
import mysql from '../assets/mysql.png';
import react from '../assets/react.png';
import github from '../assets/github.png';
import CLanguage from '../assets/C Language.png';


const Skill = () => {

    const techs =[
        {
            id:1,
            src:html,
            title: 'HTML',
            Style:'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            title: 'CSS',
            Style:'shadow-blue-500'
        },
        {
            id:3,
            src:javascript,
            title: 'javascript',
            Style:'shadow-yellow-500'
        },
        {
            id:4,
            src:bootstrap,
            title: 'Bootstrap',
            Style:'shadow-violet-500'
        },
        {
            id:5,
            src:mysql,
            title: 'Mysql',
            Style:'shadow-white-500'
        },
        {
            id:6,
            src:react,
            title: 'React',
            Style:'shadow-blue-600'
        },
        {
            id:7,
            src:github,
            title: 'GitHub',
            Style:'shadow-gray-400'
        },
        {
            id:8,
            src:CLanguage,
            title: 'C Language',
            Style:'shadow-blue'
        },

       
        
    ]

                      

  return (
    <div name='Skills' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'    >
       <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
            <p className='text-4xl font-bold border-b-4 border-black -500 p-2 inline'>Skills</p>
            <p className='py-6'>These are the technologies Which I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
            {techs.map(({ id,src,title, }) => (
                
                <div  key={id}
                className={'shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${}'}>
                <img src={src} alt="" className='w-20 mx-auto'/>
                <p className='mt-4'>{title}</p>
            </div>
            ))}
           
        </div>
       </div>
    </div>
  );
};

export default Skill;