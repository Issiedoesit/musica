import React from 'react';
import Logo from './../assets/logos/logo.svg'
import ActiveHome from './../assets/icons/iconly/Home-active.svg'
import Logout from './../assets/icons/iconly/Logout.svg'
import music_library from './../assets/icons/vuesax/music-library-2.svg'
import radio from './../assets/icons/vuesax/radio.svg'
import video_horizontal from './../assets/icons/vuesax/video-horizontal.svg'
import frame from './../assets/icons/vuesax/frame.svg'

export default function Nav(){
    return(
        <>
            <nav className='-translate-x-[100%] md:translate-x-0 transition-transform duration-1000 flex z-50 flex-col md:gap-5 bg-dark-blue h-screen fixed w-9/12 md:w-24 md:items-center pb-10 pl-16 md:pl-0 pt-[20%] md:pt-[72px]'>
                <div className="fixed top-7 hidden md:block">
                    <img src={Logo} alt='logo' className='w-[30px] h-[30px]' />
                </div>
                <div className='space-y-10 px-[15px] py-5 rounded-[32px] md:bg-dark-blue-alt flex flex-col'>
                    <div className='flex flex-row items-center gap-10'>
                        <img src={ActiveHome} alt='home' className='w-[30px] h-[30px] cursor-pointer' title="Home"/> 
                        <h1 className='block md:hidden text-white text-lg'>Home</h1>
                    </div>
                    <div className='flex flex-row items-center gap-10'>
                        <img src={music_library} alt='My collections' className='w-[30px] h-[30px] cursor-pointer' title='My collections'/> 
                        <h1 className='block md:hidden text-white text-lg'>My collections</h1>
                    </div>
                    <div className='flex flex-row items-center gap-10'>
                        <img src={radio} alt='radio' className='w-[30px] h-[30px] cursor-pointer' title="Radio"/> 
                        <h1 className='block md:hidden text-white text-lg'>Radio</h1>
                    </div>
                    <div className='flex flex-row items-center gap-10'>
                        <img src={video_horizontal} alt='video' className='w-[30px] h-[30px] cursor-pointer' title="Music videos"/> 
                        <h1 className='block md:hidden text-white text-lg'>Music videos</h1>
                    </div>
                </div>
                <div className='space-y-10 px-[15px] py-[20px] rounded-[32px] md:bg-dark-blue-alt flex flex-col'>
                <div className='flex flex-row items-center gap-10'>
                        <img src={frame} alt='profile' className='w-[30px] h-[30px] cursor-pointer' title="Profile"/> 
                        <h1 className='block md:hidden text-white text-lg'>Profile</h1>
                    </div>
                    <div className='flex flex-row items-center gap-10'>
                        <img src={Logout} alt='logout' className='w-[30px] h-[30px] cursor-pointer' title='Log out' /> 
                        <h1 className='block md:hidden text-white text-lg'>Log out</h1>
                    </div>
                </div>
            </nav>
        </>
    )
}