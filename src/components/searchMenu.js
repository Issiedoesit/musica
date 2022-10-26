import React from 'react';
import Logo from './../assets/logos/logo.svg'
import { motion } from "framer-motion";
import searchIcon from './../assets/icons/search.svg'
import { NavLink } from 'react-router-dom';



export default function SearchMenu(){
   function handleClick(e){
        e.preventDefault()
        const nav = document.querySelector('nav')
        // const nav_links = document.querySelectorAll('nav div a')
        const menu = document.getElementById('menu')
        const menu_up = document.getElementById('menu_up')
        const menu_down = document.getElementById('menu_down')
        // nav_links.forEach(nav_link => {
        //     nav_link.addEventListener('click', function(){
        //         if (nav.classList.contains('-translate-x-[150%]')){
        //             alert('open')
        //             menu_up.classList.add('active-nav')
        //             menu_down.classList.add('active-nav-b')
        //             nav.classList.remove('-translate-x-[150%]')
        //         }else{
        //             alert('closed')
        //             menu_up.classList.remove('active-nav')
        //             menu_down.classList.remove('active-nav-b')
        //             nav.classList.add('-translate-x-[150%]')
        //         }
        //     })
        // })
        menu.addEventListener('click', ()=>{
            if (nav.classList.contains('-translate-x-[150%]')){
                menu_up.classList.add('active-nav')
                menu_down.classList.add('active-nav-b')
                nav.classList.remove('-translate-x-[150%]')
            }else{
                menu_up.classList.remove('active-nav')
                menu_down.classList.remove('active-nav-b')
                nav.classList.add('-translate-x-[150%]')
            }
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
                <NavLink to='/'>
                    <img src={Logo} alt='logo' className='w-[30px] h-[30px]' />
                </NavLink>
            </div>
            <label className='relative'>
                <img src={searchIcon} alt="search" className='absolute top-[50%] -translate-y-[50%] h-5 w-5'/>
                <motion.input type="search" name="search" id="search" placeholder='Search artists' className='pt-[26px] pl-10 outline-none text-white pb-[29px] w-10 hover:w-full transition-all duration-500 md:w-full bg-dark-blue'/>
            </label>
    </motion.div>
    )
};