import React from 'react';
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

const page = () => {
    return (
        <div className="hero bg-base-200 min-h-screen flex gap-4 justify-center items-center">
            <LoginLink className='btn'>Login</LoginLink>
            <RegisterLink className='btn'>Sign Up</RegisterLink>
        </div>
    );
};

export default page;