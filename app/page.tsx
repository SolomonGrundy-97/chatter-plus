"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineLineChart } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { MdCreate } from "react-icons/md";
import Card from "./Components/Cards";
import Footer from "./Components/Footer";
import { getAuth } from "firebase/auth";
//import app from "../app/firebase/config";
import { useRouter } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

const Home: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  // Navigating users with acct to their dashboad
  // and directing users with no acct to home page that has a sign up button...
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        router.push("/dashboard/feed");
      } else {
        router.push("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full py-4 px-8 flex justify-between items-center bg-gray-800">
        <div className="flex items-center">
          <span role="img" aria-label="logo" className="text-white text-3xl">
            🏀
          </span>
          <span className="text-white text-2xl ml-2">Chatter+</span>
        </div>
        <div>
          <Link
            href="/login"
            className="text-gray-800 hover:text-white bg-Aquas px-4 py-2 rounded mr-2"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="text-gray-800 hover:text-white bg-Aquas px-4 py-2 rounded"
          >
            Sign Up
          </Link>
        </div>
      </header>

      <main>
        {/* Hero landing... */}
        <div
          className="bg-purples dark-gray-bottom flex-grow flex flex-col items-center justify-center p-6"
          id="hero"
        >
          <h1 className="text-5xl text-white flex-grow flex items-center justify-center">
            Welcome to Chatter+!
          </h1>

          <br />
          <br />

          <section
            className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl"
            data-aos="fade-up"
          >
            <div className="md:w-1/2 w-full">
              <h3 className="text-3xl md:text-4xl text-gray-800">
                Chatter+ is a Haven for Text-Based Content
              </h3>
              <p className="mt-4 text-lg md:text-xl text-gray-600">
                Unleash the Power of Words, Connect with Like-minded Readers and
                Writers
              </p>
              <Link
                href="/signup"
                className="inline-block bg-Aquas text-gray-800 hover:text-white py-2 px-5 rounded mt-6"
              >
                Get started
              </Link>
            </div>
            <div
              className="md:w-1/2 w-full flex justify-center mt-8 md:mt-0"
              data-aos="fade-left"
            >
              <Image
                src="/backgroundless.png"
                alt="chatter icon"
                width={500}
                height={500}
                className="w-full h-auto object-contain md:w-3/4 lg:w-2/3"
              />
            </div>
          </section>
        </div>

        {/* About chatter+ */}
        <section
          id="about"
          className="flex flex-col items-center w-full max-w-7xl mt-12"
          data-aos="fade-up"
        >
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl md:text-4xl text-gray-800">
              About Chatter+
            </h2>
            <p className="mt-4 text-lg md:text-xl text-gray-600">
              Chatter+ is a multi-functional platform where authors and readers
              can have access to their own content. It aims to be a traditional
              bookworm’s heaven and a blog to get access to more text-based
              content. Our vision is to foster an inclusive and vibrant
              community where diversity is celebrated. We encourage
              open-mindedness and respect for all individuals, regardless of
              their backgrounds or beliefs. By promoting dialogue and
              understanding, we strive to create a space where everyone feels
              welcome and valued.
            </p>
          </div>
        </section>

        <br />
        <br />
        <br />

        {/* Landing page cards... */}
        <section
          id="cards"
          className="w-full max-w-7xl mx-auto mt-12 px-4"
          data-aos="fade-up"
        >
          <h2 className="text-2xl md:text-4xl text-gray-800 mb-6 text-center">
            Why you should join Chatter+
          </h2>
          <div className="flex flex-col sm:flex-row md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              icon={AiOutlineLineChart}
              title="Analytics"
              text="Analytics to track the number of views, likes, comment and also analyze the performance of your articles over a period of time."
            />
            <Card
              icon={FaUsers}
              title="Social Interaction"
              text="Users on the platform can interact with post they like, comment and engage in discussions."
            />
            <Card
              icon={MdCreate}
              title="Content Creation"
              text="Write nice and appealing content with our in-built markdown, a rich text editor."
            />
          </div>
        </section>
      </main>

      {/* Chatter+ footer... */}
      <Footer />
    </div>
  );
};

export default Home;
