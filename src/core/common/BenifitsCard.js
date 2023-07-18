import React from 'react'
import { styled } from 'styled-components'

export default function TestimonialsCard({img,title,para}) {
  return (
    <Wrapper>
        <div>
            <img className='profile' src={img} alt="" />
        </div>
        <h2>{title}</h2>
        <p>
            {para}
        </p>



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