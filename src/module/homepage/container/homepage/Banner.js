import React from 'react'
import { styled } from 'styled-components'
import banner from "./../../../../assets/images/homepage/home.png"


export default function Banner() {
  return (
    <>
        <Wrapper>
            
            <div className='top'>
                <h1>
                    <span>
                    Experience Spaces Like Never Before with  
                    </span>
                    <span className='colored'>
                    Our 3D Virtual
                    </span>
                    <span>
                    Tours !
                    </span>
                </h1>
            </div>
            <img className='background' src={banner}/>
   

 
        </Wrapper>
    
    </>
  )
}

const Wrapper=styled.div`
/* width: 100%; */
margin: auto;
position: relative;
height: max-content;
height: 100vh;
.top{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    flex-direction: column;
    padding: 30vh 10px 0 10px;
    h1{
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: calc(3vw + 12px);
        span:nth-child(1){
            text-align: center;
            font-size: calc(2.1vw + 12px);
            
        }
    }
    .colored{
        color: #A14AF9;
    }
}
.background{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -10;
    background-image: linear-gradient(to bottom ,black ,black);
  }
@media screen and (max-width:768px) {
    height: 65vh ;


}



`