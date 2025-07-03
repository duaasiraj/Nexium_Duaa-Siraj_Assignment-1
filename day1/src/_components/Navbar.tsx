import React from 'react';
import Link from 'next/link';
import LogoutButton from './LogoutButton';

const Navbar = () => {
    const session = true;

    return (
        <div className="bg-white shadow-sm">
            <div className="container mx-auto p-4 flex justify-between items-center">
                <Link href="/" className="text-xl font-bold text-blue-800">
                    Contact Manager
                </Link>
                <div className="flex items-center space-x-4">
                    {session ? (
                        <>
                            <Link href="/contact" className="hover:text-blue-800 mr-8">Contacts</Link>
                            <LogoutButton />
                        </>
                    ) : (
                        <>
                            <Link href="/login" className="hover:text-blue-600 mr-5">Login</Link>
                            <Link href="/register" className="hover:text-blue-600">Register</Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
