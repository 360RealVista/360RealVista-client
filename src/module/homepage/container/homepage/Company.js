import React from "react";
import { styled } from "styled-components";
import profile from "./../../../../assets/images/homepage/company-profile.jpg";

export default function Company() {
  return (
    <>
      <Wrapper>
        <div className="img-wrapper">
          <img src={profile} />
        </div>
        <div className="text-wrapper">
          <button className="secondary-btn">Company Profile</button>
          <h2>
          360 Real Vista is a pioneering technology company dedicated to transforming the way people interact with the world around them.{" "}
            <br></br>
            <span>
            Using groundbreaking artificial intelligence technology along with manual careful stitching techniques, our team is passionate about unlocking the potential of digital spaces. Our mission is to provide innovative, immersive and user-friendly 3D Virtual Tours that empower businesses and individuals to digitize, market, explore, and interact with their physical spaces like never before.
              <br></br>
              We're not just a technology company, we are visionaries, innovating the future of 3D Virtual Tours exploration and interaction.
            </span>
          </h2>
          <h3></h3>
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  /* width: 100%; */
  position: relative;
  margin: auto;
  display: flex;
  max-width: 1440px;
  .img-wrapper {
    width: 50%;
    padding: 4vw;
    display: flex;
    align-items: center;
    img {
      width: 100%;
      object-fit: contain;
      border-radius: 20px;
    }
  }
  .text-wrapper {
    padding: 4vw;
    width: 50%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 50px;
    h2 {
      font-weight: 400;
      max-width: 600px;
      display: flex;
      gap: 12px;
      flex-direction: column;
      font-size: calc(1.5vw + 12px);
      span {
        font-weight: 300;
        font-size: calc(.5vw + 12px);
      }
    }
  }
  @media screen and (max-width:768px) {
    flex-direction: column-reverse !important;
    .img-wrapper{
      width: 100%;
    }
    .text-wrapper{
      width: 100%;
      gap: 0;
    }
  }

`;
