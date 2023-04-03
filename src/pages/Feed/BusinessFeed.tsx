import React from 'react'
import SideBar from '../../layouts/SideBar'
import Header from '../../layouts/Header'
import Business from '../../components/Business'

const Explore = () => {
   return (
      <div className="min-h-screen">
         <div className="container mx-auto flex max-w-[1400px]">
            <SideBar />
            <div className="ml-auto w-[calc(100%-280px)]">
               <Header />
               <Business />
            </div>
         </div>
      </div>
   )
}

export default Explore
