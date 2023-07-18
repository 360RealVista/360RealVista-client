import React from "react";
import { styled } from "styled-components";
import profile from "./../../../../assets/images/homepage/company-profile.jpg";
import TestimonialsCard from "../../../../core/common/TestimonialsCard";

export default function Testimonials() {
  return (
    <>
      <Wrapper>
        <div className="text-wrapper">
          <button className="secondary-btn">Testimonials</button>
          <div className="row">
            <div>
              <TestimonialsCard/>
            </div>
            <div>
              <TestimonialsCard/>
            </div>
            <div>
              <TestimonialsCard/>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  background-image: linear-gradient(to bottom ,#8948F3,white);
  
  .text-wrapper {
    margin: auto;
    max-width: 1440px;
    padding: 4vw;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 50px;
    width: 100%;
    .row{
      gap: 3vw;
      width: 100%;
      position: relative;
      &>div{
        width: 30%;
      }
    }

  }
  @media screen and (max-width:768px) {
  
  .text-wrapper{
    width: 100%;
  }
  .row{
    flex-direction: column !important;
    &>div{
      width: 100% !important;
    }
  }
}
`;
