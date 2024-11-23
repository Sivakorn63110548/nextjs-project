import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-800 text-white font-sans">
      {/* Header */}
      <header className="bg-opacity-90 py-20 text-center">
        <h1 className="text-6xl font-extrabold tracking-tight mb-6">
          Welcome to Our Beautiful Website!
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto">
          Experience stunning designs, seamless performance, and exceptional user experience. Crafted for the modern world.
        </p>
      </header>

      {/* Features Section */}
      <section className="py-24 bg-gray-900 bg-opacity-90">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-12 text-gray-200">Our Amazing Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
            <div className="bg-white p-10 rounded-xl shadow-lg hover:scale-105 transform transition-all hover:bg-gray-100">
              <h3 className="text-2xl font-semibold mb-4">Fast Performance</h3>
              <p className="text-gray-700">
                Enjoy lightning-fast load times and seamless transitions for a smooth experience.
              </p>
            </div>
            <div className="bg-white p-10 rounded-xl shadow-lg hover:scale-105 transform transition-all hover:bg-gray-100">
              <h3 className="text-2xl font-semibold mb-4">Modern Design</h3>
              <p className="text-gray-700">
                Beautiful designs that look stunning across all devices, with a minimalist approach.
              </p>
            </div>
            <div className="bg-white p-10 rounded-xl shadow-lg hover:scale-105 transform transition-all hover:bg-gray-100">
              <h3 className="text-2xl font-semibold mb-4">Reliable Support</h3>
              <p className="text-gray-700">
                24/7 support from our expert team to ensure that your experience is flawless.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto text-center text-sm text-gray-400">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
