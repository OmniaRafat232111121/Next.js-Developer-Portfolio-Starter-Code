import React from 'react'

const Layout = ({children,className=""}) => {
  return (
    <div className={`w-full h-full inline-block z-0 p-32  xl:p-24 lg:16 md:p-12   ${className}`}>
     {children}
    </div>
  )
}

export default Layout
