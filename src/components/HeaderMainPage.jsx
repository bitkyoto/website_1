import React from 'react'
import logo from '../assets/fire.svg'
export default function HeaderMainPage() {
  return (
    <>
        <header className='flex flex-wrap flex-row justify-evenly items-center mx-6 w-auto h-24 
        border-b border-l border-r border-black'>
            <button className='w-40 h-14 text-white bg-red-500'> GO BACK </button>
            <ul className='flex flex-wrap items-center text-sm text-[#222222]'>
                <li className='mr-11'> STORY </li>
                <li className='mr-11'> SHOP </li>
                <li className='mr-11'> <img src={logo} alt="" /></li>
                <li className='mr-11'> CONTACT </li>
                <li className='mr-11'> WHOLESALE </li>
            </ul>
            <button className='w-40 h-14  text-white bg-red-500'> SALE </button>
        </header>
    </>
  )
}
