import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Navbar = () => {
const navigate = useNavigate();
const isAuthenticated = !!localStorage.getItem('token');
const isShelter = !!localStorage.getItem('role')==="shelter";
const isUser = !!localStorage.getItem('role')==="user";
const isfoster = !!localStorage.getItem('role')==="foster";
const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/login');
};
    return (
        <div>
            <nav className='bg-gray-700 p-4 text-white'>
                <div className='container mx-auto flex justify-between items-center'>
                    <h1 className='text-2xl font-bold'>Pet Adoption</h1>
                    <ul className='flex space-x-4'>
                        <li>
                            <Link to='/' className='hover:text-gray-300'>Home</Link>
                        </li>
                        {isShelter? <li>
                            <Link to='/shelters' className='hover:text-gray-300'>Shelters</Link>
                        </li>: null}
                        {isUser? <li>
                            <Link to='/ApplicationForm' className='hover:text-gray-300'>Application</Link>
                        </li>: null}
                        {isfoster? <li>
                            <Link to='/fosters' className='hover:text-gray-300'>Fosters</Link>
                        </li>: null}
                
                        {isAuthenticated && <li>    
                            <button onClick={handleLogout}>Logout</button>
                        </li>}
                        {!isAuthenticated && <li>    
                            <Link to='/login' className='hover:text-gray-300'>Login</Link>
                        </li>}
                        {!isAuthenticated && <li>    
                            <Link to='/register' className='hover:text-gray-300'>Register</Link>
                        </li>}    
                    </ul>
                </div>


            </nav>
            
        </div>
    );
};

export default Navbar;