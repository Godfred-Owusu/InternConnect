'use client';

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-blue-600 text-3xl font-bold mr-2">📘</span>
          <h1 className="text-blue-600 text-2xl font-bold">Intern Connect</h1>
        </div>
        <nav className="space-x-4">
          <a href="#about" className="text-gray-600 hover:text-blue-600">
            About
          </a>
          <a href="#contact" className="text-gray-600 hover:text-blue-600">
            Contact
          </a>
          <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white">
            Login
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Sign Up
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-cover bg-center min-h-screen flex flex-col justify-center items-center text-center text-white" style={{ backgroundImage: `url('/your-background-image.jpg')` }}>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Track Your Internship Journey
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Streamline your internship with ease
        </p>
        <button className="px-6 py-3 bg-blue-600 rounded-lg text-white text-lg hover:bg-blue-700">
          Login
        </button>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Internship Features</h2>
          <p className="text-gray-600">
            Explore the streamlined process of applying for internships with our
            comprehensive feature set.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 md:px-16">
          <div className="flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="/your-image-smart-application.jpg"
              alt="Smart Application"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Smart Application</h3>
              <p className="text-gray-600 mb-4">
                Easily fill out and submit applications with our intuitive
                interface.
              </p>
              <div className="flex space-x-4">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Try Now
                </button>
                <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src="/your-image-progress-tracking.jpg"
              alt="Progress Tracking"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Progress Tracking</h3>
              <p className="text-gray-600 mb-4">
                Keep track of your application status and receive updates in
                real-time.
              </p>
              <div className="flex space-x-4">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Try Now
                </button>
                <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-blue-600 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Kickstart Your Career</h2>
        <p className="mb-6">
          Join us today to receive and track your internship letters
          effortlessly. Your future starts here!
        </p>
        <button className="px-6 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-200">
          Login
        </button>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-800 text-white py-6">
        <div className="text-center">
          <p>© 2025 Intern Connect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
