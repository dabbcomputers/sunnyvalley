import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderOne from '@/components/sections/headers/headerOne'
import FooterTwo from '@/components/sections/footers/footerTwo'
import FooterOne from '@/components/sections/footers/footerOne'

const LayoutThree = () => {
  return (
    <>
      <HeaderOne />
      <Outlet/> 
      <FooterOne/>
    </>
  )
}

export default LayoutThree