import { Grid, Typography, Box, IconButton, Tooltip } from "@mui/material";

import { useContext } from "react";
import { DeviceContext } from "../Context/DeviceContext";

import { BsDownload } from "react-icons/bs";


function Wallpaper({post, imgURL}) {

  const [desktop] = useContext(DeviceContext)

  return (
    <Grid item md={desktop? 5 : 2} sm={desktop? 12 : 5} xs={desktop? 12: 5} m={1} sx={{textAlign:"center"}}>

      <Typography variant="subtitle2">{post.title}</Typography>


      <Box 
        sx={{position:"relative", backgroundImage:`url(${imgURL})`, backgroundRepeat:"no-repeat", 
        backgroundSize:"cover", backgroundPosition:"center", width:desktop? "100%" : "10em", height:"20em", mx:"auto",
        border:"1px solid", borderColor:"secondary.main"}}>

            <Tooltip title="Download">
                <IconButton color="secondary" sx={{position:"absolute", right:10, bottom:8, border:"1px solid", borderColor:"secondary.light"}}>
                    <BsDownload/>
                </IconButton>
            </Tooltip>

      </Box>

    </Grid>
  );
}

export default Wallpaper;