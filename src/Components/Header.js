import { Grid, Typography, Box, Button } from "@mui/material";

import { BsPhone } from "react-icons/bs";
import { AiOutlineDesktop } from "react-icons/ai";
import logo from "../Static/logo.png"
import bg from "../Static/bg.svg"
import { useState } from "react";



function Header() {

  const [selected, setSelected] = useState(0);

  return (
    <Grid container justifyContent="center" alignItems="center" spacing={2}
      sx={{minHeight:'100vh', textAlign:'center', backgroundImage:`url(${bg})`, backgroundRepeat:"no-repeat", 
          backgroundSize:"cover", backgroundPosition:"center", backgroundAttachment:"fixed", px:2}}>

      <Grid item md={7}>
        <Box component="img" src={logo} my={3} maxWidth="100%"/>
        <Typography variant="h5" >Is Your Life Falling Apart? Just Change Your Wallpaper!</Typography>
        <Typography variant="caption" sx={{color:"#424242"}}>at least that's what I keep telling myself...</Typography>
      </Grid>

      <Grid item md={5}>


        <Button variant={selected === 1? "contained" : "outlined"} size="large" startIcon={<BsPhone/>} onClick={()=>setSelected(1)}>Phone Wallpapers</Button>
        <br /> <br />
        <Button variant={selected === 2? "contained" : "outlined"} size="large" startIcon={<AiOutlineDesktop/>} onClick={()=>setSelected(2)}>Desktop Wallpapers</Button>
                    
      </Grid>
      
    </Grid>
  );
}

export default Header;