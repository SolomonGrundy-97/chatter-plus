"use client";
import DashboardLayout from "../../layouts/DashboardLayout";
import { useState, useEffect } from "react";
import { FaHeart, FaRegHeart, FaComments, FaShareAlt } from "react-icons/fa";
import Spinner from "../../Components/Spinner";
import Post from "../../Components/Posts";

// Types...
interface Post {
  id: number;
  title: string;
  content: string;
  likes: number;
  comments: string[];
  createdAt: string;
}

const Posts: React.FC = () => {
  // States...
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetching posts from the backend API...
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/posts");
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  //  Liking logic...
  const handleLike = (id: number) => {
    setPosts(
      posts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  // Sharing logic...
  const handleShare = (title: string, text: string) => {
    const url = `https://wa.me/?text=${encodeURIComponent(
      `Check out this post: ${title}\n\n${text}`
    )}`;
    window.open(url, "_blank");
  };

  // Displaying the loading spinner...
  if (loading) {
    return <Spinner />;
  }

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-gray-100 p-6 mt-5">
        <div className="flex mt-12 justify-between place-content-center">
          <h1 className="text-3xl font-bold text-center text-gray-800">
            Posts
          </h1>

          {/* Input on feeds... */}
          <input
            type="text"
            placeholder="Search post..."
            className="px-2 py-1 rounded bg-white text-gray-700"
          />
        </div>

        <div className="space-y-6 mt-4">
          {/* Mapping through the posts and displayed them... */}
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-800 border-2 border-purples p-6 rounded shadow-md"
            >
              <h2 className="text-xl font-bold text-white mb-2">
                {post.title}
              </h2>
              <h2 className="text-white mb-4">{post.content}</h2>
              <p className="text-gray-500 text-sm mb-4">
                {new Date(post.createdAt).toLocaleString()}
              </p>
              <div className="flex items-center justify-between">
                <button
                  onClick={() => handleLike(post.id)}
                  className="flex items-center text-purples"
                >
                  {post.likes > 0 ? (
                    <FaHeart className="mr-2 text-red-500" />
                  ) : (
                    <FaRegHeart className="mr-2" />
                  )}
                  {post.likes} {post.likes === 1 ? "Like" : "Likes"}
                </button>
                <button className="flex items-center text-purples">
                  <FaComments className="mr-2" />
                  {post.comments.length}{" "}
                  {post.comments.length === 1 ? "Comment" : "Comments"}
                </button>
                <button
                  onClick={() => handleShare(post.title, post.content)}
                  className="flex items-center text-purples"
                >
                  <FaShareAlt className="mr-2" />
                  Share
                </button>
              </div>
            </div>
          ))}

          {/* Random Generated Posts... */}
          <Post />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Posts;
