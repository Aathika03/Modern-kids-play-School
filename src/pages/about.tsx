import React from "react";
import Layout from "../components/layout/Layout";

const AboutPage = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-white py-16 px-4 flex flex-col items-center">
        
        {/* Heading */}
        <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">
          About Little Flower
        </h1>

        {/* Intro Paragraph */}
        <p className="max-w-3xl text-lg text-gray-700 text-center mb-12">
          Little Flower School is committed to providing a nurturing environment 
          where children learn, grow, and develop holistically. With a perfect blend 
          of academics, values, and creative activities, we inspire young minds to 
          achieve excellence.
        </p>

        {/* Two-Column Section */}
        <div className="max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          
          {/* Mission */}
          <div className="p-6 bg-green-50 rounded-xl shadow-md border border-green-200">
            <h2 className="text-2xl font-semibold text-green-800 mb-3">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To foster an environment that promotes creativity, confidence, 
              and strong academic foundations. We aim to help children discover 
              their talents while developing compassion, discipline, and respect.
            </p>
          </div>

          {/* Vision */}
          <div className="p-6 bg-green-50 rounded-xl shadow-md border border-green-200">
            <h2 className="text-2xl font-semibold text-green-800 mb-3">
              Our Vision
            </h2>
            <p className="text-gray-600 leading-relaxed">
              To shape future leaders equipped with knowledge, life skills, 
              and values. We envision a school where every child feels 
              supported, encouraged, and celebrated for who they are.
            </p>
          </div>

          {/* Approach */}
          <div className="p-6 bg-green-50 rounded-xl shadow-md border border-green-200 md:col-span-2">
            <h2 className="text-2xl font-semibold text-green-800 mb-3">
              Our Approach to Learning
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At Little Flower, learning goes beyond textbooks. We follow an 
              activity-based, student-centered method where children explore, 
              question, and create. Our classrooms are engaging, interactive, 
              and built to support curiosity. With a dedicated team of educators, 
              we ensure every child receives personal guidance and a joyful 
              learning experience.
            </p>
          </div>

        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
