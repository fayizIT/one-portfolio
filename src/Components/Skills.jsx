import React from 'react';
import html from '../assets/html.png';
import css from '../assets/css.png';
import javascript from '../assets/javascript.png';
import bootstrap from '../assets/bootstrap.png';
import react from '../assets/react.png';
import github from '../assets/github.png';
import CLanguage from '../assets/C Language.png';
import mongoDb from '../assets/mongoDB.png';
import expressjs from '../assets/Expressjs.png';
import Nodejs from '../assets/nodejs.png';
import java from '../assets/java.png';
import aws from '../assets/aws.png'

const Skill = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500',
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500',
    },
    {
      id: 3,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-500',
    },
    {
      id: 4,
      src: bootstrap,
      title: 'Bootstrap',
      style: 'shadow-violet-500',
    },
    {
      id: 5,
      src: react,
      title: 'React',
      style: 'shadow-blue-600',
      
    },
    {
      id: 6,
      src: mongoDb,
      title: 'MongoDB',
      style: 'shadow-green-600',
      
    },
    {
        id: 7,
          src: expressjs,
        title: 'Express.js',
        style: 'shadow-yellow-600',
     
      },
    {
      id: 8,
        src: Nodejs,
      title: 'Node.js',
      style: 'shadow-green-600',
    },
    {
      id: 10,
    src: github,
    title: 'GitHub',
    style: 'shadow-gray-600',
    
    },
    {
      id: 11,
        src: CLanguage,
      title: 'C Language',
      style: 'shadow-blue-600'
  
    },
    {
        id: 11,
    src: java,
      title: 'Java',
      style: 'shadow-red-400',

    },
    {
      id: 11,
  src: aws,
    title: 'aws',
    style: 'shadow-red-400',

  },
    

    
  ];

  return (
    <div name='Skill' className='w-full bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-black p-2 inline'>Skills</p>
          <p className='py-6'>These are the technologies I've worked with</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-4 sm:px-12'>
          {techs.map(({ id, src, title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt='' className='w-20 mx-auto' />
              <p className='mt-4'>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
