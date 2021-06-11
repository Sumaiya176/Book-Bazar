import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 z-50 min-h-screen md:flex">
        <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
            <a href="" className="block p-4 text-white font-bold">Book-Bazar</a>
            <button className="p-4 focus:outline-none focus:bg-gray-700 hover:-translate-x-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
</svg>
            </button>
        </div>
      <div className="bg-black text-blue-200 w-64 space-y-6 px-2 py-7 absolute inset-y-0 left-0 transform -translate-x-full
      md:relative md:translate-x-0 transition duration-200 ease-in-out">
        <a
          className="text-white flex space-x-2 items-center p-5"
          href="http://"
        >
          <svg
            className=""
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
          <span className="text-2xl text-red-100 font-extrabold transition duration-500 hover:text-red-500">Book-Bazar</span>
        </a>
        <nav>
          <a href="" className="block py-2.5 px-5 rounded transition duration-500 hover:bg-red-500 hover:text-white">Home</a>
          <a href="" className="block py-2.5 px-5 rounded transition duration-500 hover:bg-red-500 hover:text-white">About</a>
          <a href="" className="block py-2.5 px-5 rounded transition duration-500 hover:bg-red-500 hover:text-white">Features</a>
          <a href="" className="block py-2.5 px-5 rounded transition duration-500 hover:bg-red-500 hover:text-white">Pricing</a>
        </nav>
      </div>
      {/* <div className="flex-1 p-10 text-2xl font-bold">content</div> */}
    </div>
  );
};

export default Navbar;
