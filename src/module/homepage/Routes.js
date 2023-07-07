import React from 'react'
import { Outlet, Route } from 'react-router-dom'
import Footer from '../../core/common/Footer'
import NOTFOUND404 from '../../core/common/NOTFOUND404'
import HomepageNavbar from '../../core/common/HomepageNavbar'
import { styled } from 'styled-components'
import HomePage from './pages/HomePage'



export const HomepageRoutes=[
<Route path="/" element={<HomePage/>}/>,
  <Route path="/*" element={<NOTFOUND404/>}/>
]

export  function HomePageOutlet() {
  return (
    <>
        <Main>
          <HomepageNavbar/>
        </Main>
        <Outlet/>
        <Footer/>
    
    </>
  )
}
const Main=styled.div`
position:absolute;
top: 0;
width: 100vw;
z-index: 99;
`

