import React from 'react'
import { Outlet, Route } from 'react-router-dom'
import Footer from '../../core/common/Footer'
import NOTFOUND404 from '../../core/common/NOTFOUND404'
import HomepageNavbar from '../../core/common/HomepageNavbar'
import { styled } from 'styled-components'
import HomePage from './pages/HomePage'
import Privacy from '../../core/common/Privacy'
import Cookies from '../../core/common/Cookies'
import Terms from '../../core/common/Terms'



export const HomepageRoutes=[
<Route path="/" element={<HomePage/>}/>,
<Route path="/privacy" element={<Privacy/>}/>,
<Route path="/cookies" element={<Cookies/>}/>,
<Route path="/terms" element={<Terms/>}/>,
<Route path="/*" element={<NOTFOUND404/>}/>
]

export  function HomePageOutlet() {
  return (
    <>

          <HomepageNavbar/>
        <Outlet/>
        <Footer/>
    
    </>
  )
}


