import React from 'react'
import { Outlet } from 'react-router-dom'
import HeroSection from './HeroSection'
import Content from './Content'
import FooterSection from './FooterSection'

const HomePage = () => {
  return (
    <div>
      <Outlet/>
      <HeroSection/>
      <Content/>
      <FooterSection/>
    </div>
  )
}

export default HomePage
