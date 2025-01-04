import React from 'react'
import logo from '../assets/fire.svg'
import {Routes, Route, Link} from 'react-router-dom'
import MainPage from '../pages/MainPage';
import ShopPage from '../pages/ShopPage';
import FillerPage from '../pages/FillerPage';
import StoryPage from '../pages/StoryPage';
export default function Header() {
  const handleScroll = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        console.log('success');
      }
    }
  return (
    <>
        <header className='flex flex-wrap flex-row justify-around items-center mx-6 w-auto h-24 
        border-b border-l border-r border-black'>
            <button className='w-40 h-14 text-white bg-red-500'> 
              <Link to="/"> GO BACK </Link>
            </button>
            <ul className='flex flex-wrap mx-20  items-center text-base text-[#222222]'>
                <li className='mr-11 font-bold hover:text-red-500   cursor-pointer'> 
                  <Link to="/story"> STORY </Link>
                </li>
                <li className='mr-11 font-bold hover:text-red-500   cursor-pointer'>
                   <Link to="/shop"> SHOP </Link>
                </li>
                <li className='mr-11 font-bold hover:text-red-500'>
                  <img src={logo} alt="" />
                </li>
                <li className='mr-11 font-bold hover:text-[#8B83F6] cursor-pointer'>
                  <Link to="/filler"> </Link>
                  CONTACT  
                </li>
                <li className='mr-11 font-bold hover:text-[#8B83F6] cursor-pointer'>
                  <Link to="/shop"> WHOLESALE </Link>
                </li>
            </ul>
            <button className='w-40 h-14  text-white bg-red-500'>
              <Link to="/shop"> SALE</Link> 
            </button>
        </header>
    </>
  )
}
