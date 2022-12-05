import { motion } from 'framer-motion';
import $ from 'jquery';
import { React,  useRef, useState, useEffect } from 'react'
import { FaBars, FaTimes, FaPlus, FaMinus } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';





export default function Try(){
    const [icon, setIcon] = useState(<FaBars />)
    const [count, setCount] = useState(0)
    const navRef =  useRef()
    const navToggle = () =>{
        let nav = document.getElementById('nav')
        if (navRef.current.classList.contains('-translate-y-[100%]')){
            nav.classList.remove('-translate-y-[100%]')
            setIcon(<FaTimes />)
        }else{
            nav.classList.add('-translate-y-[100%]')
            setIcon(<FaBars />)
        }
    }
    

    useEffect(() => {
        $.ajax({
            url: 'https://randomuser.me/api/',
            dataType: 'json',
            success: function(data) {
              console.log(data);
              let div = `
                <img src="${data.results[0].picture.large}" alt='user' class="rounded-[50%] w-[128px] sm:my-10 h-[128px] mx-auto aspect-square"/>
                <div class="py-10 font-Quicksand space-y-3">
                    <h1 class="text-2xl font-bold">Name: ${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}</h1>
                    <h1 class="text-xl font-semibold">Gender: <span class="capitalize">${data.results[0].gender}</span></h1>
                    <h1 class="text-xl font-semibold">DOB: ${data.results[0].dob.date.split('-')[0]}-${data.results[0].dob.date.split('-')[1]}-${data.results[0].dob.date.split('-')[2].split('T')[0]}</h1>
                    <h1 class="text-xl font-semibold">Age: ${data.results[0].dob.age}</h1>
                    <h1 class="text-xl font-semibold">Phone: ${data.results[0].phone}</h1>
                    <a href="mailto:${data.results[0].email}" class="text-xl font-semibold">Email: ${data.results[0].email}</a>
                    <h1 class="text-xl font-semibold">PostCode: ${data.results[0].location.postcode}</h1>
                    <h1 class="text-xl font-semibold">Address: ${data.results[0].location.street.number} ${data.results[0].location.street.name}, ${data.results[0].location.city}, ${data.results[0].location.state}, ${data.results[0].location.country}.</h1>
                    <h1 class="text-xl font-semibold peer">Registered: ${data.results[0].registered.date.split('-')[0]}-${data.results[0].registered.date.split('-')[1]}-${data.results[0].registered.date.split('-')[2].split('T')[0]}</h1>
                    <h1 class="text-xl font-semibold hidden peer-hover:block">${data.results[0].registered.age}</h1>
                </div>
              `
              $('#random_user').html(div)
            }
          });
    })

    

    
    
    return(
       <>
         <header>
            <motion.nav id='nav' transition={{ ease: "easeInOut", duration: 10 }} ref={navRef} className='fixed -translate-y-[100%] transition-transform duration-1000 bg-slate-700 flex md:static py-10 flex-col gap-10 md:flex-row md:h-16 items-center justify-between w-full text-white'>
                <NavLink>hi</NavLink>
                <NavLink>hi</NavLink>
                <NavLink>hi</NavLink>
                <NavLink>hi</NavLink>
            </motion.nav>
            <button id='menu' onClick={navToggle} className='fixed right-5 px-3 py-2 bg-slate-700 rounded-md text-white top-5 md:hidden'>
                {icon}
            </button>
        </header>
        <section className='mx-auto flex flex-row items-center pt-40 w-full justify-center'>
        <button className='h-10 w-10 border border-cyan-300 rounded-md flex items-center justify-center' onClick={() => count > 0 ? setCount(prev => prev - 1) : null}><FaMinus /></button>
        <div className='px-5'>
            {count}
        </div>
        <button className='h-10 w-10 border border-cyan-300 rounded-md flex items-center justify-center' onClick={() => setCount(prev => prev + 1)}><FaPlus /></button>
        </section>
        <section id="random_user" className='bg-white rounded-[30px] w-[80%] min-w-[300px] max-w-[750px] mx-auto mt-[20%] h-fit border border-emerald-400 flex flex-col sm:flex-row gap-10 py-10 px-10'>
            
        </section>
       </>
    )
}