"use client";

import React, { useEffect, useState } from "react";
import { generateRandomPosts, Post } from "../../utils/generatedRandomPosts";
//import DashboardLayout from '../../layouts/DashboardLayout';
import PostCard from "../Components/PostCard";

const POSTS_PER_PAGE = 7;

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchedPosts = generateRandomPosts();
    setPosts(fetchedPosts);
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const displayedPosts = posts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div
        className=" p-8 rounded shadow-md w-full max-w-4xl"
        data-aos="fade-up"
      >
        <h2 className="text-2xl font-bold text-purples mb-6 text-center">
          Feeds
        </h2>
        <div className="space-y-4">
          {displayedPosts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              content={post.content}
              likes={post.likes}
              views={post.views}
              timePosted={post.timePosted}
            />
          ))}
        </div>
        <div className="flex justify-center mt-6">
          {Array.from({ length: Math.ceil(posts.length / POSTS_PER_PAGE) }).map(
            (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 mx-1 rounded ${
                  currentPage === index + 1
                    ? "bg-purple-500 text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
              >
                {index + 1}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Posts;
