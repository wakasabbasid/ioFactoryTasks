import React from 'react'
import Footer from '../footer';
import Header from '../header';
import TopChefs from '../topchefs';
import MainPage from '../mainpage';
const Home= () => {
  return (
    <div className='w-screen  '>

      <Header/>
      <MainPage/>
      <TopChefs/>
      <Footer/>
    </div>
  )
}

export default Home;