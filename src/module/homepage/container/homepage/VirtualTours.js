import React from 'react'
import { styled } from 'styled-components'
import profile from "../../../../assets/images/homepage/Macbook Pro.png"

export default function VirtualTours() {
  return (
    <Wrapper>
        <h2 className='sub-title'>Immerse yourself in realistic 3D Virtual Tours from anywhere in the world.
 Market your business with innovative 3D tours.</h2>
        <div className="main">
        <div className="text-wrapper">
            <span>
              <ul>
                <li>
                  <span/>

                  Save Time and Money on Travel.
                </li>
                <li>
                <span/>
                Explore spaces at your own pace, anytime, anywhere.
                </li>
                <li>
                <span/>

                Visit spaces virtually, eliminating health and safety concerns.
                </li>
                <li>
                <span/>

                Experience every detail of a space beyond traditional views.
                </li>

              </ul>

            </span>
        </div>
        <div className="img-wrapper">
          <img src={profile} />
        </div>


        </div>


    </Wrapper>
  )
}

const Wrapper=styled.div`
position: relative;
background-image: linear-gradient(to bottom ,#8948F3,white);
padding-bottom: 92px;
.main{
    max-width: 1440px;
    margin: auto;
    display: flex;
    position: relative;
    align-items: center;


}
.img-wrapper {
    width: 50%;
    padding-left: 2vw;
    display: flex;
    align-items: center;


    img {
      width: 100%;
      object-fit: cover;
      border-radius: 20px;
      max-height: 600px;

    }
  }
  .text-wrapper {
    padding: 4vw;
    padding-right: 2vw;
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 50px;
        span {
          font-weight: 400;
          display: flex;
          gap: 12px;
          flex-direction: column;
          font-size: 30px;
        font-weight: 300;
        font-size: 18px;
    }
    ul {
      list-style: none;
      padding: 20px;
      border-radius: 50px;
      background-color: #E5E0EE;
      padding-top: 4vw;
      font-weight: 600;
      color: #26055D;
      padding-bottom: 4vw;
      display: flex;
      gap: 2vw;
      flex-direction: column;


      li {
        display: flex;
        padding-left: 20px;
        position: relative;
        font-size: 18px;

      }
      span{
        margin-top: 6px;
      }
      span::before {
          content: "";
          height: 6px;
          width: 6px;
          display: inline-block;
          margin-left:10px ;
          margin-right:10px ;
          border-radius: 50%;
          background-color: black;

        }
    }
    .secondary-btn{
        color: black;
    }
  }
 .sub-title{
            font-size: calc(1.5vw + 12px);
            text-align: center;
            margin: auto;
            max-width: 850px;
            padding: 92px 20px;
            padding-bottom:0 ;
            margin-bottom: 92px;
           flex: 1;
            position: relative;
            color: white;
     
}
@media screen and (max-width:768px) {
  .main{
    flex-direction: column !important;
    .img-wrapper{
      width: 100%;
    }
    .text-wrapper{
      width: 100%;
      padding-right: 4vw ;

    }
  }
  .sub-title{
    margin-bottom: 10px !important;
  }
  ul{
    border-radius: 10px !important;
    padding: 10px 0 !important;
  }
  li{
    span{
      display: none !important;
    }
  }
}




`







