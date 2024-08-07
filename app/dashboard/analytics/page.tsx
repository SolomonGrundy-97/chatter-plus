"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ClipLoader from "react-spinners/ClipLoader";
import DashboardLayout from "../../layouts/DashboardLayout";
import ReactMarkdown from "react-markdown";

interface Post {
  id: string;
  title: string;
  content: string;
}

const Analytics: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/posts");
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  const handleDelete = async (id: string) => {
    setLoading(true);
    await fetch(`/api/posts/${id}`, {
      method: "DELETE",
    });
    setPosts((prev) => prev.filter((post) => post.id !== id));
    setLoading(false);
  };

  const handleEdit = (id: string) => {
    router.push(`/dashboard/editpost/${id}`);
  };

  return (
    <DashboardLayout>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
        <div
          className="bg-gray-800 p-8 rounded shadow-md w-full max-w-4xl"
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Analytics
          </h2>
          {loading ? (
            <ClipLoader size={24} color="#ffffff" />
          ) : (
            <ul className="space-y-4">
              {posts.map((post) => (
                <li key={post.id} className="bg-white p-4 rounded shadow-md">
                  <h3 className="text-xl font-bold">{post.title}</h3>
                  <ReactMarkdown>{post.content}</ReactMarkdown>
                  <div className="flex justify-end space-x-4 mt-4">
                    <button
                      onClick={() => handleEdit(post.id)}
                      className="bg-purple-500 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 hover:bg-purple-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="bg-red-500 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Analytics;
