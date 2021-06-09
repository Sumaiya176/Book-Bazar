import React from 'react';

const Navbar = () => {
    return (
        <div className="items-stretch md:items-center">
            <nav class="bg-gray-100 fixed inset-x-0 flex items-stretch md:items-center">
                <a className="p-7" href="http://">Book Bazar</a>
                <ul className="flex items-center">
                    <li className="p-5 px-20">All Books</li>
                    <li className="p-5 px-20">About Us</li>
                    <li className="p-5 px-20">Contact</li>
                    <li className="p-5 px-20">Log In</li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;