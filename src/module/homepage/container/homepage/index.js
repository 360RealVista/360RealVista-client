import React from 'react'
import Banner from './Banner'
import Company from './Company'
import WhatWeDo from './WhatWeDo'
import Request360SiteVisit from './Request360SiteVisit'
import TransitionsModal from './FormModal'
import FAQ from './faq'
import PrivacyPolicy from './PrivacyPolicy'
import Youtube from './Youtube'
import Testimonials from './Testiminials'
import Benifits from './Benifits'
import VirtualTours from './VirtualTours'
import FloatingWhatsapp from '../../../../core/common/FloatingWhatsapp'
import { styled } from 'styled-components'
import Statics from './Statics'

export default function Index() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
    <Banner/>
    <VirtualTours/>
    <Company/>
    <WhatWeDo/>
    <Statics/>
    <Youtube/>
    <Benifits/>
    {/* <Testimonials/> */}
    <FAQ/>
    <PrivacyPolicy/>
    <FloatingWhatsapp/>
    <Request360SiteVisit setOpen={setOpen}/>
    <TransitionsModal open={open} setOpen={setOpen}/>
    
    </>
  )
}

