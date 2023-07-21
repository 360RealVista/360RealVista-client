import React, { useEffect ,cloneElement} from "react";
import { styled } from "styled-components";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import axios from "axios";
import Autocomplete from '@mui/joy/Autocomplete';
import AutocompleteOption from '@mui/joy/AutocompleteOption';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListItemContent from '@mui/joy/ListItemContent';
import Typography from '@mui/joy/Typography';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {  toast } from 'react-toastify';
import { contactUsFormSubmit } from "../../../../request-API/postRequest";
import { useMutation } from "react-query";
import ThankyouScreen from "../../../../core/common/ThankyouScreen";



export default function Request360Form({setOpen}) {
  
  const [isShowThanku, setIsShowThanku] = React.useState(false);

    const {mutate}=useMutation("contactUsFormSubmit",contactUsFormSubmit,{
      onSuccess:()=>{
        // setOpen(false)
        toast("Thanks for submitting.");
        toast("Our Team will connect to you very soon ");
      setIsShowThanku(true)

      },
      onError:(err)=>{
        toast(err.response.data.message)
      }
    })

  const submitHandler = (e) => {
    e.preventDefault();
    const payload = new FormData(e.target);

    try {
      mutate(payload)
      
    } catch (error) {
      toast(error.name);
    }
  };


  return (
    <>
      {
      isShowThanku?
      <>
        <ThankyouScreen close={setOpen}/>
      </>
      :
      <>
      <Wrapper>
        <FormControl>
          <form onSubmit={submitHandler}>
            <div className="row">
              <div>
                <FormLabel>Name </FormLabel>
                <Input sx={{"width": "300px"}} required name="name" placeholder="Enter Your Name"/>
                {/* <FormHelperText>This is a helper text.</FormHelperText> */}
              </div>
              <div>
                <FormLabel>Email</FormLabel>
                <Input required name="email" type="email" sx={{'width':"300px"}} placeholder=" Enter Your Email" />
                {/* <FormHelperText>This is a helper text.</FormHelperText> */}
              </div>
            </div>

            <div className="row">
              <div>
                <FormLabel>Phone</FormLabel>
                <Input required name="phone" sx={{'width':"300px"}} placeholder=" Enter Your Phone" />
                {/* <FormHelperText>This is a helper text.</FormHelperText> */}
              </div>
              <div>
                <FormLabel>Subject</FormLabel>
                <Input required name="subject" sx={{'width':"300px"}} placeholder="Enter Your Subject" />
                {/* <FormHelperText>This is a helper text.</FormHelperText> */}
              </div>
            </div>
            <div className="row" style={{'flexDirection':'column'}}>
              
                <FormLabel>Message</FormLabel>
                <Input required name="message" sx={{'width':"100%", 'height':'80px'}} placeholder="Enter Your Message" />
                {/* <FormHelperText>This is a helper text.</FormHelperText> */}
        
    
            </div>
     
            <button className="primary-btn">submit</button>
          </form>
        </FormControl>
      </Wrapper>
      </>
      }
    </>
  );
}




const Wrapper = styled.div`
  position: relative;
  width: 100%;
  margin: auto;
  .row {
    display: flex;
    column-gap: 10px;
    margin-bottom: 28px;
  }
  .sub-row{
    gap: 80px;
    display: flex;
    margin-left: 40px;
  }
  .primary-btn {
    font-size: 16px;
    font-weight: 400;
    padding: 8px 22px;
    border-radius: 10px;
  }
  @media screen and (max-width:768px) {
  
  .row{
    flex-direction: column !important;
    &>div{
      width: 100% !important;
    }
  }
}
`;