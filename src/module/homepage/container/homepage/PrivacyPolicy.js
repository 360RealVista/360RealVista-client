import React from "react";
import { styled } from "styled-components";
import profile from "./../../../../assets/images/homepage/privacy.png";
import wave from "./../../../../assets/images/homepage/Rectangle 4.png"

export default function PrivacyPolicy() {
  return (
    <>
      <Wrapper>
        <div className="content-wrapper">
        <div className="text-wrapper">
          <button className="secondary-btn">Privacy Policy</button>
          <h2>
            <div>
            At 360 Real Vista, we utilize state-of-the-art security protocols to ensure that your 3D models are protected from unauthorized access by applying robust data protection practices.Your 3D models and tours are only accessible to those whom you expressly permit. Our technology allows you to control and monitor who can view your models.
              <br></br>
              <ul>
                <li>
                  <span/>

                  All of our models and infrastructure are hosted by Amazon Web Services (AWS) in a multi-tenancy environment.
                </li>
                <li>
                <span/>

                All communication with our servers use encrypted channels (via HTTPS).
                </li>
                <li>
                <span/>

                All data is encrypted at rest (256-bit AES encryption) and in transit (TLS protocol with 256-bit).
                </li>
                <li>
                <span/>

                Models’ generating software meets the requirements of applicable data privacy laws and regulations, including the CCPA, GDPR, UK GDPR and PIPEDA.
                </li>

              </ul>
              We work tirelessly to protect your critical information with the high level of security you deserve.
            </div>
          </h2>
          <h3></h3>
        </div>
        </div>

      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  margin: auto;
  background: #E8D0FF;
  display: flex;
  color: black;
  padding: 50px 10px;
  .content-wrapper{
    max-width: 1050px;
    margin: auto;
    display: flex;
    position: relative;
  }

  .text-wrapper {
      display: flex;
    flex-direction: column;
    h2 {
      font-weight: 400;
      flex-direction: column;
      display: block;
      margin-left:auto ;
      
      &>div {
        /* font-weight: 500; */
        font-size: calc(.6vw + 8px);
        text-align: justify;
      }
    }
    ul {
      list-style: none;
      padding: 20px;
      li {
        display: flex;
        padding-left: 1vw;
        position: relative;
        font-size: calc(.4vw + 8px);
        padding-bottom: 10px;
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
        display: block;
        margin: auto;
        margin-bottom: 30px;//do not remove it as the production build need it
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

  @media screen and (max-width:768px) {
    .text-wrapper{
      gap: 0 !important;
    }
    ul{

padding-left: 5px !important;
li{
  padding-left: 0 !important;
}
}
  }
`;
