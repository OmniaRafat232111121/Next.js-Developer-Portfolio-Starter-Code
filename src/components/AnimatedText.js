import React from 'react'
import { easeIn, easeInOut, motion } from 'framer-motion'
const quote={
    initial:{
        opacity:0
    },
    animate:{
        opacity:1,
        transition:{
            duration:0.5,
            ease:easeInOut,
            delay:0.5
        }
    }
}
const singleWord={
    initial:{
        opacity:0,
        y:50
    },
    animate:{
        opacity:1,
        y:0,
        transition:{
            duration:0.5
        }
    }
}
const AnimatedText = ({text,className=""}) => {

  return (
    <div className='w-full mx-auto flex items-center justify-center text-center overflow-hidden'>
    <motion.h1
    variants={quote}
    initial="initial"
    animate="animate"
     className={`inline-block w-full text-dark font-bold capitalize
     
      ${className}`}>
        {text.split(" ").map((word,index)=>{
            return(
                <>
                <span
                variants={singleWord}
                initial="initial"
                animate="animate"
                 key={index} className='inline-block '>
                    {word}&nbsp;
                </span>
                </>
            )
        })}
    </motion.h1>
    </div>
  )
}

export default AnimatedText
