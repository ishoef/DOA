import React from 'react';
import { Link, NavLink } from 'react-router';

const Header = () => {
    return (
        <>
            <header className='border-b z-40 bg-white border-b-gray-300'>
                <div className='flex justify-between items-center w-[80%] mx-auto py-3'>
                    <div>
                        {/* <h1 className='text-3xl font-bold text-[#153151]'>Ad-Dirasah</h1> */}
                        <Link to='/' ><img className='w-45 cursor-pointer' src="https://i.ibb.co/0pbD70D4/Vertical-Logo.png" alt="" /></Link>
                    </div>
                    <nav className='flex gap-3 text-[17px] font-semibold'>
                        <NavLink to='/' className={({isActive}) => isActive ? 'border-b-2 border-b-2-[#153151] bg-gray-200 py-2 px-3 rounded' : 'hover:bg-gray-200 py-2 px-3 rounded'}>Home</NavLink>
                        <NavLink to='/courses' className={({isActive}) => isActive ? 'border-b-2 border-b-2-[#153151] bg-gray-200 py-2 px-3 rounded' : 'hover:bg-gray-200 py-2 px-3 rounded'}>Courses</NavLink>
                        <NavLink to='/books' className={({isActive}) => isActive ? 'border-b-2 border-b-2-[#153151] bg-gray-200 py-2 px-3 rounded' : 'hover:bg-gray-200 py-2 px-3 rounded'}>Books</NavLink>
                        <NavLink to='/contact' className={({isActive}) => isActive ? 'border-b-2 border-b-2-[#153151] bg-gray-200 py-2 px-3 rounded' : 'hover:bg-gray-200 py-2 px-3 rounded'}>Contact Us</NavLink>
                    </nav>
                    <div className='flex gap-4'>
                        <Link to='/notAvailable' ><button className='btn bg-[#153151] hover:bg-transparent hover:text-[#153151] text-white rounded-3xl'>Login</button></Link>
                        <Link to='/notAvailable' ><button className='btn bg-[#153151] hover:bg-transparent hover:text-[#153151] text-white rounded-3xl'>SignUp</button></Link>

                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;