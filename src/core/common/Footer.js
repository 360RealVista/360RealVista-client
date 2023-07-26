import React from 'react'
import { styled } from 'styled-components'
import youtube from "./../../assets/images/common/icons8-youtube.svg"
import instagram from "./../../assets/images/common/icons8-instagram.svg"
import linkedin from "./../../assets/images/common/icons8-linkedin.svg"
import meta from "./../../assets/images/common/icons8-facebook.svg"
import twitter from "./../../assets/images/common/icons8-twitter.svg"
import { scrollTOId } from '../utils'
import { Link } from 'react-router-dom'



export default function Footer() {
  return (
    <Wrapper>
      <div>
      <hr></hr>
        <ul>
          <li>
            © 2023  360 Real Vista All rights reserved.
          </li>
          <li className='flex-1'></li>
          <li>

          <Link to="/privacy" className='border-right'>
          Privacy
          </Link>
          </li>
          <li>
            
          <Link to="/terms" className='border-right'>
           Terms 
          </Link>
          </li>
          <li>
            
          <Link to="/cookies">
          Cookies
          </Link>
          </li>
          <li className='flex-1'></li>

          <li className='icon-text'>
          <div className='social'>
                <a href="https://twitter.com/360RealVista" target='_blank' className='link'><img src={twitter}/></a>
                <a href="https://www.linkedin.com/company/360-real-vista" target='_blank'className='link'><img src={linkedin}/></a>
                <a href="https://www.facebook.com/profile.php?id=100094343658163 " target='_blank' className='link'><img src={meta}/></a>
                <a href="https://instagram.com/360realvista?igshid=MjEwN2IyYWYwYw==" target='_blank' className='link'><img src={instagram}/></a>
                <a href="https://youtube.com/@360RealVista" target='_blank' className='link'><img src={youtube}/></a>
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
      /* justify-content: space-between; */
      padding-top: 16px;
      align-items: center;
      &>li{
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding-right:12px ;
        position: relative;

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
    .border-right{
      &::after{
        content: "";
        position: absolute;
        top: 3px;
        right: 3px;
        height: 16px;
        width: 2px;
        background-color: black;
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