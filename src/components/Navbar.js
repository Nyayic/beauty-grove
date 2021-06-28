import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = ({toggle}) => {
    return (
       <nav className="flex justify-between item-center h-16 bg-yellow-50 text-black relative shadow-md text-2md nav-fixed" role="navigation">
           <Link to='/' className="pl-8 mt-5">Beauty Grove</Link>
           <div className="px-4 cursor-pointer md:hidden mt-5" onClick={toggle}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                </svg>
           </div>
           
           <div className="pr-8 md:block hidden mt-5">
            <Link className='p-4' to='/'>Home</Link>
            <Link className='p-4' to='/about'>About</Link>
            <Link className='p-4' to='/services'>Services</Link>
            <Link className='p-4' to='/stylists'>Stylists</Link>
            <Link className='p-4' to='/contact'>Contact</Link>
            <Link className='p-4' to='/register'>Register</Link>

           </div>
       </nav>
    )
}

export default Navbar;
