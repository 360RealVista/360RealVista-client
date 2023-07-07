import React from "react";
import { styled } from "styled-components";
import background from "./../../../../assets/images/homepage/requirementButton.de5ea3e.avif"


export default function Request360SiteVisit({setOpen}) {
  return (
    <>
      <Wrapper>
        <div>
          <h2>Stand out and let us create your digital twin !</h2>
          <button className="primary-btn" onClick={()=>setOpen(true)}>Book Now</button>
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  background-image: linear-gradient(rgba(0,0,0,.9),rgba(0,0,0,.9)) , url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto;

  &>div{
    padding: 60px;
    max-width: 1196px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h2{
        font-size: 38px;
        color: white;
    }

  }
`;
