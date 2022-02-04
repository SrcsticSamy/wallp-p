import { Fab } from "@mui/material";
import { useState } from "react";
import { BsArrowUpCircle } from "react-icons/bs";

function BackToTop() {

    const [visible, setVisible] = useState(false)

    window.addEventListener('scroll', toggleVisible);

    function toggleVisible() {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 1000){
            setVisible(true)
        } 
        else setVisible(false)
    }

    function scrollTop() {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
    

  return (
      <Fab color="secondary" disabled={!visible} sx={{position:"fixed", bottom:15, left:5}} onClick={scrollTop}>
          <BsArrowUpCircle style={{transform:"scale(1.5)"}}/>
      </Fab>
  );
}

export default BackToTop;
