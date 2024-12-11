import React from 'react'
import Footer from '../components/organisms/footer/Footer'
import Header from '../components/organisms/header/Header'
const Layout = ({children}) => {
  return (
    <>
    <Header/>
    <div className='w-screen'>
        <div className="h-[75vh] w-screen ">
            {children}
        </div>
    </div>
    <Footer />
    </>
  )
}

export default Layout