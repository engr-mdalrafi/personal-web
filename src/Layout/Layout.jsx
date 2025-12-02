import React from 'react'
import { Outlet } from 'react-router'
import Navber from '../compunent/UI/Navber'

const Layout = () => {
  return (
    <>
        <Navber/>
        <Outlet/>
    </>
  )
}

export default Layout
