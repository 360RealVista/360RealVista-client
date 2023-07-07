import React from 'react'
import { styled } from 'styled-components'
import banner from "./../../../../assets/images/homepage/banner.avif"


export default function Banner() {
  return (
    <>
        <Wrapper>
            <div className="left">
                <div className="main">
                    <h1>
                    Stand out and let
                    </h1>
                    <h1>
                    us   <span>create</span>your
                    </h1>
                    <h1>
                    Digital <span>Twins</span> 
                    </h1>
                <button className='primary-btn'>Download Now</button>
                </div>
                
            </div>
            <div className="right">
                <img src={banner}/>
            </div>
        </Wrapper>
    
    </>
  )
}

const Wrapper=styled.div`
width: 100%;
margin: auto;
background-image: linear-gradient(to right, black,#320e2c);
display: flex;
position: relative;
height: max-content;
gap: 2vw;
.left{
    width: 50%;
    align-items: center;
    display: flex;
    justify-content: end;
    /* padding-right: 100px; */
    .main{
        color:white;
        h1{
            font-weight: 300;
            font-size: 5vw;
            span{
                font-weight: 600;
            }
            

        }
    }
}
.right{
    width: 50%;
    margin-top: 80px;
    img{
        width: 100%;
        object-fit: contain;
    }
}

`