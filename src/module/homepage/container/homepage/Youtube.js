import React from "react";
import { styled } from "styled-components";
import profile from "./../../../../assets/images/homepage/company-profile.jpg";

export default function Youtube() {
  return (
    <>
      <Wrapper>
        <div className="img-wrapper">
          <div className="youtube-logo">

          </div>
          <iframe className="iframe" width="560" height="365" src="https://www.youtube.com/embed/r2j06uHgRDU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div className="text-wrapper">
          <h2>
            <br></br>
            <span>
            In today's fast-paced world, visiting properties, manufacturing plants, or other spaces in person can be time-consuming, costly, and sometimes impossible due to geographical constraints. Traditional 2D photos and videos often fail to capture the full essence of a space, leaving you with an incomplete picture.


              <br></br>
              <br></br>
              With our cutting-edge 3D virtual tours, you can now explore any space in lifelike detail without leaving your office or home. Our tours break down geographical barriers, save you time and travel costs. Whether you're a potential homebuyer, a factory owner, or a business seeking a competitive edge, our 3D virtual tours offer a convenient, immersive, and realistic exploration experience.
Step into the future of exploration with us, and experience spaces like never before.
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
  max-width: 1440px;
  .img-wrapper {
    width: 50%;
    display: flex;
    align-items: center;
    padding-left: 4vw;
    position: relative;
    .youtube-logo{
      position: absolute;
      top: 20px;
      left: 20px;
    }
    .iframe{
      border: 5px solid #E8D0FF;
      border-top: 50px solid #E8D0FF;
      border-radius: 10px;


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
  @media screen and (max-width:768px) {
    flex-direction: column-reverse !important;
    .img-wrapper{
      width: 100%;
      justify-content: center;
      padding-left: 10px;
      padding-right: 10px;
    }
    .text-wrapper{
      
      width: 100%;
      gap: 0;
      h2{
        max-width: none;
      }
    }
  }
`;
