import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import logo from "./../../assets/images/homepage/logo.png"
import Request360Modal from "../../module/homepage/container/homepage/Request360Modal";
import Sidebar from "./Sidebar";
import { scrollTOId } from "../utils";



export default function HomepageNavbar() {
  const [showRequest360, setShowRequest360] = React.useState(false);



  return (
    <>
      <Wrapper>
        <div className="main">
       
        <NavLink
          className={({ isActive, isPending }) =>
            true ? "pending" : isActive ? "active" : ""
          }
        >
          <img className="logo" src={logo} />
        </NavLink>
        <div className="sidebar">
        <Sidebar   setShowRequest360={setShowRequest360}/>
        </div>
          
        <ul className="webNavbar">
          <li>
            <NavLink
              onClick={()=>scrollTOId("CompanyProfile",70)}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : !isActive ? "active" : ""
              }
            >
              Company Profile
            </NavLink>
          </li>
          <li>
            <NavLink
             onClick={()=>scrollTOId("whatDoWeDo",70)}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : !isActive ? "active" : ""
              }
            >
              What Do We Do
            </NavLink>
          </li>
          <li>
            <NavLink
             onClick={()=>scrollTOId("benefits",70)}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : !isActive ? "active" : ""
              }
            >
              Benefits
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={()=>setShowRequest360(true)}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : true ? "primary-btn" : ""
              }
            >
              Request a 3D Virtual Tour !
            </NavLink>
          </li>
        </ul>
        </div>
      </Wrapper>

      <Request360Modal open={showRequest360} setOpen={setShowRequest360}/>


    </>

  );
}

const Wrapper=styled.div`
  /* width: 100vw; */
  position: sticky;
  top: 0;
  background-color: black;
  z-index: 99;
  .main{
    flex:1;
    margin:  auto;
    align-items: center;
    justify-content: space-between;
    display: flex;
    width: 100%;
    max-width: 1198px;

  };
  ul{
    flex:1;
    display: flex;
    list-style: none;
    align-items: center;
    position: relative;
    max-width: 700px;
    justify-content: space-between;
    &>li{
      margin: 0 20px;
      white-space: nowrap;
      font-size: 16px;
      font-weight: 600;
      &>a{
        color: white;
      text-decoration: none;

      }      

    }
  }
  .primary-btn {
  padding: 12px 26px;
  font-size: calc(.8vw + 8px);
  }

  .active{
    position: relative;
    display: block;
    &::after{
      position: absolute !important;
      bottom: -8px;
      left: 0;
      content: "";
      width: 100%;
      height: 4px;
      border-radius: 4px;
      background-color: white;
    }

  }
  .logo{
    height: 100px;
    margin-left: 40px;
  }
  .sidebar{
    display: none;
  }
  @media screen and (max-width:768px) {
    .sidebar{
      display: flex !important;
    }
    .webNavbar{
      display: none !important;
    }
    .logo{
      height: 50px;
      margin-left: 20px;
    }
}

`
