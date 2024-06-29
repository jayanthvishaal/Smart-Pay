import React from 'react'

import {HiMenuAlt4} from 'react-icons/hi';
import {AiOutlineClose} from 'react-icons/ai';

import logo from '../../images/log.png';

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

const Navbar = () => {
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
    <div className='md:flex-[0.5] flex-initial justify-center items-center'>
    <img style={{width:280, height:100, marginLeft: -31 }} src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Market", "Portfolio", "Tutorials", "Analysis"].map((item, index) => (
          <NavBarItem key={item + index} title={item} />
        ))}
        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Logout
        </li> 
      </ul>
    </nav>
  ) 
}

export default Navbar