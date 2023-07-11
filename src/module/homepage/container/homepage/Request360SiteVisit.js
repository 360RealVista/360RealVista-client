import React from "react";
import { styled } from "styled-components";

export default function Request360SiteVisit({setOpen}) {
  return (
    <>
      <Wrapper>
        <div>
          <h2>Stand out and let us <span> create your </span>digital twin !</h2>
          <button className="primary-btn" onClick={()=>setOpen(true)}>Book Now</button>
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
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
        color: black;
        span{
        color: #A14AF9;

        }
    }

  }
  button{
    margin-top: 0;
  }
`;
