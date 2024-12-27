import React from "react";


const Footer = () => {

  return (
    <footer
      className={`text-gray-600 bg-gradient-to-t from-primary-light pt-10 to-primary-light/5 body-font ${location.pathname === '/' ? 'fixed' : 'sticky'} bottom-0 z-10 w-full  `}
    >
      <div className="w-full px-5 py-3 flex items-center sm:flex-row flex-col">
        <a
          className="flex title-font font-medium items-center justify-center text-secondary/80"
          href="/"
        >
          <img className="h-8 w-8 select-none" src="/logo/logo.png" alt=" Logo" />
        </a>
        <p className="text-sm text-secondary sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-nav/50 sm:py-2 sm:mt-0 mt-4">
          © 2025 Artistic Sophia
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        
          <a className="ml-3 text-secondary hover:text-blue-400" href="https://x.com/_Sophia_1t" target="_blank">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="ml-3 text-secondary hover:text-[#f201b9]" href="https://www.instagram.com/_sophia_1.s/" target="_blank">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
         
        </span>
      </div>
    </footer>
  );
};

export default Footer;
