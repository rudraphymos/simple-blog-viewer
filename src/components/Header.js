import React from "react";
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import Link from "next/link";

const Header = async () => {
  const { getUser } = getKindeServerSession()
  const user = await getUser()
  console.log(user)

  const links = [
    <Link href="/" key="home" className="text-lg hover:text-primary transition-colors duration-200">Home</Link>,
    <Link href="/profile" key="profile" className="text-lg hover:text-primary transition-colors duration-200">Profile</Link>
  ];

  return (
    <nav className="bg-base-100 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-primary">Simple Blog Viewer</Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {links}
              </div>
            </div>
          </div>
          <div className="flex md:hidden">
            <button 
              type="button" 
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" 
              aria-controls="mobile-menu" 
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <div className="hidden md:block">
            {user ? (
              <div className="ml-4 flex items-center md:ml-6">
                <p className="text-sm mr-4 text-gray-300">
                  Welcome, {user?.given_name} {user?.family_name}
                </p>
                <LogoutLink className="px-4 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors">Log Out</LogoutLink>
              </div>
            ) : (
              <div className="ml-4 flex items-center space-x-4">
                <LoginLink className="px-4 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors">Login</LoginLink>
                <RegisterLink className="px-4 py-2 bg-secondary text-white rounded-full hover:bg-secondary-dark transition-colors">Sign Up</RegisterLink>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className="md:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {links}
        </div>
        <div className="border-t border-gray-700 pt-4 pb-3">
          {user ? (
            <div className="flex items-center px-5">
              <div className="ml-3">
                <p className="text-base font-medium leading-none text-gray-700">
                  {user?.given_name} {user?.family_name}
                </p>
                <LogoutLink className="mt-2 block px-4 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors">Log Out</LogoutLink>
              </div>
            </div>
          ) : (
            <div className="px-2 space-y-1">
              <LoginLink className="block px-4 py-2 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors">Login</LoginLink>
              <RegisterLink className="block px-4 py-2 bg-secondary text-white rounded-full hover:bg-secondary-dark transition-colors">Sign Up</RegisterLink>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;