import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className='h-[50px] px-5 shadow-md bg-gray-500 text-white'>
            <div className='container mx-auto flex justify-between items-center h-[50px]'>
                <h3 className='font-bold'>Users Dashboard</h3>
                <span>
                    <Link to='/' className='mr-2'>Home</Link>
                </span>
            </div>
        </nav>
    );
};

export default Navigation;