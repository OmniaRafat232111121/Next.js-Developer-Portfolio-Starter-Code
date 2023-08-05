import Link from 'next/link'
import React, { useState } from 'react'
import Logo from './Logo'
import { useRouter } from 'next/router';
import { DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, TwitterIcon } from './icons';
import { motion } from 'framer-motion';
const CustomLink=({href, title, className=""})=>{
  const router=useRouter();
  console.log(router)
  
    return(
      <Link href={href} className={`${className} relative group`}>
      {title}
      <span className={`w-0 bg-dark h-[1px] absolute inline-block left-0 -bottom-0.5
       transition-width ease duration-300 group-hover:w-full  ${router.asPath === href ? "w-full":"w-0"}
      `}>
&nbsp;
</span>
      </Link>
    )

}
const CustomMobileLink=({href, title, className="",toggle})=>{
  const router= useRouter();
  const handleCLick=()=>{
    toggle();
    router.push(href);
  }
    return(
      <button onClick={handleCLick} href={href} className={`${className} relative group my-3 text-white`}>
      {title}
      <span className={`w-0 bg-dark h-[1px] absolute inline-block left-0 -bottom-0.5
       transition-width ease duration-300 group-hover:w-full  ${router.asPath === href ? "w-full":"w-0"}
      `}>
&nbsp;
</span>
      </button>
    )

}
const Navbar = () => {
  const [isOpen,setIsOpen]=useState(false);
  const handleClick=()=>{
    setIsOpen(!isOpen);
  }
  return (
    <header className=' realtive w-full px-32 py-8 font-medium flex items-center justify-between'>

      <button  onClick={handleClick} className=' flex-col items-center justify-center hidden lg:flex'>
        <span className={`bg-dark  block h-0.5 w-6 transition-all duration-300 ease-out  rounded-sm ${isOpen ?"rotate-45 translate-y-1" : "-translate-y-0.5"}`}></span>
        <span className={`bg-dark  block h-0.5 w-6  transition-all duration-300 ease-out rounded-sm my-0.5 ${isOpen ? 'opacity-0':'opacity-100'}`}></span>
        <span className={`bg-dark  block h-0.5 w-6  transition-all duration-300 ease-out  rounded-sm ${isOpen ? " -rotate-45 -translate-y-1":"translate-y-0.5"}`}></span>
      </button>
      
     
     <div className='lg:hidden w-full flex justify-between items-center'>
     <nav className='flex  flex-row items-center justify-center text-dark'>
        <CustomLink href="/" title="Home" className='mr-4 '/>
        <CustomLink href="/about" title="About" className='mr-4'/>

        <CustomLink href="/projects" title="Projects" className='mr-4'/>
        <CustomLink href="/articles" title="Articles" className='mr-4'/>


       

      </nav>
     
      <nav className='flex items-center justify-center flex-wrap'>
        <motion.a 
        href="/" 
        target={'_blank'}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}} 
        className='w-6 mr-3'>
          <TwitterIcon/>
        </motion.a>
        <motion.a  
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className='w-6 mr-3'
        href="/"
        target={'_blank'}>
          <GithubIcon/>
        </motion.a>
        <motion.a 
         whileHover={{y:-2}}
         whileTap={{scale:0.9}}  
         className='w-6 mr-3' 
         href="/" 
         target={'_blank'}>
          <LinkedInIcon/>
        </motion.a>
        <motion.a 
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className='w-6 mr-3' 
        href="/"
         target={'_blank'}>
          <PinterestIcon/>
        </motion.a>
        <motion.a  
        className='w-6 mr-3'
         href="/" 
         target={'_blank'}>
          <DribbbleIcon/>
        </motion.a>
        
      </nav>
     </div>
    
{/*mobile*/}
     {isOpen ?(
      <>
      <motion.div
      initial={{scale:0,opacity:0,x:"-50%",y:"-50%"}}
      animate={{scale:1,opacity:1}}
      transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}

       className= {`
      min-w-[70vw] flex flex-col  items-center justify-between fixed  z-10
      top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 rounded-lg backdrop-blur-md py-32 `}>
     <nav className='flex  flex-col items-center justify-center text-dark'>
        <CustomMobileLink href="/" title="Home" toggle={handleClick}/>
        <CustomMobileLink href="/about" title="About"   toggle={handleClick}/>

        <CustomMobileLink href="/projects" title="Projects"  toggle={handleClick}/>
        <CustomMobileLink href="/articles" title="Articles"   toggle={handleClick}/>


       

      </nav>
     
      <nav className='flex items-center justify-center flex-wrap mt-2'>
        <motion.a 
        href="/" 
        target={'_blank'}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}} 
        className='w-6 mr-3 sm:mx-1'>
          <TwitterIcon/>
        </motion.a>
        <motion.a  
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className='w-6 mr-3 sm:mx-1'
        href="/"
        target={'_blank'}>
          <GithubIcon className="bg-light rounded-full"/>
        </motion.a>
        <motion.a 
         whileHover={{y:-2}}
         whileTap={{scale:0.9}}  
         className='w-6 mr-3 sm:mx-1' 
         href="/" 
         target={'_blank'}>
          <LinkedInIcon/>
        </motion.a>
        <motion.a 
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className='w-6 mr-3 sm:mx-1' 
        href="/"
         target={'_blank'}>
          <PinterestIcon/>
        </motion.a>
        <motion.a  
        className='w-6 mr-3 sm:mx-1'
         href="/" 
         target={'_blank'}>
          <DribbbleIcon/>
        </motion.a>
        
      </nav>
     </motion.div>
      </>
      
     ):null}
      <div className=' absolute  translate-x-[-50%] left-[50%] top-2'>
      <Logo />
      </div>
    </header>
  )
}

export default Navbar
