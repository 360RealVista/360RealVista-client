import React from 'react'
import { styled } from 'styled-components'
import youtube from "./../../assets/images/common/icons8-youtube.svg"
import instagram from "./../../assets/images/common/icons8-instagram.svg"
import linkedin from "./../../assets/images/common/icons8-linkedin.svg"



export default function Footer() {
  return (
    <Wrapper>
      <div>
      <hr></hr>

        <ul>
          <li>
            © 2023  360 Real Vista All rights reserved.
          </li>
          <li>
          Privacy Policy
          </li>

          <li className='icon-text'>
          <div className='social'>
                <a href="#" className='link'><img src={instagram}/></a>
                <a href="#" className='link'><img src={youtube}/></a>
                <a href="#" className='link'><img src={linkedin}/></a>
            </div>
          </li>
        </ul>
      </div>
    </Wrapper>
  )
}
const Wrapper=styled.div`
position: relative;
background-color: white;
font-weight: 600;
  &>div{
    max-width: 1200px;
    margin: auto;
    padding: 20px ;
    padding-bottom: 40px;
    hr{
      height: 2px;
      background-color: black;
    }
    ul{
      padding:  0 50px;
      display: flex;
      list-style: none;
      justify-content: space-between;
      padding-top: 16px;
      align-items: center;
      &>li{
        display: flex;
        flex-direction: column;
        gap: 20px;


        .social{
          align-items: center;
          a{
            padding:0 10px ;
            img{
              color: green !important;
              height: 30px;

            }

          }
        }
      }
      li:nth-child(2){
          transform: translate(-50%, 0px);
        }
    }
    
  

}

@media screen and (max-width:768px) {
ul{
  flex-direction: column-reverse  ;
  justify-content: center ;
  align-items: center ;
  gap: 20px;
  li:nth-child(2){
          transform: translate(0%, 0px) !important;
        }

}
}


`