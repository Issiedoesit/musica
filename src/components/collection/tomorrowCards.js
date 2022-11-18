import { motion } from 'framer-motion';
import React from 'react';
import Heart_white_trans from '../../assets/icons/iconly/Heart-white-trans.svg'
import more from '../../assets/icons/more-vertical.svg';




export default function TomorrowCards(props){
    return(
        <motion.section animate={{width: ['1%', '100%']}} transition={{ ease: "easeOut" }} className='bg-collection-dark-blue/[37%] text-white flex flex-row items-center gap-6 lg:justify-between py-3 px-5 rounded-[15px]'>
            <div key={props.id} className='flex flex-row items-center gap-10 min-w-fit md:w-[20%]'>
                <img src={props.image} alt="'album art" className='h-[39px] w-[39px] md:h-[60px] md:w-[60px]' />
                <img src={Heart_white_trans} alt="like" className='hidden md:block'/>
            </div>
            <div className='flex flex-col md:flex-row gap-1 md:gap-4 md:items-center justify-between w-full lg:w-[43%]'>
                <div className='flex flex-row items-center gap-3'>
                    <h2 className='text-xs sm:text-sm md:text-base'>{props.song}</h2>
                    <span className='text-xs sm:text-sm md:text-base'>~</span>
                    <h2 className='text-xs sm:text-sm md:text-base'>{props.artist}</h2>
                </div>
                <h2 className='md:w-[30%] md:text-center text-xs sm:text-sm md:text-base'>{props.album}</h2>
            </div>
            <div className='flex flex-col-reverse lg:flex-row justify-self-end items-end lg:items-center gap-1 lg:gap-0 lg:justify-between lg:w-[33%]'>
                <h2 className='w-[50%] text-right lg:text-center text-xs sm:text-sm md:text-base'>{props.duration}</h2>
                {/* <h2 className='w-[50%] text-end text-3xl'></h2> */}
                <img src={more} alt='more' className='h-6 -mr-4 lg:mx-0'/>
            </div>
        </motion.section>
    )
}