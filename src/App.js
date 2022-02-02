import DeviceProvider from "./Context/DeviceContext"
import Header from "./Components/Header";
import WallpapersList from "./Components/WallpapersList";

import { Box } from "@mui/material";

import { ReactQueryDevtools } from 'react-query/devtools'

export default function App() {

  return (
    <Box sx={{textAlign:"center"}}>

      <DeviceProvider>

        <Header/>  
        <WallpapersList/>

      </DeviceProvider>

      {/* <ReactQueryDevtools/> */}

    </Box>
  );
}
