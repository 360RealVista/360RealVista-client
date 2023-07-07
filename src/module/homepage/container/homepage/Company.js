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
            360 Real Vista is a pioneering technology company dedicated to
            transforming the way people interact with the world around them.{" "}
            <br></br>
            <span>
              Leveraging state-of-the-art technology and groundbreaking design,
              our team is passionate about unlocking the potential of digital
              spaces. Our mission is to provide innovative and user1 friendly
              tools that empower businesses and individuals to digitize and
              explore their physical spaces like never before.
              <br></br>
              We bring a wealth of experience from different fields giving us
              the expertise to tackle challenges and push boundaries in the
              spatial digitization landscape. We're not just a technology
              company, we are visionaries, innovating the future of 3D
              exploration and interaction.
            </span>
          </h2>
          <h3></h3>
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  margin: auto;
  display: flex;
  .img-wrapper {
    width: 50%;
    padding: 4vw;
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
      font-size: 30px;
      span {
        font-weight: 300;
        font-size: 18px;
      }
    }
  }
`;
