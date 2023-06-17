import Link from '../Link/Link';
import { useState } from 'react';
import { RoutesType, routes, url } from '../Routes/Routes';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="bg-gray-800 w-full fixed shadow z-10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16  items-center justify-between">
          <div className="items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen ? 'true' : 'false'}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center">
            <Link to={`${url}/`} className="flex flex-shrink-0 items-center">
              <img
                className="block h-12 w-auto lg:hidden"
                src="./img/logo.png"
                alt="Mak"
              />
              <img
                className="hidden h-12 w-auto lg:block"
                src="./img/logo.png"
                alt="Mak"
              />
            </Link>
            <div className="hidden max-[880px]:ml-2 min-[881px]:ml-6 sm:block">
              <div className="flex max-[880px]:space-x-2 min-[881px]:space-x-4">
                {routes.map((route: RoutesType) => (
                  <Link
                    key={route.name}
                    activeClassName="bg-gradient-to-r from-[#54277A] to-[#7D1D21] text-white rounded-md"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md max-[880px]:px-1 min-[881px]:px-3 py-2 text-sm font-medium"
                    to={route.pathname}
                  >
                    {route.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <h1 className="text-white  max-[880px]:text-sm min-[881px]:text-lg font-medium">
            Reusable Components
          </h1>
        </div>
      </div>
      <div
        className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          {routes.map((route: RoutesType) => (
            <Link
              key={route.name}
              activeClassName="bg-red-900 text-white block rounded-md"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              to={route.pathname}
            >
              {route.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
