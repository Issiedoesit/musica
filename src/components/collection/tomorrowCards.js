import { motion } from 'framer-motion';
import React from 'react';
import Heart_white_trans from '../../assets/icons/iconly/Heart-white-trans.svg'
import more from '../../assets/icons/more-vertical.svg';




export default function TomorrowCards(props){
    return(
        <motion.section animate={{width: ['1%', '100%']}} transition={{ ease: "easeOut" }} className='bg-collection-dark-blue/[37%] text-white flex flex-row items-center justify-between py-3 px-5 rounded-[15px]'>
            <div key={props.id} className='flex flex-row items-center gap-10 w-[20%]'>
                <img src={props.image} alt="'album art" className='h-[60px] w-[60px]' />
                <img src={Heart_white_trans} alt="like"/>
            </div>
            <div className='flex flex-row items-center justify-between w-[43%]'>
                <div className='flex flex-row items-center gap-3'>
                    <h2 className=''>{props.song}</h2>
                    <span>~</span>
                    <h2>{props.artist}</h2>
                </div>
                <h2 className='w-[30%] text-center'>{props.album}</h2>
            </div>
            <div className='flex flex-row items-center justify-between w-[33%]'>
                <h2 className='w-[50%] text-center'>{props.duration}</h2>
                <h2 className='w-[50%] text-end text-3xl'></h2>
                <img src={more} alt='more' className='h-6'/>
            </div>
        </motion.section>
    )
}