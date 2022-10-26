import React from 'react';
import Ellipse2 from './../assets/people/Ellipse2.png';
import Ellipse3 from './../assets/people/Ellipse3.png';
import Ellipse4 from './../assets/people/Ellipse4.png'; 
import Ellipse5 from './../assets/people/Ellipse5.png';
import Ellipse6 from './../assets/people/Ellipse6.png';
import { motion } from "framer-motion";
import musician from './../assets/images/musician.png';
import heart_white from './../assets/icons/iconly/Heart-white.svg';


export default function CuratedPlaylist(){
    return(
        <motion.div  animate={{ opacity: ['0', '1'], scale: ['0.8', '1'], y:['100px', '0px'] }} transition={{ ease: "easeOut", duration: 2 }} className="h-fit sm:h-[373px] w-11/12 mx-auto lg:w-1/2 lg:max-w-[686px] py-[38px] pl-[33px] bg-teal rounded-[40px] relative bg-[url('./assets/patterns/white-smoke.png')] bg-contain bg-right-top bg-no-repeat">
            <motion.img src={musician} alt="musician" className='w-7/12  md:h-[320px] hidden sm:block cursor-pointer bottom-0 right-0 absolute' whileHover={{ scale: ['1', '1.1'], y:['0px', '-16px'], transition:{ ease: "easeOut", duration: 2 } }}/>
            <div className='text-white flex flex-col justify-between h-full space-y-52 sm:space-y-0'>
                <h1 className='font-light'>Curated playlist</h1>
                <div className='space-y-10 flex h-[70%] flex-col justify-between'>
                    <div>
                        <h1 className='text-4xl font-bold'>R & B Hits</h1>
                        <p className='w-10/12 sm:w-1/2 font-light'>
                        All mine, Lie again, Petty call me everyday,
                        Out of time, No love, Bad habit,
                        and so much more
                        </p>
                    </div>
                    <div className='flex flex-row gap-28 items-center relative'>
                        <div className='flex flex-row'>
                            <img src={Ellipse2} className="w-8 h-8 absolute top-[50%] -translate-y-[50%] left-0" alt="person"/>
                            <img src={Ellipse3} className="w-8 h-8 absolute top-[50%] -translate-y-[50%] left-4" alt="person"/>
                            <img src={Ellipse4} className="w-8 h-8 absolute top-[50%] -translate-y-[50%] left-8" alt="person"/>
                            <img src={Ellipse5} className="w-8 h-8 absolute top-[50%] -translate-y-[50%] left-12" alt="person"/>
                            <img src={Ellipse6} className="w-8 h-8 absolute top-[50%] -translate-y-[50%] left-16" alt="person"/>
                        </div>
                        <div className='flex flex-row items-center gap-5'>
                            <img src={heart_white} alt='white heart'/>
                            <p className='font-light'>33k Likes</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </motion.div>
    )
}