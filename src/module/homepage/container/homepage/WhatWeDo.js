import React from "react";
import { styled } from "styled-components";
import profile from "./../../../../assets/images/homepage/2023-07-19 16_10_52-Greenshot.jpg";
import wave from "./../../../../assets/images/homepage/Rectangle 4.png"

export default function WhatWeDo() {
  return (
    <>
      <Wrapper id="whatDoWeDo">
        <div className="content-wrapper">
        <div className="text-wrapper">
          <button className="secondary-btn">What Do We Do</button>
          <h2>
          At 360 Real Vista, we bring physical spaces into the digital realm by creating 3D Virtual Tours.
            <br></br>
            <span>
            The cutting-edge technology we use allows us to create immersive 3D models of real-world environments, opening the door to a wide range of applications:
              <br></br>
              <ul>
                <li>
                  <span/>

                  We generate 3D Virtual Tour of physical spaces with Guided Tour, Labels, Notes, and Tags.


                </li>
                <li>
                <span/>

                We generate 3D models that are accessible on any device with an internet connection, no software required.
                </li>
                <li>
                <span/>

                We provide a link that is can be shared on all social media platforms.
                </li>
                <li>
                <span/>

                We provide a QR code that can be easily shared and scanned.
                </li>
            
              </ul>
              Whether you are an industrial plant aiming to improve their maintenance reliability and production, or a business owner aiming to revolutionize your customer experience, we have the capabilities to revolutionize your workflow and enhance your business marketing, operations, and integrity.
            </span>
          </h2>
          <h3></h3>
        </div>
        <div className="img-wrapper">
          <img src={profile} />
        </div>
        </div>
       <img className="background" src={wave} alt="" />

      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  margin: auto;
  background-image: url(${wave});
  display: flex;
  color: black;
  padding: 50px 0;
  .content-wrapper{
    max-width: 1440px;
    margin: auto;
    display: flex;
    position: relative;
  }
  .img-wrapper {
    width: 40%;
    padding: 4vw;
    padding-left: 2vw;
    padding-right: 2vw;
    display: flex;
    align-items: center;

    img {
      width: 100%;
      object-fit: cover;
      border-radius: 20px;
      /* max-height: 600px; */

    }
  }
  .text-wrapper {
    padding: 4vw;
    padding-right: 2vw;
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: 50px;
    h2 {
      font-weight: 400;
      display: flex;
      gap: 12px;
      flex-direction: column;
      font-size: calc(1.5vw + 12px);
      span {
        font-weight: 300;
        font-size: 18px;
      }
    }
    ul {
      list-style: none;
      padding: 20px;
      li {
        display: flex;
        padding-left: 20px;
        position: relative;
        font-size: 16px;
      }
      span{
        margin-top: -5px;
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
  .background{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: -10;
  }
  @media screen and (max-width:1024px) and (min-width: 769px  ) {

      .img-wrapper{
        display: none !important;
      }
      .text-wrapper{
        width: 100%;
        li{
          padding-left: 0 !important;
        }
      }
  }
  @media screen and (max-width:768px) {
    background: #d2dfff;
    .content-wrapper{

      flex-direction: column !important;
      .img-wrapper{
        width: 100%;
      }
      .text-wrapper{
        width: 100%;
        gap: 0;
        ul{

          padding-left: 5px !important;
          li{
            padding-left: 0 !important;
          }
        }
      }
    }
  }




`;


