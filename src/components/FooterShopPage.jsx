import React from 'react'
import pepper from '../assets/pepper.svg'
export default function FooterShopPage() {
  return (
    <footer className='flex flex-wrap pt-6 pb-6 mx-6 w-auto border-l border-b border-r border-black'>
      <div className="anim2 flex flex-wrap mx-6">
        <img className='mr-8' src={pepper} alt="" />
        <p className='text-xl mr-8'> PUT SOME FIRE IN YOUR BELLY </p>
        <img className='mr-8' src={pepper} alt="" />
      </div>
  </footer>
  )
}
