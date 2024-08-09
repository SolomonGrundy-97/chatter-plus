"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";
import {app} from "../firebase/config";
import { auth } from "../firebase/config";
import { useRouter } from "next/navigation";
import Spinner from "../Components/Spinner";
import AOS from "aos";
import "aos/dist/aos.css";

const SignUp: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const router = useRouter();

  // Fade-in motion...
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Signing in with email and password...
  const handleSignin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(email, password); // Create a new user with email and password...
      if (user) {
        router.push("/dashboard/feed"); // Navigate to user dashboard...
      }
    } catch (e) {
      console.error(e); // Log error to console...
    }
  };

  // Signing in with Google...
  const SignInWithGoogle = async () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      router.push("/dashboard/feed");
    } catch (error) {
      console.error("Error signing in with Google:");
    }
  };

  const isFormValid = firstName && lastName && email && password;

  return loading ? (
    <Spinner />
  ) : (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div
        className="bg-gray-800 p-8 rounded shadow-md w-full max-w-md"
        data-aos="fade-down"
      >
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Sign Up for Chatter+
        </h2>
        <form onSubmit={handleSignin} className="space-y-4">
          <div>
            <label htmlFor="firstname" className="block text-gray-300">
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-2 border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-purples focus:border-transparent"
              placeholder="First Name"
              required
            />
          </div>
          <div>
            <label htmlFor="lastname" className="block text-gray-300">
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-4 py-2 border rounded mt-1 focus:outline-none focus:ring-2 focus:ring-purples focus:border-transparent"
              placeholder="Last Name"
              required
            />
          </div>
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
            Sign Up
          </button>
        </form>
        {error && (
          <p className="text-red-500 text-center mt-4">{error.message}</p>
        )}
        <div className="mt-6 text-center">
          <p className="text-gray-300">or sign up with</p>
          <button
            onClick={SignInWithGoogle}
            className="mt-2 flex items-center justify-center w-full bg-white text-gray-700 border rounded py-2 hover:bg-gray-100"
          >
            <FcGoogle className="mr-2" /> Sign up with Google
          </button>
        </div>
        <div className="mt-6 text-center">
          <p className="text-gray-300">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500 hover:underline">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
