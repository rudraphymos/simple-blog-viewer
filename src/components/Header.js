import React from "react";
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import Link from "next/link";

const Header = async () => {
  const { getUser } = getKindeServerSession()
  const user = await getUser()
  console.log(user)

  const links = [
    <Link href="/" key="home">Home</Link>,
    <Link href="profile" key="profile">Profile</Link>
  ]

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Simple Blog Viewer</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        {
          user ? <>
            <div className="flex items-center gap-4">
              <p className="text-sm flex items-center space-x-2">
                <span>{user?.given_name} {user?.family_name}</span>
              </p>
              <LogoutLink>Log Out</LogoutLink>
            </div>
          </> : <div><LoginLink>Login</LoginLink> <RegisterLink>Sign Up</RegisterLink></div>
        }
      </div>
    </div>
  );
};

export default Header;