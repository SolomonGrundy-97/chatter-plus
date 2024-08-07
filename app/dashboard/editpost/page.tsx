"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter, useParams } from "next/navigation";
import ClipLoader from "react-spinners/ClipLoader";
import DashboardLayout from "../../layouts/DashboardLayout";
import ReactMarkdown from "react-markdown";

const MdEditor = dynamic(() => import("react-markdown-editor-lite"), {
  ssr: false,
});

const EditPost: React.FC = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`/api/posts/${id}`);
      const data = await response.json();
      setTitle(data.title);
      setContent(data.content);
    };

    fetchPost();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const response = await fetch(`/api/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, content }),
    });

    if (response.ok) {
      setTitle("");
      setContent("");
      router.push("/dashboard/feed");
    }

    setLoading(false);
  };

  const handleEditorChange = ({ text }: any) => {
    setContent(text);
  };

  const isFormValid = title && content;

  return (
    <DashboardLayout>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
        <div
          className="bg-gray-800 p-8 rounded shadow-md w-full max-w-4xl"
          data-aos="fade-up"
        >
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Edit Post
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-gray-300">
                Title
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Title"
                required
              />
            </div>
            <div>
              <label htmlFor="content" className="block text-gray-300">
                Content
              </label>
              <MdEditor
                style={{ height: "350px" }}
                renderHTML={(text) => <ReactMarkdown>{text}</ReactMarkdown>}
                onChange={handleEditorChange}
                value={content}
              />
            </div>
            <button
              type="submit"
              className={`w-full bg-purple-500 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 ${
                loading
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-purple-600"
              }`}
              disabled={!isFormValid || loading}
            >
              {loading ? <ClipLoader size={24} color="#ffffff" /> : "Update"}
            </button>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default EditPost;
