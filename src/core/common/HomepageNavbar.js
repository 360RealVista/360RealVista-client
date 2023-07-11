import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import logo from "./../../assets/images/homepage/logo.png"
import Request360Modal from "../../module/homepage/container/homepage/Request360Modal";



export default function HomepageNavbar() {
  const [showRequest360, setShowRequest360] = React.useState(false);

  return (
    <>
      <Wrapper>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            true ? "pending" : isActive ? "active" : ""
          }
        >
          <img src={logo} />
        </NavLink>
        <ul>
          <li>
            <NavLink
              onClick={()=>setShowRequest360(true)}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : true ? "primary-btn" : ""
              }
            >
              Request 360 Site Visit
            </NavLink>
          </li>
        </ul>

      </Wrapper>
      <Request360Modal open={showRequest360} setOpen={setShowRequest360}/>


    </>
  );
}

const Wrapper=styled.div`
  max-width: 1198px;
  margin:  auto;
  padding: 20px 0;
  justify-content: space-between;
  display: flex;
  background-color: transparent;
  ul{
    display: flex;
    list-style: none;
    align-items: center;
    position: relative;
    &>li{
      margin: 0 20px;
      white-space: nowrap;
      font-size: 24px;
      font-weight: 600;
      &>a{
        color: white;
      text-decoration: none;

      }      

    }
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

`
