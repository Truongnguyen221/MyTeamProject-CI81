import React from 'react'
import SideBar from '../../layouts/SideBar'
import Header from '../../layouts/Header'
import NewsComponent from '../../components/News'
// import NewsComponent from '../components/News'
// import WeatherComponent from '../components/Weather'

const Home = () => {
   return (
      <div className="min-h-screen">
         <div className="container mx-auto flex max-w-[1400px]">
            <SideBar />
            <div className="ml-auto w-[calc(100%-280px)]">
               <Header />
               <NewsComponent />
            </div>
         </div>
      </div>
   )
}

export default Home
