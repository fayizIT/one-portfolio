import React from 'react';
import freshHubImage from '../projects/fresh Hub project1.png';
import MernauthImage from '../projects/Mern Auth.png';
import NetflixImage from '../projects/Netflix.png';
import TudoImage from '../projects/Tudo.png';
import EdistrictImage from '../projects/Edistrict.png';
import AppointmentImage from '../projects/Dr.appointment.png';
import olxImage from '../projects/Olx.png';
import instagramImage from '../projects/Instagram.png';


const Works = () => {
  const WorkItems = [
    {
      title: 'Fresh Hub',
      description: 'E-commerce',
      imageUrl: freshHubImage, // Use the imported image without quotes
    },
    {
      title: 'Mern Auth',
      description: 'User-Management System',
      imageUrl: MernauthImage, // Use the imported image without quotes
    },
    {
      title: 'Netflix',
      description: 'Netflix',
      imageUrl: NetflixImage, // You can provide a URL for other images
    },
    {
      title: 'Tudo',
      description: 'Tudo',
      imageUrl: TudoImage, // You can provide a URL for other images
    },
    {
      title: 'Edistrict Static Website',
      description: 'E-district Application',
      imageUrl: EdistrictImage, // You can provide a URL for other images
    },
    {
      title: 'Dr.appointment',
      description: 'Dr.appointment',
      imageUrl: AppointmentImage, // You can provide a URL for other images
    },
    {
      title: 'Olx',
      description: 'Olx-Application',
      imageUrl: olxImage, // You can provide a URL for other images
    },
    {
      title: 'Instagram',
      description: 'Instagram-Application',
      imageUrl: instagramImage, // You can provide a URL for other images
    },
    // Add more work items as needed
  ];

  return (
    <div name='Works' className='w-full min-h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
      <div className='max-w-screen-lg mx-auto p-4 text-white'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-black p-2 inline'>Works</p>
          <p className='py-6'>Check out some of my Works below</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-4 sm:px-12'>
          {WorkItems.map((item, index) => (
            <div key={index} className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg'>
              <img src={item.imageUrl} alt={item.title} className='w-60 h-auto mx-auto' />
              <h3 className='text-xl font-bold mt-4'>{item.title}</h3>
              <p className='text-gray-400'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
