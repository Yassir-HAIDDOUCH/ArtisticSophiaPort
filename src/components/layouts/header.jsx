import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navigation = [
    { name: "Home", path: "/" },
    { name: "About", path: "/AboutMe" },
    { name: "Projects", path: "/Projects" },
    { name: "Contact", path: "/ContactMe" },
];

function header() {

    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation(); // Get current route path

    return (

        <nav className={`min-w-full ${location.pathname === '/' ? 'fixed' : 'sticky'} bg-primary-light top-0 z-10`}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex-shrink-0">
                    <img className="h-12 w-12 select-none" src="/logo/logo.png" alt=" Logo" />
                    </div>
                    <div className="flex items-center">
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.path}
                                        className={`rounded-md select-none px-3 py-2 pb-3 text-md font-medium transition duration-300 ${item.path === location.pathname ? 'bg-primary/90 hover:bg-primary text-white' : 'text-nav hover:text-white hover:bg-primary/50'
                                            }`}
                                        aria-current={item.path === location.pathname ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                            className="relative inline-flex items-center justify-center rounded-md bg-primary/90 p-2 text-white hover:bg-primary focus:outline-none focus:ring-offset-orange-500"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMobileMenuOpen ? (
                                <i className="ri-close-large-line text-xl"></i>
                            ) : (
                                <i className="ri-menu-fill text-xl"></i>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden space-y-1 px-2 pb-3 pt-2 sm:px-3">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            to={item.path}
                            className={`block rounded-md px-3 py-2 select-none text-base font-medium transition duration-1000 ${item.path === location.pathname ? 'bg-primary text-white' : 'hover:bg-primary/90 text-nav'
                                }`}
                            aria-current={item.path === location.pathname ? 'page' : undefined}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>


    );
}

export default header;