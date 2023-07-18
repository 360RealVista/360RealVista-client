import React from 'react'
import { styled } from 'styled-components'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




export default function AskedQuestions() {
  return (
    <Wrapper>
        <div className="main">
        <button className='secondary-btn'>FAQ</button>
            <div className="content">
                {faqList.map(ele=>(
                    <div className="accordian" >
                    <Accordion sx={{background:"#C6F4FD",padding:"5px 15px 5px 31px"}}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon sx={{height:"calc(2vw + 14px)",width:"calc(2vw + 14px)", color:"black"}} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        >
                        <Typography sx={{fontSize:"calc(.6vw + 14px)" ,color:"black" }}>{ele?.que}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Typography sx={{fontSize:"calc(.5vw + 10px)"}}>{ele?.ans}</Typography>
                        <Typography sx={{fontSize:"calc(.5vw + 10px)",paddingLeft:"30px",paddingTop:"20px"}}>
                            <ul>
                                {ele?.list?.map(ele=>(
                                    <li>{ele}</li>
                                ))}
                            </ul>
                        </Typography>
                        </AccordionDetails>
                    </Accordion>
                    </div>
                ))}
  
            </div>

        </div>


    </Wrapper>
  )
}

const Wrapper=styled.div`
position: relative;
padding: 0 10px 92px 10px;
.main{
    max-width: 1440px;
    margin: auto;
    gap: 50px;
    display: flex;
    flex-direction: column;
    .content{
        display: flex;
        flex-direction: column;
        gap: 25px;
        max-height: 60vh;
        overflow-y: auto;

        .accordian{
            max-width: 1030px;
            width: 100%;
            margin: auto;
            margin-bottom: 20px;
        }
    }
    .content::-webkit-scrollbar {
            width: 0px !important;
        }
        /* .content::-webkit-scrollbar-thumb{
            background-color: red;
        } */
}
.secondary-btn{
    display: block;
    margin: auto;
}

 .sub-title{
            font-size: calc(1.5vw + 20px);
            text-align: center;
            margin: auto;
            padding: 92px 20px;
            padding-bottom:0 ;
            margin-bottom: 92px;
            width: max-content;
            position: relative;
            &::after{
                content: "";
                position: absolute;
                bottom: -8px;
                left: 0;
                width: 30%;
                height: 4px;
                border-radius: 2px;
                background-color: #19C4E5;
            }
}
.MuiPaper-elevation{
    border-radius: 30px !important;
}
.css-o4b71y-MuiAccordionSummary-content{
    margin: 0 !important;
}
`


const faqList=[
    {
        que:"What is a 3D virtual tour?",
        ans:"A 3D virtual tour is a digital representation of a physical space. It allows users to explore the space from any angle, as if they were actually there. 3D virtual tours are typically created using a panoramic camera and special software."
    },
    {
        que:"How do 3D virtual tours work?",
        ans:"3D virtual tours are created by taking a series of panoramic photos of a space. These photos are then stitched together using special Artificial Intelligence (AI) powered software to create a 360-degree view of the space. Users can then explore the space by clicking and dragging their mouse, or by using their finger on a touchscreen device."
    },
    {
        que:"How do I access a 3D virtual tour?",
        ans:"You can access a 3D virtual tour through a link or embedded player on your website. The tour can be viewed on any device with an internet connection."
    },
    {
        que:"Do I need special software or equipment to view a 3D virtual tour?",
        ans:"No special software or equipment is required. You can view the tour on any modern web browser."
    },
    {
        que:"Can I view the 3D virtual tour on my mobile device?",
        ans:"Yes, our 3D virtual tours are designed to be viewed on any device, including smartphones and tablets."
    },
    {
        que:"How long does it take to create a 3D virtual tour?",
        ans:"The time it takes to create a 3D virtual tour depends on the size of the space and the level of detail required. However, in general,  basic 3D virtual tour scans can be taken in a few hours and processed within 24 - 48 hours. "
    },
    {
        que:"Can I share the 3D virtual tour on my social media?",
        ans:"Yes, you can easily share the link to the 3D virtual tour on your social media platforms to reach a wider audience."
    },
    {
        que:"Is there customer support if I have issues viewing the 3D virtual tour?",
        ans:"Yes, we provide customer support to assist with any issues or questions you may have about viewing the 3D virtual tour."
    },
    {
        que:"Can I limit the view of the 3D virtual tour to my employees?",
        ans:"Yes, Secured Model Embeding is a solution to securely embed private models within your organization portals or website. In addition, you can passowrd-protect your model, so only poeple with password can view it.  "
    },
    {
        que:"What are the benefits of using 3D virtual tours?",
        ans:"There are many benefits to using 3D virtual tours, including:",
        list:[
            "Increased reach and engagement: Virtual tours can help you reach a wider audience and engage them more deeply with your business.",
            "Improved customer experience: Virtual tours can give potential customers a better understanding of your business and what you have to offer.",
            "Increased sales and ROI: Virtual tours can help you increase sales and ROI by providing potential customers with a more immersive and informative experience.",
            "Save time and money on travel and showings: Virtual tours can save you time and money on travel and showings.",
            "Improve your search engine ranking: Virtual tours can help you improve your search engine ranking.",
            "Target specific demographics: Virtual tours can help you target specific demographics.",
            "Promote your business on social media: Virtual tours can be easily promoted on social media.",
        ]
    },
  
]






