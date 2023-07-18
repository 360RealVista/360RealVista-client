import React from 'react'
import { styled } from 'styled-components'
import profile from "./../../assets/images/common/man's face in a circle.png"
import star from "./../../assets/images/common/Star Filled.png"
import halfStar from "./../../assets/images/common/Star Half Empty.png"

export default function TestimonialsCard() {
  return (
    <Wrapper>
        <div>
            <img className='profile' src={profile} alt="" />
        </div>
        <h2>User</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut laoreet viverra leo, nec tempus est hendrerit non. Donec malesuada lobortis arcu vel cursus. Pellentesque gravida a eros vel tincidunt. Nullam quis lacus egestas, ornare urna non, tristique massa. 
        </p>
        <div className='rating'>
            <img src={star}/>
            <img src={star}/>
            <img src={star}/>
            <img src={star}/>
            <img src={halfStar}/>
        </div>


    </Wrapper>
  )
}

const Wrapper =styled.div`
width: 100%;
position: relative;
margin: auto;
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
padding: 20px;
border: 2px solid white;
border-radius: 10px;
box-shadow: 0 0 10px 5px white;
p{
    text-align: center;
}
.profile{
    max-width: 200px;
    width: 80%;
    display: block;
    margin: auto;
}
.rating{
    display: flex;
    width: 200px !important;
    position: relative;
    justify-content: center;
    img{
        width: 15%;


    }

}





`