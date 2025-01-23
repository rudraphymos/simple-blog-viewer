import React from 'react';
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

const page = () => {
    return (
        <div className="hero min-h-screen bg-[url('/path/to/your/background-image.jpg')] bg-cover bg-center flex justify-center items-center">
            <div className="bg-white bg-opacity-80 p-10 rounded-lg shadow-xl text-center max-w-lg mx-auto">
                <h1 className="text-4xl font-extrabold mb-6 text-primary">Welcome to Our Platform</h1>
                <p className="text-lg text-gray-600 mb-8">Join us or log in to continue your journey.</p>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <LoginLink 
                        className="btn btn-lg btn-primary text-white transition duration-300"
                        >
                        Login
                    </LoginLink>
                    <RegisterLink 
                        className="btn btn-lg btn-secondary text-white transition duration-300"
                    >
                        Sign Up
                    </RegisterLink>
                </div>
            </div>
        </div>
    );
};

export default page;