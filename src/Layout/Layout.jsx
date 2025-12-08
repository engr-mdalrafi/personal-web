import React from 'react'
import { Outlet } from 'react-router'
import Navber from '../compunent/UI/Navber'
import Footer from '../compunent/UI/Footer'

const Layout = () => {
  return (
    <>
        <Navber/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout
