import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React,{useRef} from 'react'
import article1 from '../../public/images/articles/create loading screen in react js.jpg'
import article2 from '../../public/images/articles/create modal component in react using react portals.png'
import article3 from '../../public/images/articles/form validation in reactjs using custom react hook.png'
import article4 from '../../public/images/articles/pagination component in reactjs.jpg'

import Link from 'next/link'
import Image from 'next/image';
import { motion, useMotionValue } from 'framer-motion';

export const MovingImage=({title,image,link})=>{
    const x=useMotionValue(0);
    const y=useMotionValue(0);
    const imgRef=useRef(null);
    function handleMouse(e){
        // console.log(e.pageX)
        imgRef.current.style.display="inline-block";
        x.set(e.pageX);
        y.set(-10)
    }
    function handleMouseLeave(e){
        // console.log(e.pageX)
        imgRef.current.style.display="none";
        x.set(0);
        y.set(0)
    }
    return(
        <>
<Link
 href={link} 
target='_blank'
onMouseMove={handleMouse}
onMouseLeave={handleMouseLeave}
>
<h2 className=' capitalize text-xl text-bold underline font-semibold' >{title}</h2>  
<Image ref={imgRef} src={image} alt="title" 
className=' z-10 w-[30%] h-auto hidden absolute rounded-lg '
priority
sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
</Link>
        </>
    )

}
export const FeatureArticles =({image,title,time,sumary,link})=>{
    return(
        <>
           <article className='bg-light border border-solid border-dark rounded-md p-10'>
           <motion.div 
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
           href={link} target="_blank"
        className='w-full cursor-pointer overflow-hidden  rounded-lg'
        >
            <Image src={image} alt="title" className="w-full h-auto rounded-md"/>
        </motion.div>
        <Link href={link} target="_blank">
            <h2 className='capitlize font-bold my-2 hover:underline '>{title}</h2>
        </Link>
        <p className='text-sm mb-2'>{sumary}</p>
        <span className='text-primary font-semibold'>{time}</span>
           </article>
        </>
    )

}
export const Articles=({image,title,date,link})=>{
    return(
        <>

        <article  className=' w-full flex  flex-col items-center justify-center  bg-light border border-solid border-dark rounded-md p-10 mb-3'>
               
<div className='flex   justify-between w-full'>
   <MovingImage title={title} image={image} link={link}/>
    <p className='text-primary font-semibold'>{date}</p>
    
</div>


        </article>
        </>
        
     
    );
}
const articles = () => {
  return (
    <div>
    <Head>
        <title>Code | articles Page</title>
        <meta name="desription" content="any description"></meta>
    </Head>
    <main className='w-full flex flex-col items-center justify-center p-12'>
        <Layout className='pt-16'>
            <AnimatedText text="Words Can Change The World!  "
            className='text-6xl 
            text-center mb-3 sm:w-[100%] lg:text-xl sm:text-sm xs:text-xs  2xl:w-[100%] '
             />
                <div className='grid grid-cols-12 gap-24  gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-6 sm:-ml-[30%]'>
            <div className='col-span-6 md:col-span-12  md:w-[60%]'>
                    <FeatureArticles
            title="build a custom pagination component in reactjs from scratch"
            sumary="Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
            time=" 9 min read"
            link="/"
            image={article1}
            />
            </div>
            <div className='col-span-6 md:col-span-12  md:w-[60%]'>
                    <FeatureArticles
            title="build a custom pagination component in reactjs from scratch"
            sumary="Learn how to build a custom pagination component in ReactJS from scratch. Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
            time=" 9 min read"
            link="/"
            image={article1}
            />
            </div>
            <div className='col-span-12 md:col-span-12  md:w-[60%] '>
                <Articles
                 title="build a custom pagination component in reactjs from scratch"
                 date=" 9 min read"
                 link="/"
                 image={article2}
              />
              <Articles
                 title="build a custom pagination component in reactjs from scratch"
                 date=" 9 min read"
                 link="/"
                 image={article3}

              />
                <Articles
                 title="build a custom pagination component in reactjs from scratch"
                 date=" 9 min read"
                 link="/"
                 image={article4}

              />
              <Articles
                 title="build a custom pagination component in reactjs from scratch"
                 date=" 9 min read"
                 link="/"
                 image={article4}

              />

            </div>

           </div>

        </Layout>
    </main>
  
</div>
  )
}

export default articles
