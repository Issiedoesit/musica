import React from 'react';
import Logo from './../assets/logos/logo.svg'
import { motion } from "framer-motion";
import searchIcon from './../assets/icons/search.svg'



export default function SearchMenu(){
   function handleClick(e){
       e.preventDefault()
    const menu = document.getElementById('menu')
        menu.addEventListener('click', ()=>{
        const menu_up = document.getElementById('menu_up')
        const menu_down = document.getElementById('menu_down')
        menu_up.classList.toggle('active-nav')
        menu_down.classList.toggle('active-nav-b')
        const nav = document.querySelector('nav')
        nav.classList.toggle('-translate-x-[150%]')
    })
   }
    return(
        <motion.div className='w-full flex flex-row items-center justify-between gap-10 sticky md:static top-0 z-50 bg-dark-blue'>
            <div className="flex md:hidden flex-row items-center gap-10">
                <svg id="menu" onClick={handleClick} className='group cursor-pointer z-[100]' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_107_495)">
                    <path id='menu_up' className='group-hover:stroke-sec-yellow transition-color duration-500 ease-in-out' d="M4 8H20" stroke="#EFEEE0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path id='menu_down' className='group-hover:stroke-sec-yellow transition-color duration-500 ease-in-out' d="M4 16H20" stroke="#EFEEE0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_107_495">
                    <rect width="24" height="24" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
                <img src={Logo} alt='logo' className='w-[30px] h-[30px]' />
            </div>
            <label className='relative'>
                <img src={searchIcon} alt="search" className='absolute top-[50%] -translate-y-[50%] h-5 w-5'/>
                <motion.input type="search" name="search" id="search" placeholder='Search artists' className='pt-[26px] pl-10 outline-none text-white pb-[29px] w-10 hover:w-full transition-all duration-500 md:w-full bg-dark-blue'/>
            </label>
    </motion.div>
    )
};