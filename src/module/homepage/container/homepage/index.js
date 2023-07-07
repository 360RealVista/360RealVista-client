import React from 'react'
import Banner from './Banner'
import Company from './Company'
import WhatWeDo from './WhatWeDo'
import Request360SiteVisit from './Request360SiteVisit'
import TransitionsModal from './FormModal'

export default function Index() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
    <Banner/>
    <Company/>
    <WhatWeDo/>
    <Company/>
    <Request360SiteVisit setOpen={setOpen}/>
    {/* modals */}
    <TransitionsModal open={open} setOpen={setOpen}/>
    
    </>
  )
}
