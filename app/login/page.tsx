"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";
import {app} from "../firebase/config";
import { auth } from "../firebase/config";
import { useRouter } from "next/navigation";
import Spinner from "../Components/Spinner";
import AOS from "aos";
import "aos/dist/aos.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  // Fade-in motion...
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Log in with email and password...
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(email, password);
      if (user) {
        router.push("/dashboard/feed"); // Navigate to user dashboard...
      }
    } catch (e) {
      console.error(e); // Log error to console...
    }
  };

  // Logging in with Google...
  const LogInWithGoogle = async () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push("/dashboard/feed");
    } catch (error) {
      console.error("Error logging in with Google:");
    }
  };

  const isFormValid = email && password;

  return loading ? (
    <Spinner />
  ) : (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div
        className="bg-gray-800 p-8 rounded shadow-md w-full max-w-md"
        data-aos="fade-up"
      >
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Log In to Chatter+
        </h2>
        {error && (
          <p className="text-red-500 text-center mb-4">
            Incorrect email or password. Please try again.
          </p>
        )}
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-purples focus:border-transparent"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-300">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-purples focus:border-transparent"
              placeholder="Password"
              required
            />
          </div>
          <button
            type="submit"
            className={`w-full bg-purples text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-purples focus:ring-opacity-50 ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-purple-dark"
            }`}
            disabled={!isFormValid || loading}
          >
            Log In
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-300">or log in with</p>
          <button
            onClick={LogInWithGoogle}
            className="mt-2 flex items-center justify-center w-full bg-white text-gray-700 border rounded py-2 hover:bg-gray-100"
          >
            <FcGoogle className="mr-2" /> Log in with Google
          </button>
        </div>
        <div className="mt-6 text-center">
          <p className="text-gray-300">
            Don't have an account?{" "}
            <Link href="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
