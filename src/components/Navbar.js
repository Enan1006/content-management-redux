import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menu = <>
        <li>
            <Link to="/" className="text-gray-900 dark:text-white hover:underline px-2" aria-current="page">Home</Link>
            <Link to="/posts" className="text-gray-900 dark:text-white hover:underline px-2" aria-current="page">Blogs</Link>
            <Link to="/dashboard" className="text-gray-900 dark:text-white hover:underline px-2" aria-current="page">Dashboard</Link>
        </li>
    </>
    return (
        <div>

            <nav class="bg-white border-gray-200 dark:bg-gray-900">
                <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
                    <Link to="/" href="https://flowbite.com" class="flex items-center">
                        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                    </Link>
                    <div class="flex items-center">
                        <Link to="/" href="tel:5541251234" class="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline">(555) 412-1234</Link>
                        <Link to="/" href="#" class="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">Login</Link>
                    </div>
                </div>
            </nav>
            <nav class="bg-gray-50 dark:bg-gray-700">
                <div class="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
                    <div class="flex items-center">
                        <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                            {menu}
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;