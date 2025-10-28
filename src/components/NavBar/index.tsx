import React from 'react';
import { Link } from "react-router-dom";
import { navBarItems } from "../../utils/consts";
import { SearchIcon, MenuIcon } from "../../assets/svgs";
import { useTheme } from '../../contexts/ThemeContext';

// Used Button component instead of button

const NavBar = React.memo(() => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <nav className="bg-black border-gray-200 w-full top-0 left-0 h-20">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link to="/" className="flex items-center space-x-3 flex-1 rtl:space-x-reverse">
                <div className="flex items-center gap-2">
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={isDarkMode}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                e.preventDefault();
                                toggleTheme();
                            }}
                        />
                        <div 
                            className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
                            onClick={toggleTheme}
                        ></div>
                        <span 
                            className="ms-3 text-sm font-medium text-black dark:text-gray-300"
                            onClick={toggleTheme}
                        >
                            {isDarkMode ? 'Dark' : 'Light'} Mode
                        </span>
                    </label>
                </div>
            </Link>
            <div className="flex md:order-2">
                <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
                <SearchIcon className="w-5 h-5" />
                <span className="sr-only">Search</span>
                </button>
                <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="w-5 h-5" />
                </button>
            </div>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
            <div className="relative mt-3 md:hidden">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <SearchIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                </div>
                <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."/>
            </div>
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-black md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-black dark:bg-gray-900 dark:border-gray-700">
                 {navBarItems.map(item => (
                    <li key={item.id}>
                        <Link
                            to={item.href}
                            className="block py-2 px-3 rounded md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                        >
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
            </div>
        </div>
    </nav>
  );
});

export default NavBar;











