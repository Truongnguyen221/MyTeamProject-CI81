import React from 'react'
import SideBar from '../../layouts/SideBar'
import Header from '../../layouts/Header'
import Science from '../../components/Science'

const Explore = () => {
   return (
      <div className="min-h-screen">
         <div className="container mx-auto flex max-w-[1400px]">
            <SideBar />
            <div className="ml-auto w-[calc(100%-280px)]">
               <Header />
               <Science />
            </div>
         </div>
      </div>
   )
}

export default Explore
