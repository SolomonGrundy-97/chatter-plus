import React from 'react';
import { IconType } from 'react-icons';

interface CardProps {
  icon: IconType;
  title: string;
  text: string;
}

const Card: React.FC<CardProps> = ({ icon: Icon, title, text }) => {
  return (
    <div className="max-w-sm mx-auto bg-white border-2 border-purples p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-center mb-4">
        <Icon className="text-5xl text-purples" role='icons'/>
      </div>
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-4" role='heading'>{title}</h2>
      <p className="text-gray-600 text-center" role='paragraph'>
        {text}
      </p>
    </div>
  );
};

export default Card;
