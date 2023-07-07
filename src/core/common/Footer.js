import React from 'react'
import { styled } from 'styled-components'
import logo from "./../../assets/images/common/logo.svg"
import meta from "./../../assets/images/common/Facebook.svg"
import instagram from "./../../assets/images/common/Instagram.svg"
import linkedin from "./../../assets/images/common/Linkdin.svg"
import twitter from "./../../assets/images/common/Twitter.svg"
import email from "./../../assets/images/common/Icon.png"
import call from "./../../assets/images/common/Icon (1).png"
import address from "./../../assets/images/common/Icon (2).png"
import { Link } from 'react-router-dom'



export default function Footer() {
  return (
    <Wrapper>
      <div>
        <div className='top'>
        <ul>
          <li>
            <img className='logo' src={email}/>
    
          </li>

          <li className='icon-text'>
          <div className='social'>
              <h4>Follow us on</h4>
              <div>
                <a href="#" className='link'><img src={instagram}/></a>
                <a href="#" className='link'><img src={meta}/></a>
                <a href="#" className='link'><img src={twitter}/></a>
                <a href="#" className='link'><img src={linkedin}/></a>
              </div>
            </div>
          </li>
        </ul>
        </div>
        <div className='bottom'>
          <p >Copyright © CentreLocus | Designed by CentreLocus</p>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper=styled.div`
width:100vw;
position: relative;
background-color: #7634bf;
color: white;
&>div{
  position: relative;
  max-width: 1196px;
  margin: auto;
  p{
  font-size: 14px;
}
.link{
    font-size: 14px;
    text-decoration: none;
    color: white;

  }
  .top{
    ul{
      display: flex;
      list-style: none;
      justify-content: space-between;
      padding-top: 16px;

      &>li{
        display: flex;
        flex-direction: column;
        gap: 20px;
        .logo{
          padding-left: 50px;
        }
        .social{
          padding:10px 0;
          align-items: center;
          h4{
            margin-top: -4px;
          }
          div{
            padding:10px 0;
            display: flex;
            gap: 12px;
          }
        }
      }
    }
    
  }
  .icon-text{
  &>div{
      display: flex;
      gap: 30px;
    }
}
  .bottom{
    padding: 20px 0;
    padding-top: 0;
    border-top: 1px solid  #4E5683;
    p{
      text-align: center;
    }
  }
}


`