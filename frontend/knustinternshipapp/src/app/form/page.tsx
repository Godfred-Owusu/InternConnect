import React from 'react';
import { FaTachometerAlt, FaFileAlt, FaCheckCircle, FaTimesCircle, FaQuestionCircle, FaBell, FaCog, FaUser, FaIdBadge, FaGraduationCap, FaEnvelope, FaBook, FaBuilding, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const RequestInternship: React.FC = () => {
    return (
        <div className="h-screen flex bg-white">
            {/* Sidebar */}
            <aside className="w-1/4 bg-gray-100 p-4">
                <div className="mb-6">
                    <div className="flex items-center space-x-4 bg-white p-2 rounded-md shadow">
                        <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">Othniel N. Aryee</h2>
                            <p className="text-sm text-gray-600">Student</p>
                        </div>
                    </div>
                </div>
                <nav className="mb-6">
                    <ul className="space-y-2">
                        <li className="flex items-center text-blue-600 font-semibold cursor-pointer">
                            <FaTachometerAlt className="mr-2" /> Dashboard
                        </li>
                        <li className="flex items-center text-gray-800 cursor-pointer">
                            <FaFileAlt className="mr-2" /> Request
                        </li>
                        <li className="flex items-center text-gray-800 cursor-pointer">
                            <FaCheckCircle className="mr-2" /> Review
                        </li>
                    </ul>
                </nav>
                <div>
                    <h3 className="text-sm font-semibold text-gray-800">Documents</h3>
                    <ul className="space-y-2 mt-2">
                        <li className="flex items-center text-gray-800 cursor-pointer">
                            <FaCheckCircle className="mr-2" /> Approved Requests
                        </li>
                        <li className="flex items-center text-gray-800 cursor-pointer">
                            <FaTimesCircle className="mr-2" /> Rejected Requests
                        </li>
                    </ul>
                </div>
                <div className="absolute bottom-4 left-4 text-lg text-gray-600">
                    <p className="flex items-center cursor-pointer">
                        <FaQuestionCircle className="mr-2" /> Help and Support
                    </p>
                    <p className="flex items-center cursor-pointer">
                        <FaBell className="mr-2" /> Notifications
                    </p>
                    <p className="flex items-center cursor-pointer">
                        <FaCog className="mr-2" /> Settings
                    </p>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-scroll p-6">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-semibold text-gray-900 mb-4">Request Internship</h1>
                    <p className="text-gray-700 mb-8">Fill the form with the required details to proceed</p>

                    {/* Progress Steps */}
                    <div className="flex items-center justify-between mb-8">
                        <div className="text-center flex-1">
                            <div className="w-16 h-16 bg-blue-600 text-white rounded-xl flex items-center justify-center mx-auto">
                                1
                            </div>
                            <p className="text-sm mt-2 text-gray-800">General Info</p>
                        </div>
                        <div className="flex-1 flex items-center justify-center">
                            <div className="w-full h-1 bg-gray-400"></div>
                        </div>
                        <div className="text-center flex-1">
                            <div className="w-16 h-16 bg-gray-400 text-gray-600 rounded-xl flex items-center justify-center mx-auto">
                                2
                            </div>
                            <p className="text-sm mt-2 text-gray-600">Review Application</p>
                        </div>
                        <div className="flex-1 flex items-center justify-center">
                            <div className="w-full h-1 bg-gray-400"></div>
                        </div>
                        <div className="text-center flex-1">
                            <div className="w-16 h-16 bg-gray-400 text-gray-600 rounded-xl flex items-center justify-center mx-auto">
                                3
                            </div>
                            <p className="text-sm mt-2 text-gray-600">Benefits & Extras</p>
                        </div>
                    </div>

                    {/* Form */}
                    <form className="space-y-6">
                        <h2 className="text-2xl font-semibold text-gray-900">Personal Details</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {/* Personal Information */}
                            <div className="relative">
                                <label className="block text-sm font-medium text-gray-800">First Name</label>
                                <div className="flex items-center mt-1">
                                    <FaUser className="absolute ml-3 text-gray-500" />
                                    <input
                                        type="text"
                                        className="pl-10 block w-full border-2 border-gray text-gray-900 rounded-md py-3 h-12 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                            </div>
                            <div className="relative">
                                <label className="block text-sm font-medium text-gray-800">Last Name</label>
                                <div className="flex items-center mt-1">
                                    <FaUser className="absolute ml-3 text-gray-500" />
                                    <input
                                        type="text"
                                        className="pl-10 block w-full border-2 border-gray text-gray-900 rounded-md py-3 h-12 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                            </div>
                            <div className="relative">
                                <label className="block text-sm font-medium text-gray-800">Student No</label>
                                <div className="flex items-center mt-1">
                                    <FaIdBadge className="absolute ml-3 text-gray-500" />
                                    <input
                                        type="text"
                                        className="pl-10 block w-full border-2 border-gray text-gray-900 rounded-md py-3 h-12 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                            </div>
                            <div className="relative">
                                <label className="block text-sm font-medium text-gray-800">Index No</label>
                                <div className="flex items-center mt-1">
                                    <FaIdBadge className="absolute ml-3 text-gray-500" />
                                    <input
                                        type="text"
                                        className="pl-10 block w-full border-2 border-gray text-gray-900 rounded-md py-3 h-12 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                            </div>
                            <div className="relative">
                                <label className="block text-sm font-medium text-gray-800">Level</label>
                                <div className="flex items-center mt-1">
                                    <FaGraduationCap className="absolute ml-3 text-gray-500" />
                                    <input
                                        type="text"
                                        className="pl-10 block w-full border-2 border-gray text-gray-900 rounded-md py-3 h-12 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                            </div>
                            <div className="relative">
                                <label className="block text-sm font-medium text-gray-800">Email</label>
                                <div className="flex items-center mt-1">
                                    <FaEnvelope className="absolute ml-3 text-gray-500" />
                                    <input
                                        type="email"
                                        className="pl-10 block w-full border-2 border-gray text-gray-900 rounded-md py-3 h-12 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                            </div>
                            <div className="relative">
                                <label className="block text-sm font-medium text-gray-800">Course</label>
                                <div className="flex items-center mt-1">
                                    <FaBook className="absolute ml-3 text-gray-500" />
                                    <input
                                        type="text"
                                        className="pl-10 block w-full border-2 border-gray text-gray-900 rounded-md py-3 h-12 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Company Information */}
                        <h2 className="text-2xl font-semibold text-gray-900">Company Information</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative">
                                <label className="block text-sm font-medium text-gray-800">Company Name</label>
                                <div className="flex items-center mt-1">
                                    <FaBuilding className="absolute ml-3 text-gray-500" />
                                    <input
                                        type="text"
                                        className="pl-10 block w-full border-2 border-gray text-gray-900 rounded-md py-3 h-12 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                            </div>
                            <div className="relative">
                                <label className="block text-sm font-medium text-gray-800">Duration</label>
                                <div className="flex items-center mt-1">
                                    <FaClock className="absolute ml-3 text-gray-500" />
                                    <input
                                        type="text"
                                        className="pl-10 block w-full border-2 border-gray text-gray-900 rounded-md py-3 h-12 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                            </div>
                            <div className="relative">
                                <label className="block text-sm font-medium text-gray-800">Region</label>
                                <div className="flex items-center mt-1">
                                    <FaMapMarkerAlt className="absolute ml-3 text-gray-500" />
                                    <input
                                        type="text"
                                        className="pl-10 block w-full border-2 border-gray text-gray-900 rounded-md py-3 h-12 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                            </div>
                            <div className="col-span-2 relative">
                                <label className="block text-sm font-medium text-gray-800">Company Address</label>
                                <textarea
                                    rows={4}
                                    className="pl-10 mt-1 block w-full border-2 border-gray text-gray-900 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                ></textarea>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default RequestInternship;
