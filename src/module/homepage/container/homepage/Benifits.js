import React from "react";
import { styled } from "styled-components";
import profile from "./../../../../assets/images/homepage/company-profile.jpg";
import BenifitsCard from "../../../../core/common/BenifitsCard";
import customer from "./../../../../assets/images/common/Customer_caring.png"
import free from "./../../../../assets/images/common/free_icon_1 (2) 1.png"
import flight from "./../../../../assets/images/common/Layer 24.png"

const BenifitsData=[
  {
  img:customer,
  title:"Increased Accessibility",
  para:"Offering 3D virtual tours can reduce team travel by 50% while increasing productivity by 30%.”"
  },
  {
    img:free,
    title:"Increasing Productivity",
    para:"Offering 3D virtual tours can set your business apart from competitors. It showcases your commitment to leveraging advanced technology for customer convenience."
  },
  {
    img:flight,
    title:"Increase Sales",
    para:"Capturing and promoting your business can increase your sales by 14% with 3X online engagement. "
  },
]

export default function Benifits() {
  return (
    <>
      <Wrapper id="benefits">
        <div className="text-wrapper">
          <button className="secondary-btn">Benefits</button>
          <div className="row">
            {
              BenifitsData.map(ele=>(
                <div>
                  <BenifitsCard img={ele?.img} title={ele.title} para={ele.para} />
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
  margin: auto;
  display: flex;
  max-width: 1440px;

  .text-wrapper {
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
