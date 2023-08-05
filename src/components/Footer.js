import Link from 'next/link'
import React from 'react'
import Layout from './Layout'

const Footer = () => {
  return (
    <footer className='border-t-2 border-solid border-dark w-full font-medium 
    px-2 py-2'>
       <Layout className='flex items-center justify-between '>
       <span>{new Date().getFullYear()} &copy; All Right Reserved</span>
        <div className=' font-semibold '> Build with <Link className="underline" href="/">CodeBook</Link></div>
        <Link href="/">Say Hello</Link>
       </Layout>
    </footer>
  )
}

export default Footer
