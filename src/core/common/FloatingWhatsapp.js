import React from 'react'
import { styled } from 'styled-components';
import whatapp from "../../assets/images/common/icons8-whatsapp.svg"

export default function FloatingWhatsapp() {
  return (
      <>
       <Wrapper href="https://wa.me/+96891998781">
            <img src={whatapp} />
       </Wrapper>
    </>
  )
}

const Wrapper=styled.a`
position: relative;
position:fixed;
right:2vw;
bottom:2vw;
z-index: 999;

img{
    color: green !important;
    height: calc(1.7vw + 40px);

}


`
