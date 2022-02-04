import DeviceProvider from "./Context/DeviceContext"
import Header from "./Components/Header";
import WallpapersList from "./Components/WallpapersList";
import BackToTop from "./Components/BackToTop";

import myLogo from "./Static/my-logo.png"

import { Box } from "@mui/material";

// import { ReactQueryDevtools } from 'react-query/devtools'

export default function App() {

  return (
    <Box sx={{textAlign:"center"}}>

      <DeviceProvider>

        <Header/>  
        <WallpapersList/>
        <BackToTop/>

        <Box component="img" src={myLogo} width="50px" m={3} sx={{float:"right"}}/>

      </DeviceProvider>

      {/* <ReactQueryDevtools/> */}

    </Box>
  );
}
