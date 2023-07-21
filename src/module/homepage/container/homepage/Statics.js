import React from "react";
import { styled } from "styled-components";
import StaticsCard from "../../../../core/common/StaticsCard";

const BenifitsData=[
  {
  title:"Increase sales",
  stats:"14%",
  para:"by inspiring more customers to visit your property."
  },
  {
  title:"Decrease travel time and cost",
  stats:"50%",
  para:"by removing the need for site visits."
  },
  {
  title:"Cut project time",
  stats:"30%",
  para:"by letting teams access a property anytime—anywhere."
  },
  {
  title:"Reduce carbon emissions",
  stats:"16%",
  para:"by eliminating the need for car and plane travel to operate more sustainably."
  },

]

export default function Statics() {
  return (
    <>
      <Wrapper id="benefits">
        <div className="text-wrapper">
          <button className="secondary-btn">3D Virtual Tour In Statistics</button>
          <div className="row">
            {
              BenifitsData.map(ele=>(
                <div>
                  <StaticsCard {...ele} />
                </div>
              ))
            }
 
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
  background-image: linear-gradient(to bottom ,#cdb2fa,white);
  margin-top: 40px;
  
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
        h2{
          text-align: center;
        }
      }
    }

  }
  .secondary-btn{
    display: block;
    margin: auto;
    color: white;
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
