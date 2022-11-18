import { motion } from 'framer-motion';
import React from 'react';



export default function NewReleasesCards(props){
    return(
        <section key={props.id} className="songs space-y-2 group relative">
            <img src={props.image} loading='lazy' alt="cover" className='song-art h-[153px] min-w-[153px] rounded-2xl group-hover:scale-100 pointer-events-none'/> 
            <motion.div transition={{ ease: "easeOut", duration: 2 }} className='text-white group-hover:font-bold space-y-2 group-hover:absolute backdrop-blur-sm w-full group-hover:-translate-y-2 group-hover:top-0 group-hover:rounded-[10px] group-hover:h-[153px] group-hover:bg-gradient-to-b group-hover:from-transparent group-hover:to-black/90 group-hover:flex group-hover:flex-col group-hover:justify-end group-hover:pb-10 group-hover:pl-2 transition ease-in-out duration-1000  font-Quicksand font-light'>
                <h1 className='song-title'>{props.song}</h1>
                <h1 className='text-sm artist'>{props.artist}</h1>
            </motion.div>
        </section>
    )
}