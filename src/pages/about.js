import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React, { useEffect,useRef } from 'react'
import { useSpring } from 'framer-motion'
import profile from "../../public/images/profile/developer-pic-2.jpg"
import Image from 'next/image'
import { useInView, useMotionValue } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
const AnimateNumber=({value})=>{
    const ref=useRef(null);
    const motionValue=useMotionValue(0);
    const springValue=useSpring(motionValue);
    const isInView=useInView(ref);
    useEffect(()=>{
        if(isInView){
            motionValue.set(value);
        }
    },[isInView,value,motionValue])
    useEffect(()=>{
        springValue.on("change",(latest)=>{
            if(ref.current &&latest.toFixed(0) <= value){
                ref.current.textContent=latest.toFixed(0)
            }
        })
    },[springValue,value])
    return(
        <span ref={ref }>

        </span>
    )
}
const About = () => {
    

  return (
    <>
    <Head>
        <title>About</title>
        </Head>
        <main>
            <Layout className='pt-16'>
                <AnimatedText text="Passion Fuels Purpose! "
                 className='text-6xl 
                 text-center mb-3 sm:w-[100%] lg:text-xl sm:text-sm xs:text-xs  2xl:w-[100%] '/>
         <div className='grid w-full  grid-cols-8 xl:grid-cols-3  md:grid-cols-3 lg:grid-cols-3 gap-16 p-32'>
            <div className='col-span-3  flex flex-col items-start9 justify-start'>
                <h2 className='text-lg font-bold uppercase mb-2 text-dark/70 '>Biography</h2>
                <p className='font-medium '>
                Hi,  CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional, and user-centered digital experiences. With 4 years of experience in the field. I am always looking for new and innovative ways to bring my clients visions to life

                </p>
                <p className='font-medium my-3'>
                I believe that design is about more than just making things 
                look pretty –  about solving problems and creating intuitive, enjoyable experiences for users.
                </p>
                <p className='font-medium my-3'>
                Whether  working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
                </p>
            </div>
            <div className='col-span-3 rounded-2xl  h-max relative border-2 border-solid
             border-dark bg-light p-8'>
              
                   <div>
                   <Image src={profile} alt="code" className="w-full h-auto rounded-2xl"
                   priority
                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
       />
             
                   </div>

            </div>
            <div className='col-span-2 flex flex-col items-end justify-between'>
                <div className='flex flex-col items-end justify-center'>
                   <span className='inline-block text-7xl font-bold'>
                   <AnimateNumber  value="50 "  /> +
                    <h2 className='font-medium capitalize text-dark/75 text-xl xl:mb-6'>Satisfied Clients</h2>

                   </span>
                </div>
                <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                   <AnimateNumber  value="90 " /> +
                    <h2 className='font-medium capitalize text-dark/75 text-xl xl:mb-6'>Satisfied Clients</h2>

                   </span>
                </div>
                <div className='flex flex-col items-end justify-center'>
                <span className='inline-block text-7xl font-bold'>
                   <AnimateNumber  value="100 " /> +
                    <h2 className='font-medium capitalize text-dark/75 text-xl xl:mb-6'>Satisfied Clients</h2>

                   </span>
                </div>
               


            </div>

         </div>
         <Skills/>
         <Experience/>
         <Education/>
            </Layout>
        </main>

  
      
    </>
  )
}

export default About
