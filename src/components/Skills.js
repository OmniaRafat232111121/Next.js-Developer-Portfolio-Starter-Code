import React from 'react';
import { motion } from 'framer-motion';
const Skill=({name,x,y})=>{
  return(
    <>
      <motion.div 
        
        className='text-white px-6 py-3 
        flex items-center justify-center bg-dark p-2 rounded-full text-xl font-semibold shadow-dark cursor-pointer absolute'
        whileHover={{scale:1.5}}
        initial={{x:0,y:0}}
        whileInView={{x:x,y:y}}
        transition={{duration:1.5}}
        viewport={{once:false}}
        >{name}
        </motion.div>
    </>
  )
}
const Skills = () => {
  return (
    <>
      <h2 className=' w-full mx-auto font-bold text-8xl mt-64  -mt-[50px]  text-center '>Skills</h2>
      <div className='w-full h-screen relative flex items-center justify-center bg-circleLight mt-[80px] '>
   
      <motion.div 
        
        className='text-white  flex items-center justify-center bg-dark p-8 rounded-full 
        text-3xl font-semibold shadow-dark cursor-pointer'
        whileHover={{scale:1.5}}
        >web
        </motion.div>
        <Skill name="HTML" x="-20vw" y="2vw"/>
        <Skill name="CSS" x="-5vw" y="6vw"/>
        <Skill name="TAILWIND CSS" x="-3vw" y="-20vw"/>

        <Skill name="JAVASCRIPT" x="20vw" y="10vw"/>
        <Skill name="REACT JS" x="15vw" y="-10vw"/>
        <Skill name="Anglur" x="-3vw" y="-10vw"/>




      </div>
    </>
  );
};

export default Skills;
