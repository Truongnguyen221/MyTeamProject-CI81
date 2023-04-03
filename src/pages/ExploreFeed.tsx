import React from 'react'
import SideBar from '../components/SideBar'
import Header from '../components/Header'
import Feed from '../components/Feed'

const ExploreFeed = () => {
   return (
      <div className="min-h-screen">
         <div className="container mx-auto flex max-w-[1400px]">
            <SideBar />
            <div className="ml-auto w-[calc(100%-280px)]">
               <Header />
               <Feed />
            </div>
         </div>
      </div>
   )
}

export default ExploreFeed
