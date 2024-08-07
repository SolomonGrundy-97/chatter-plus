// components/PostCard.tsx
import React from 'react';
import { AiOutlineLike, AiOutlineEye, AiOutlineShareAlt } from 'react-icons/ai';
import { FaHeart, FaRegHeart, FaComments, FaShareAlt } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';

interface PostCardProps {
  title: string;
  content: string;
  likes: number;
  views: number;
  timePosted: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, content, likes, views, timePosted }) => {
  return (
    <div className="space-y-6 mt-4">
    <div className="bg-gray-800 p-6 rounded shadow-md border-2 border-purples">
      <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
      <ReactMarkdown className="text-white mb-4">{content}</ReactMarkdown>
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center space-x-2">
        <FaRegHeart className="mr-2 text-purples" />
          <span className="text-white">{likes}</span>
          <AiOutlineEye className="text-purples ml-4" />
          <span className="text-white">{views}</span>
          <FaShareAlt className="mr-2 text-purples" />
        </div>
        <span className="text-gray-500 text-sm mb-4">{new Date(timePosted).toLocaleString()}</span>
      </div>
    </div>
    </div>
  );
};

export default PostCard;
