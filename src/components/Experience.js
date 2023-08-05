import React, { useRef } from 'react';
import { useScroll } from "framer-motion";
import {motion} from 'framer-motion'
import LiIcon from './LiIcon';

const Details=({position,company,time,address,work,companyLink})=>{
    const ref=useRef(null)
    return(
        <>
        <li className='my-8 first:mt-0 last:mb-10 w-[60%] mx-auto  flex flex-col items-center justify-between'>
        <LiIcon ref={ref}/>

            <div>
            <h3 className='capitilize font-bold text-2xl'>{position}&nbsp;<a href={companyLink}
            className='text-primary capitlize'
            target='_blank'>@{company}</a></h3>
             <span className='capitilize font-medium text-dark/75'>{time} |{address}</span>
             <p className='font-medium w-full'>{work}</p>
            </div>
        </li>
        </>
    )
}
const Experience = () => {
    const ref=useRef(null);
    const {scrollYProgress}=useScroll({
        target:ref,
        offset:["start end","center start"]

    });

  return (
    <div className=' mt-64 '>
        <h2 className=' font-bold text-8xl mb-3 text-center'>Experience</h2>
        <div  ref={ref} className='w-[75%]  mx-auto relative'>
        <motion.div
        style={{scaleY:scrollYProgress}}
         className='absolute left-8 top-0 w-[4px]  h-[1000px] bg-dark origin-top'/>
            <ul className='w-full flex flex-col items-start justify-between ml-4 origin-top'>
              <Details 
              position="software Engineer"
              address="Mountain View,USA"
              work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
               company="Amazon" time="2022-present"/>
               
                <Details 
              position="software Engineer"
              address="Mountain View,USA"
              work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
               company="Facebook" time="2022-present"/>
                <Details 
              position="software Engineer"
              address="Mountain View,USA"
              work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
               company="Instagram" time="2021-2022"/>
                <Details 
              position="software Engineer"
              address="Mountain View,USA"
              work="Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization."
               company="Twitter" time="2019-2018"/>
            </ul>
            
        </div>
      
    </div>
  )
}

export default Experience
