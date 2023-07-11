import React from "react";
import { styled } from "styled-components";
import profile from "./../../../../assets/images/homepage/13330330_Feb-Business_9.jpg";
import wave from "./../../../../assets/images/homepage/Rectangle 4.png"

export default function WhatWeDo() {
  return (
    <>
      <Wrapper>
        <div className="content-wrapper">
        <div className="text-wrapper">
          <button className="secondary-btn">What We Do</button>
          <h2>
            At 360 Real Vista, we bring physical spaces into the digital realm.{" "}
            <br></br>
            <span>
              The cuttingedge technology we use allows us to create immersive 3D
              models of real-world environments, opening the door to a wide
              range of applications:
              <br></br>
              <ul>
                <li>
                  We create and share 3D digital twins of physical spaces.
                </li>
                <li>
                  Our technology uses a combination of specialized 360-degree
                  cameras and artificial intelligence to create accurate and
                  immersive representations of real-world environments.
                </li>
                <li>
                  {" "}
                  We create 3D digital twins for a variety of businesses and
                  organizations, including real estate agents, architects,
                  manufacturers, residential and commercial construction sites,
                  public establishments like hotels, showrooms, retail stores,
                  educational institutions, workplaces, event spaces, tourism
                  attractions, and more.
                </li>
                <li>
                  We offer in-depth analytics, annotation features, multimedia
                  links, and virtual reality integration.
                </li>
                <li>
                  We are a growing company with a lot of potential. We believe
                  that our technology has the power to revolutionize the way we
                  interact with the built world.
                </li>
              </ul>
              Whether you want to offer virtual house tours, a retailer planning
              your store layout, or an insurance company needing detailed
              documentation, 360 Real Vista has the capabilities to
              revolutionize your workflow and enhance your business operations.
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
  color: white;
  padding: 50px 0;
  .content-wrapper{
    max-width: 1440px;
    margin: auto;
    display: flex;
    position: relative;
  }
  .img-wrapper {
    width: 35%;
    padding: 4vw;
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
    width: 65%;
    display: flex;
    flex-direction: column;
    gap: 50px;
    h2 {
      font-weight: 400;
      display: flex;
      gap: 12px;
      flex-direction: column;
      font-size: 30px;
      span {
        font-weight: 300;
        font-size: 18px;
      }
    }
    ul {
      list-style: none;
      padding: 20px;
      li {
        padding-left: 20px;
        position: relative;
        /* padding-bottom: 20px; */
        font-size: 16px;
      }
      li::before {
          content: "";
          height: 6px;
          width: 6px;
          display: inline-block;
          margin-left:10px ;
          margin-right:10px ;
          border-radius: 50%;
          background-color: white;

        }
    }
    .secondary-btn{
        color: white;
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
`;
