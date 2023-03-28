import React from 'react'
import SideBar from '../components/SideBar'
import Header from '../components/Header'
import Main from '../components/Main'

const Home = () => {
   return (
      <div className="flex">
         <SideBar />
         <div className="flex w-[calc(100% - 280px)]">
            <Header />
            <Main />
         </div>
      </div>
   )
}

export default Home
