import { Box, Typography, Grid } from "@mui/material";
import Header from "./Components/Header";
import DesktopWallpaper from "./Components/DesktopWallpaper";
import PhoneWallpaper from "./Components/PhoneWallpaper";

export default function App() {

  return (
    <Box sx={{height:"1000px", textAlign:"center"}}>

      <Header/>  

      <Typography variant="h1" sx={{my:5}}>Wallpapers</Typography>

      <Grid container justifyContent="space-evenly" maxWidth="lg" sx={{mx:"auto"}}>
        <PhoneWallpaper/>
        <PhoneWallpaper/>
        <PhoneWallpaper/>
        <PhoneWallpaper/>
        <PhoneWallpaper/>
        <PhoneWallpaper/>
        <DesktopWallpaper/>
        <DesktopWallpaper/>
        <DesktopWallpaper/>
        <DesktopWallpaper/>

      </Grid>

    </Box>
  );
}
