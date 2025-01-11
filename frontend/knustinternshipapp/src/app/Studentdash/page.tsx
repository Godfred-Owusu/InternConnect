import React from "react";

const Dashboard: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-200">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-300 p-6 shadow-lg">
        <div className="flex items-center space-x-4 mb-8">
          <img
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ffr.famousbirthdays.com%2Fpeople%2Fmichael-rainey.html&psig=AOvVaw1iFBVS5qlfb04A5qd9hT9l&ust=1736618646017000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCICxjt3e64oDFQAAAAAdAAAAABAE"
            alt="Profile"
            className="w-12 h-12 rounded-full border-2 border-gray-500"
          />
          <div>
            <h2 className="text-gray-800 font-semibold">Othniel N. Aryee</h2>
            <p className="text-gray-600 text-sm">Student</p>
          </div>
        </div>
        <nav className="space-y-4">
          <div>
            <h3 className="text-gray-700 font-medium uppercase text-sm mb-2">Main</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="block p-2 rounded-md hover:bg-gray-400 hover:text-white"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-2 rounded-md hover:bg-gray-400 hover:text-white"
                >
                  Request
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-2 rounded-md hover:bg-gray-400 hover:text-white"
                >
                  Review
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-gray-700 font-medium uppercase text-sm mb-2">
              Documents
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="block p-2 rounded-md hover:bg-gray-400 hover:text-white"
                >
                  Approved Requests
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-2 rounded-md hover:bg-gray-400 hover:text-white"
                >
                  Rejected Requests
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="block p-2 rounded-md hover:bg-gray-400 hover:text-white"
                >
                  Help and Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-2 rounded-md hover:bg-gray-400 hover:text-white"
                >
                  Notifications
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-2 rounded-md hover:bg-gray-400 hover:text-white"
                >
                  Settings
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-gray-100">
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search"
            className="w-full max-w-md p-2 border border-gray-400 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 bg-white rounded-lg shadow-md border border-gray-300">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">My Requests</h2>
            <p className="text-gray-600 text-sm">
              View and manage all your internship requests.
            </p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md border border-gray-300">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Documents</h2>
            <p className="text-gray-600 text-sm">
              Access your approved and rejected internship documents.
            </p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md border border-gray-300">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              Notifications
            </h2>
            <p className="text-gray-600 text-sm">
              Stay updated with the latest alerts and announcements.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
