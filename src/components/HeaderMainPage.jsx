import React from 'react'
import logo from '../assets/fire.svg'
export default function HeaderMainPage() {
  const handleScroll = (e, sectionId) => {
      e.preventDefault(); // Предотвращаем стандартное поведение ссылки
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  return (
    <>
        <header className='flex flex-wrap flex-row justify-around items-center mx-6 w-auto h-24 
        border-b border-l border-r border-black'>
            <button className='w-40 h-14 text-white bg-red-500'> GO BACK </button>
            <ul className='flex flex-wrap mx-20  items-center text-base text-[#222222]'>
                <li className='mr-11 font-bold hover:text-red-500   cursor-pointer'> 
                  <a href="#" onClick={(e) => handleScroll(e, 'story')}> STORY </a> 
                </li>
                <li className='mr-11 font-bold hover:text-red-500   cursor-pointer'>
                   <a href="#" onClick={(e) => handleScroll(e, 'shop')}> SHOP </a> 
                </li>
                <li className='mr-11 font-bold hover:text-red-500'>
                  <img src={logo} alt="" />
                </li>
                <li className='mr-11 font-bold hover:text-[#8B83F6] cursor-pointer'>
                  CONTACT 
                </li>
                <li className='mr-11 font-bold hover:text-[#8B83F6] cursor-pointer'>
                  <a href="#" onClick={(e) => handleScroll(e, 'shop')}> WHOLESALE </a> 
                </li>
            </ul>
            <button onClick={()=> document.getElementById("shop").scrollIntoView()}className='w-40 h-14  text-white bg-red-500'> SALE </button>
        </header>
    </>
  )
}
