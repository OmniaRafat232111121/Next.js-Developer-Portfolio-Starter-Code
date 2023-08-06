import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import { GithubIcon } from '@/components/icons'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from '../../public/images/projects/crypto-screener-cover-image.jpg'
import TransitionEffect from '@/components/TransitionEffect'
export const FeatureProject=({type,title,image,summary,link,github})=>{
    return(
       <article className='lg:w-[80%]  md:w-[60%] sm:w-[30%]  w-full  flex-row xl:flex-col 
        flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-3'>
        <Link href={link} target="_blank"
        className='w-[40%] cursor-pointer overflow-hidden  rounded-lg lg:w-full'
        >
            <Image src={image} alt="title" className="w-full h-auto"
             priority
             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
        </Link>
        <div className='xl:w-full w-1/2 flex flex-col items-start justify-between pl-6 sm:pt-0'>
            <span className='text-primary font-medium  text-xl xl:text-left'>{type}</span>
            <Link href={link} target="_blank">
            <h2>{title}</h2>
            </Link>
            <p className='text-dark my-2 font-medium'>{summary}</p>
        
        <div className='mt-2 flex items-center'>
        <Link href={github} target='_blank' className='w-10'>
          <GithubIcon />
        </Link>
        <Link href={link} target='_blank' className='ml-3'>
          Visit Project
        </Link>
      </div>
      </div>

       </article>
    )
}
export const Project=({title,type,image,link,github})=>{
    return(
        <>
        <article className='w-full flex  flex-col   items-center justify-center rounded-3xl border border-solid border-dark bg-light shadow-2xl p-3  relative'>
       
        <Link href={link} target="_blank"
        className='w-full cursor-pointer overflow-hidden  rounded-lg '
        >
            <Image  src={image} alt="title" className="w-full h-auto"
             priority
             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"/>
        </Link>
        <div className='w-full flex flex-col items-start justify-between pl-6 lg:pt-6'>
            <span className='text-primary font-medium  text-xl xs:text-base'>{type}</span>
            <Link href={link} target="_blank">
            <h2 className='sm:text-sm'>{title}</h2>
            </Link>
        
        <div className='mt-2 flex items-center justify-between w-full'>
        <Link href={link} target='_blank' className='ml-3 underline'>
          Visit 
        </Link>
        <Link href={github} target='_blank' className='w-10'>
          <GithubIcon />
        </Link>
       
      </div>
      </div>
        </article>
        </>
    )
}
const projects = () => {
  return (
    <div>
        <Head>
            <title>Code | project Page</title>
            <meta name="desription" content="any description"></meta>
        </Head>
        <TransitionEffect/>
        <main className='w-full flex flex-col  items-center justify-center  px-12 '>
            <Layout className='pt-16'>
                <AnimatedText text="Imagination Trumps Knowledge! " 
                className='text-6xl 
            text-center mb-3 sm:w-[100%] lg:text-xl sm:text-sm xs:text-xs  2xl:w-[100%] '/>
                <div className='grid grid-cols-12 gap-24  gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-6 sm:-ml-[30%]'>
                    <div className='col-span-12 md:col-span-9 '>
                        <FeatureProject
                        link="/"
                        github="/"
                        type="feature Project"
                        image={project1}
                        title="Cryprop screen Application"
                        summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                        />
                        
                    </div>
                    <div className='col-span-6 
                     sm:col-span-12  sm:w-[60%]  '>
                        <Project
                         link="/"
                         github="/"
                         type="feature Project"
                         image={project1}
                         title="Cryprop screen Application"
                        />
                        
                    </div>
                    <div className='col-span-6 sm:col-span-12 sm:w-[60%]  '>
                    <Project
                         link="/"
                         github="/"
                         type="feature Project"
                         image={project1}
                         title="Cryprop screen Application"
                        />
                        
                    </div>
                    <div className='col-span-12  md:col-span-9'>
                    <FeatureProject
                        link="/"
                        github="/"
                        type="feature Project"
                        image={project1}
                        title="Cryprop screen Application"
                        summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                        />
                        
                    </div>
                    <div className='col-span-6  sm:col-span-12 sm:w-[60%]'>
                    <Project
                         link="/"
                         github="/"
                         type="feature Project"
                         image={project1}
                         title="Cryprop screen Application"
                        />
                        
                    </div>
                    <div className='col-span-6  sm:col-span-12 sm:w-[60%]'>
                    <Project
                         link="/"
                         github="/"
                         type="feature Project"
                         image={project1}
                         title="Cryprop screen Application"
                        />
                        
                    </div>

                </div>
            </Layout>
        </main>
      
    </div>
  )
}

export default projects
