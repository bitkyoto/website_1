import React from 'react'
import girl from '../assets/girl.jpg'
import frame_filler from '../assets/frame_filler.png'
export default function MainStoryPage() {
  return (
    <div id='story'className='flex flex-wrap box-border h-fit border-l border-r border-b border-black mx-6 w-auto'>
        <div className="left w-1/2 h-fit border-r border-black text-center align-middle">
            <p className='py-[4.9rem] text-7xl'>
                THE STORY BEHIND <br /> THE SOUCE
            </p>
            <img className='m-auto w-full'src= {girl} alt="" />
        </div>
        <div className="right w-1/2 h-fit border-black">
            <img className='m-auto w-full' src={frame_filler} alt="" />
        </div>
    </div>
  )
}
