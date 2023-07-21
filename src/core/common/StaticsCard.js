import React from 'react'
import { styled } from 'styled-components'

export default function StaticsCard({stats,title,para}) {
  return (
    <Wrapper>
        <p className='title'>{title}</p>
        <h2>{stats}</h2>
        <p>{para}</p>
    </Wrapper>
  )
}

const Wrapper =styled.div`
width: 100%;
height: 200px;
position: relative;
margin: auto;
display: flex;
flex-direction: column;
gap: 12px;
padding: 20px;
border: 2px solid white;
border-radius: 10px;
box-shadow: 0 0 10px 5px white;
h2{
    text-align: start  !important;
    font-size: calc(1.5vw + 26px);
}

p{
    text-align: start;
    font-size: 14px;
}
.title{
    font-weight: 600;
}






`