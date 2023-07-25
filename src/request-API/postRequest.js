import axios from "axios"
export const formSubmit=(data)=>{
      try {
      return  axios.post("https://360-real-vista-server.vercel.app/v1/api/request-form",data,{
            headers:{
              "Content-Type":"application/json"
            }
          })
        
      } catch (error) {
        console.log(error.message)
      }
    
} 
export const contactUsFormSubmit=(data)=>{
      try {
      return  axios.post("https://360-real-vista-server.vercel.app/v1/api/contact-us",data,{
            headers:{
              "Content-Type":"application/json"
            }
          })
        
      } catch (error) {
        console.log(error.message)
      }
    
} 