import { motion } from 'framer-motion';
import $ from 'jquery';
import { React,  useRef, useState, useEffect, useMemo } from 'react'
import { FaBars, FaTimes, FaPlus, FaMinus, FaSearch } from 'react-icons/fa'
import { NavLink } from 'react-router-dom';
import { BsFillCaretRightFill } from "react-icons/bs";





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
            //   console.log(data);
              let div = `
                <img src="${data.results[0].picture.large}" alt='user' class="rounded-t-[30px] sm:rounded-t-none sm:rounded-l-[30px] w-full h-auto mx-auto"/>
                <div class="px-10 py-10 font-Quicksand space-y-3">
                    <h1 class="text-2xl py-[10px] font-bold space-x-5">${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}</h1>
                    <h1 class="text-xl font-semibold space-x-5"><i class="fa fa-person-half-dress"></i> <span class="capitalize">Gender: ${data.results[0].gender}</span></h1>
                    <h1 class="text-xl font-semibold space-x-5"><i class="fa fa-calendar"></i> <span>DOB: ${data.results[0].dob.date.split('-')[0]}-${data.results[0].dob.date.split('-')[1]}-${data.results[0].dob.date.split('-')[2].split('T')[0]}</span></h1>
                    <h1 class="text-xl font-semibold space-x-5"><i class="fa fa-circle"></i> <span>Age: ${data.results[0].dob.age}</span></h1>
                    <h1 class="text-xl font-semibold space-x-5"><i class="fa fa-phone"></i> <span>Phone: ${data.results[0].phone}</span></h1>
                    <a href="mailto:${data.results[0].email}" class="text-xl font-semibold space-x-5"><i class="fa fa-envelope"></i> <span>Email: ${data.results[0].email}</span></a>
                    <h1 class="text-xl font-semibold space-x-5"><i class="fa-solid fa-signs-post"></i> <span>PostCode: ${data.results[0].location.postcode}</span></h1>
                    <h1 class="text-xl font-semibold space-x-5"><i class="fa fa-address-book"></i> <span>Address: ${data.results[0].location.street.number} ${data.results[0].location.street.name}, ${data.results[0].location.city}, ${data.results[0].location.state}, ${data.results[0].location.country}.</span></h1>
                    <h1 class="text-xl font-semibold space-x-5 peer"><i class="fa-solid fa-user-plus"></i> <span>Registered: ${data.results[0].registered.date.split('-')[0]}-${data.results[0].registered.date.split('-')[1]}-${data.results[0].registered.date.split('-')[2].split('T')[0]}</span></h1>
                    <h1 class="text-xl font-semibold space-x-5 hidden peer-hover:block"><span>${data.results[0].registered.age}</span></h1>
                </div>
              `
              $('#random_user').html(div)
            }
          });
    },[navRef])
    const [name, setName] = useState('')
    const [searchColor, setSearchColor] = useState('green')
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResultCount, setSearchResultCount] = useState(0)
    const InputRef = useRef(null)
    
    const handleChange = ()=>{
        const valueInput = InputRef.current.value;
        setName(valueInput)
    }
    const handleSearch = (event)=>{
        const searchInput = event.target.value;
        setSearchTerm(searchInput)
    }
    
    useEffect(() => {
        setSearchResultCount($('#searchList').children('li').length)
        if($('#searchList').children('li').length > 0){
            setSearchColor('green')
        }else{
            setSearchColor('red')
        }
    }, [searchTerm])
    

    const skills = ['HTML', 'CSS', 'Javascript']
    const searchResult = useMemo(() => {
        return skills.filter((s)=> s.toLowerCase().includes(searchTerm.toLowerCase()))
    }, [searchTerm])

    const [themeColor, setThemeColor] = useState('red')

    const changeTheme = () =>{
        $('#nav').css('background-color', themeColor)
        $('#menu').css('background-color', themeColor)
    }

    changeTheme()

    useEffect(() => {
      if (count === 0){
        setThemeColor('Green')
      }else if(count === 1){
        setThemeColor('cornflowerblue')
      }else if(count === 3){
        setThemeColor('orange')
      }
    
      return () => {
        setThemeColor('red')
      }
    }, [count])
    


    return(
       <>
         <header className='z-[250]'>
            <motion.nav id='nav' transition={{ ease: "easeInOut", duration: 10 }} ref={navRef} className='fixed -translate-y-[100%] md:-translate-y-0 px-20 transition-transform duration-1000 z-[200] flex md:static py-10 flex-col gap-10 md:flex-row md:h-16 items-center justify-between w-full text-white'>
                <NavLink>hi</NavLink>
                <NavLink>hi</NavLink>
                <NavLink>hi</NavLink>
                <NavLink>hi</NavLink>
            </motion.nav>
            <button id='menu' onClick={navToggle} className='fixed right-5 px-3 py-2  rounded-md text-white top-5 md:hidden z-[250]'>
                {icon}
                <p className='hidden'>Menu</p>
            </button>
        </header>
        <section className='mx-auto flex flex-row items-center pt-40 w-full justify-center'>
        <button className='h-10 w-10 border border-cyan-300 rounded-md flex items-center justify-center shadow-md' onClick={() => count > 0 ? setCount(prev => prev - 1) : null}><FaMinus /><p className='hidden'>Decrease</p></button>
        <div className='px-5 text-2xl font-Quicksand font-bold text-slate-900 bg-cyan-300 shadow-inner shadow-slate-400'>
            {count}
        </div>
        <button className='h-10 w-10 border border-cyan-300 rounded-md flex items-center justify-center shadow-md' onClick={() => setCount(prev => prev + 1)}><FaPlus /><p className='hidden'>Increase</p></button>
        </section>
        <section id="random_user" className='shadow-md bg-white rounded-[30px] w-[80%] min-w-[300px] max-w-[750px] mx-auto my-[10%] h-fit border border-emerald-400 flex flex-col sm:flex-row gap-10 sm:gap-0 pb-10 sm:pb-0'>
                <div className='template-img rounded-t-[30px] w-full sm:w-[50%] sm:rounded-t-none sm:rounded-l-[30px] h-[400px] sm:h-auto mx-auto'>

                </div>
                <ul className="template-content px-10 sm:px-5 py-10 font-Quicksand w-full sm:w-[50%]">
                    <li className='template-para'></li>
                    <li className='template-list'></li>
                    <li className='template-list'></li>
                    <li className='template-list'></li>
                    <li className='template-list'></li>
                    <li className='template-list'></li>
                    <li className='template-list'></li>
                    <li className='template-list'></li>
                    <li className='template-list'></li>
                </ul>
        </section>
        <section id="" className='bg-white rounded-[30px] w-[80%] min-w-[300px] max-w-[750px] mx-auto my-[10%] h-fit border border-emerald-400 flex flex-col sm:flex-row gap-10 py-10 px-10'>
            <input ref={InputRef} onChange={handleChange} id='name' placeholder='Name' className='ring ring-red-500 px-4 py-2 rounded-md'/>
            <p>My name is: {name}</p>
        </section>
        <section id="" className='bg-white rounded-[30px] w-[80%] min-w-[300px] max-w-[750px] mx-auto my-[10%] h-fit border border-emerald-400 flex flex-col sm:flex-row gap-10 py-10 px-10'>
            <input id='city' defaultValue="Ilorin" placeholder='City' className='ring ring-red-500 px-4 py-2 rounded-md'/>
            <p>My weather is: </p>
        </section>
        <section id="" className='bg-white rounded-[30px] w-[80%] min-w-[300px] max-w-[750px] mx-auto my-[10%] h-fit border border-emerald-400 flex flex-col gap-10 py-10 px-10'>
            <p>Your search "{searchTerm}" returned {searchResultCount} results</p>
            <label className='w-full relative'>
                <input onChange={handleSearch} type='search' placeholder='Search...' className='pl-12 ring ring-green-500 w-full px-4 py-2 rounded-md'/>
                <div className='absolute top-[50%] -translate-y-[50%] left-4'><FaSearch color={searchColor}/></div>   
            </label>
            <p>My skills are: {name}</p>
            <ul id='searchList' className='space-y-2'>
                {searchResult.map((skill, index)=>{
                    let skillId = "skill"+index
                    return <li key={index} id={skillId}><BsFillCaretRightFill className='inline-block' color='green'/> <span className='inline-block'>{skill}</span></li>
                })}
            </ul>
        </section>
        
       </>
    )
}