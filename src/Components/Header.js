import { Grid, Typography, Box, Button } from "@mui/material";
import { DeviceContext } from "../Context/DeviceContext";

import { BsPhone } from "react-icons/bs";
import { AiOutlineDesktop } from "react-icons/ai";
import logo from "../Static/logo.png"
import bg from "../Static/bg.svg"
import { useContext } from "react";


function Header() {

  const [desktop, setDesktop] = useContext(DeviceContext)

  function showPhoneWallpapers() {
    setDesktop(false)
    window.scrollTo({
      top:600,
      behavior:"smooth"
    })
  }

  function showDesktopWallpapers() {
    setDesktop(true)
    window.scrollTo({
      top:600,
      behavior:"smooth"
    })
  }

  return (
    <Grid container justifyContent="center" alignItems="center" spacing={2}
      sx={{minHeight:'85vh', textAlign:'center', backgroundImage:`url(${bg})`, backgroundRepeat:"no-repeat", 
          backgroundSize:"cover", backgroundPosition:"center", backgroundAttachment:"fixed", px:2}}>

      <Grid item md={7}>
        <Box component="img" src={logo} my={3} maxWidth="100%"/>
        <Typography variant="h5" >Is Your Life Falling Apart? Just Change Your Wallpaper!</Typography>
        <Typography variant="caption" sx={{color:"rgba(255,255,255,0.5)"}}>at least that's what I keep telling myself...</Typography>
      </Grid>

      <Grid item md={5}>
        <Button variant={desktop? "outlined" : "contained"} size="large" startIcon={<BsPhone/>} onClick={showPhoneWallpapers}>Phone Wallpapers</Button>
        <br /> <br />
        <Button variant={desktop? "contained" : "outlined"} size="large" startIcon={<AiOutlineDesktop/>} onClick={showDesktopWallpapers}>Desktop Wallpapers</Button>         
      </Grid>
      
    </Grid>
  );
}

export default Header;