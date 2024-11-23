import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white">
      <header className="bg-opacity-80 p-8 text-center">
        <h1 className="text-5xl font-extrabold tracking-wide mb-4">
          Welcome to Our Beautiful Website!
        </h1>
        <p className="text-lg">
          Experience stunning designs and seamless user experience.
        </p>
      </header>

      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-8">Our Amazing Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transform transition-all">
              <h3 className="text-2xl font-bold mb-4">Fast Performance</h3>
              <p>
                Experience lightning-fast load times and seamless transitions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transform transition-all">
              <h3 className="text-2xl font-bold mb-4">Modern Design</h3>
              <p>
                We craft visually stunning designs that look amazing on all
                devices.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transform transition-all">
              <h3 className="text-2xl font-bold mb-4">Reliable Support</h3>
              <p>
                Get support whenever you need it with our dedicated team of
                experts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 py-4">
        <div className="container mx-auto text-center text-sm text-gray-400">
          <p>&copy; 2024 All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
