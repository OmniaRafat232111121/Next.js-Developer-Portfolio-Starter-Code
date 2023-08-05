import Link from 'next/link'
import React from 'react';
import { motion } from 'framer-motion';
const MotionLink=motion(Link);
const Logo = () => {
  return (
    <div className='flex items-center justify-center'>
      <MotionLink href="/" className='bg-dark text-light rounded-full flex items-center justify-center w-16 h-16 font-bold text-2xl'
      whileHover={{
        backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
        transition:{duration:1,repeat:Infinity},
        scale:1.5
        }}>
        CB</MotionLink>
    </div>
  )
}

export default Logo
