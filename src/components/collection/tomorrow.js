import React from 'react';
import TomorrowCards from './tomorrowCards';
import TomorrowData from './tomorrowData';
import { motion, Variants } from 'framer-motion';

export default function Tomorrow(){
    const cardVariants: Variants = {
        offscreen: {
          y: 150,
          opacity:0,
        },
        onscreen: {
          y: 0,
          opacity:1,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration:2,
            delayChildren: 0.5,
            staggerDirection: -1
          }
        }
      };
    const TomorrowDataSet = TomorrowData.map((data)=>{
        return <TomorrowCards image={data.image} key={data.id} artist={data.artist} song={data.song} album={data.album} duration={data.duration} />
    })
    return (
        <motion.section className='space-y-3' initial="offscreen" variants={cardVariants} whileInView="onscreen" viewport={{ once: true, amount: 0 }} transition={{ ease: "easeOut", duration: 2 }}>
            {TomorrowDataSet}
        </motion.section>
    )
}
