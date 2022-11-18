import { motion } from 'framer-motion';
import React from 'react';
import Heart_white_trans from '../../assets/icons/iconly/Heart-white-trans.svg'
import more from '../../assets/icons/more-vertical.svg';
import $ from "jquery"
import { useEffect} from "react";

// const more_menu_btns = document.querySelectorAll('.more-menu')
// const more_menu_drops = document.querySelectorAll('.more-menu-drop')

// more_menu_btns.forEach((more_menu_btn)=>{
//     more_menu_btn.addEventListener('click', function(){
//         more_menu_btns.nextElementSibling.style.display = 'none'
//         more_menu_btn.nextElementSibling.classList.remove('hidden')
//     })
// })


export default function TomorrowCards(props){
    // const count = useRef('hidden')
    // alert(count.current)
    useEffect(() => {
        // let hide
        // $('.more-menu').each(function(){
        //     hide = 'hidden'
        //     // setDrop(hide)
        //     // setDrop('block')
        //     $(this).on('click', function(){
        //         $('.more-menu-drop').addClass(hide)
        //         if($(this).siblings('.more-menu-drop').css('display') == 'block'){
        //             $(this).siblings('.more-menu-drop').addClass(hide)
        //         }else{
        //             $(this).siblings('.more-menu-drop').removeClass(hide)
        //         }
        //     })
        // })
      })
    const toggleDrop = () => {
    $('.more-menu').each(function(){
        $(this).on('click', function(){
            $('.more-menu').not($(this)).siblings('.more-menu-drop').css('display', 'none')
                if($(this).siblings('.more-menu-drop').css('display') === 'block'){
                    $(this).siblings('.more-menu-drop').css('display', 'none')
                }else{
                    $(this).siblings('.more-menu-drop').css('display', 'block')
                }
        })
    })
}
// componentDidMount() {
//     this.audio = new Audio('sounds/beep.wav')
//     this.audio.load()
//     this.playAudio()
// }

// playAudio() {
//   const audioPromise = this.audio.play()
//   if (audioPromise !== undefined) {
//     audioPromise
//       .then(_ => {
//         // autoplay started
//       })
//       .catch(err => {
//         // catch dom exception
//         console.info(err)
//       })
//   }
// }
    return(
        <motion.section animate={{width: ['1%', '100%']}} transition={{ ease: "easeOut" }} className='songs cursor-pointer bg-collection-dark-blue/[37%] text-white flex flex-row items-center gap-6 lg:justify-between py-3 px-5 rounded-[15px]'>
            <div  className='flex flex-row items-center gap-10 min-w-fit md:w-[20%]'>
                <img src={props.image} alt="'album art" className='song-art h-[39px] w-[39px] md:h-[60px] md:w-[60px]' />
                <img src={Heart_white_trans} alt="like" className='hidden md:block'/>
            </div>
            <audio src={props.preview_url} controls className='hidden preview-url'></audio>
            <div className='flex flex-col md:flex-row gap-1 md:gap-4 md:items-center justify-between w-full lg:w-[43%]'>
                <div className='flex flex-row items-center gap-3'>
                    <h2 className='text-xs sm:text-sm md:text-base song-title'>{props.song}</h2>
                    <span className='text-xs sm:text-sm md:text-base'>~</span>
                    <h2 className='text-xs sm:text-sm md:text-base artist'>{props.artist}</h2>
                </div>
                <h2 className='md:w-[30%] md:text-center text-xs sm:text-sm md:text-base'>{props.album}</h2>
            </div>
            <div className='relative flex flex-col-reverse lg:flex-row justify-self-end items-end lg:items-center gap-1 lg:gap-0 lg:justify-between lg:w-[33%]'>
                <h2 className='w-[50%] text-right lg:text-center text-xs sm:text-sm md:text-base'>{props.duration}</h2>
                {/* <h2 className='w-[50%] text-end text-3xl'></h2> */}
                <img onClick={toggleDrop} src={more} alt='more' className='more-menu peer h-6 -mr-4 lg:mx-0 cursor-pointer'/>
                <div className='more-menu-drop hidden absolute top-8 right-0 bg-black/50 shadow-md backdrop-blur-md p-3 rounded-xl space-y-2 z-20'>
                    <p className='text-white'>Go to artist</p>
                    <p className='text-white'>Go to artist</p>
                </div>
            </div>
        </motion.section>
    )
}