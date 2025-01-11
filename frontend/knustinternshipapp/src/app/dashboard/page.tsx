'use client';

const RequestInternshipPage = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-1/4 bg-gray-200 p-6 border-r border-gray-500">
        <div className="mb-8">
          <div className="flex items-center space-x-4">
            <img
              src="/profile-pic-placeholder.jpg"
              alt="Profile"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="text-lg font-bold">Othniel N. Aryee</h3>
              <p className="text-gray-700">Student</p>
            </div>
          </div>
        </div>

        <nav className="space-y-4">
          <h4 className="text-gray-800 font-bold mb-2">MAIN</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center text-gray-700 hover:text-blue-600">
                <span className="material-icons mr-2">dashboard</span>
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-gray-700 hover:text-blue-600">
                <span className="material-icons mr-2">request_quote</span>
                Request
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-gray-700 hover:text-blue-600">
                <span className="material-icons mr-2">review</span>
                Review
              </a>
            </li>
          </ul>

          <h4 className="text-gray-800 font-bold mt-6 mb-2">DOCUMENTS</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center text-gray-700 hover:text-blue-600">
                Approved Requests
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center text-gray-700 hover:text-blue-600">
                Rejected Requests
              </a>
            </li>
          </ul>
        </nav>

        <footer className="mt-auto space-y-4">
          <a href="#" className="flex items-center text-gray-700 hover:text-blue-600">
            <span className="material-icons mr-2">help</span>
            Help and Support
          </a>
          <a href="#" className="flex items-center text-gray-700 hover:text-blue-600">
            <span className="material-icons mr-2">notifications</span>
            Notifications
          </a>
          <a href="#" className="flex items-center text-gray-700 hover:text-blue-600">
            <span className="material-icons mr-2">settings</span>
            Settings
          </a>
        </footer>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-8 overflow-y-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Request Internship</h1>
        <p className="text-gray-700 mb-6">
          Fill the form with the required details to proceed
        </p>

        <div className="bg-white p-8 shadow-md rounded-lg border border-gray-300">
          {/* Progress Indicator */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold">
                1
              </span>
              <span className="ml-2 text-gray-700">General Info</span>
            </div>
            <div className="flex items-center">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-500 text-white font-bold">
                2
              </span>
              <span className="ml-2 text-gray-700">Review Application</span>
            </div>
            <div className="flex items-center">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-500 text-white font-bold">
                3
              </span>
              <span className="ml-2 text-gray-700">Benefits & Extras</span>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-8">
            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-4">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="border border-gray-500 p-3 rounded-lg w-full"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border border-gray-500 p-3 rounded-lg w-full"
                />
                <input
                  type="text"
                  placeholder="Student No"
                  className="border border-gray-500 p-3 rounded-lg w-full"
                />
                <input
                  type="text"
                  placeholder="Index No"
                  className="border border-gray-500 p-3 rounded-lg w-full"
                />
                <input
                  type="text"
                  placeholder="Level"
                  className="border border-gray-500 p-3 rounded-lg w-full"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-500 p-3 rounded-lg w-full"
                />
                <input
                  type="text"
                  placeholder="Course"
                  className="border border-gray-500 p-3 rounded-lg w-full"
                />
              </div>
            </div>

            <div>
              <h2 className="text-lg font-bold text-gray-800 mb-4">Company Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Company Name"
                  className="border border-gray-500 p-3 rounded-lg w-full"
                />
                <input
                  type="text"
                  placeholder="Duration"
                  className="border border-gray-500 p-3 rounded-lg w-full"
                />
                <input
                  type="text"
                  placeholder="Region"
                  className="border border-gray-500 p-3 rounded-lg w-full"
                />
              </div>
              <textarea
                placeholder="Company Address"
                rows="4"
                className="border border-gray-500 p-3 rounded-lg w-full mt-4"
              />
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default RequestInternshipPage;
