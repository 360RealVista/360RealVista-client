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
                Let Us Create Your
                    </span>
                    <span className='colored'>
                    Digital Twins For
                    </span>
                    <span>
                     You.
                    </span>
                </h1>
            </div>
            <img className='background' src={banner}/>
   

 
        </Wrapper>
    
    </>
  )
}

const Wrapper=styled.div`
width: 100%;
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
    padding-top: 25vh;
    h1{
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 4vw;
        span:nth-child(1){
            font-size: 4.5vw;
            
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



`