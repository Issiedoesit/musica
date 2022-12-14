import React from 'react';
import Heart_orange from './../assets/icons/iconly/Heart-orange.svg'
import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom';





export default function ChartsCards(props){
    return(
        <motion.section animate={{ opacity: ['0', '1'], scale: ['0', '1']}} transition={{ ease: "easeOut", duration: 2 }} className='relative md:static'>
            <NavLink id={props.id} to='/chart' className="chart-section flex flex-col md:flex-row gap-4 p-4 rounded-[20px] min-w-[250px] w-full bg-dark-blue-alt md:items-center">
                <img src={props.image} alt="chart cover" className='h-[60px] w-[60px]'/>
                <div className='text-white md:pl-4  w-10/12 space-y-1'>
                    <h2>{props.name}</h2>
                    <p className='text-xs'>{props.composer}</p>
                    <p className='text-xs'>{props.duration}</p>
                </div>
                <div className='p-3 rounded-[50%] cursor-pointer justify-self-end absolute top-4 right-4 md:static  border border-white/10'>
                    <img src={Heart_orange} alt="like" />
                </div>
            </NavLink>
        </motion.section>
    )
}