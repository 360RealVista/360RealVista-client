export const scrollTOId=(id,offset)=>{
    const a=document.getElementById(id)?.offsetTop
      window.scrollTo({
        top: a-offset,
        behavior: "smooth",
      });
    }