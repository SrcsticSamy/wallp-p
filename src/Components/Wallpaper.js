import { Grid, Typography, Box, IconButton, Tooltip } from "@mui/material";

import { useContext } from "react";
import { DeviceContext } from "../Context/DeviceContext";

import { BsDownload, BsArrowsFullscreen } from "react-icons/bs";

import { saveAs } from "file-saver"


function Wallpaper({post, preview}) {

  const title = post.title.replace(/amp;/g, "")

  function ampRemove(url) {
    return url.replace(/amp;/g, "")
  }


  const [desktop] = useContext(DeviceContext)

  function saveImage() {
    const downloadURL = "https://radiant-fjord-32800.herokuapp.com/"+ampRemove(post.preview.images[0].source.url)
    saveAs(downloadURL  , title)
  }

  return (
    <Grid item lg={desktop? 5 : 2} md={desktop? 5 : 3} sm={desktop? 12 : 5} xs={desktop? 12: 8} mb={5} mx={0.25} pb={0.25}
       sx={{height:"30em", display:"flex", flexDirection:"column", justifyContent:"space-between",
        bgcolor:"primary.dark", borderRadius:"0 0 5px 5px", width: desktop? "100%": "15em"}}>



      <Box p={10}
        sx={{position:"relative", backgroundImage:`url(${preview})`, backgroundRepeat:"no-repeat", 
        backgroundSize:"cover", backgroundPosition:"center", width:desktop? "100%" : "100%" , height:"25em", mx:"auto"
        }} alt={post.title}>

            <Tooltip title="Download Wallpaper">
                <IconButton color="secondary" size={desktop? "medium" : "small"} onClick={saveImage}
                sx={{position:"absolute", right:10, bottom:8, border:"1px solid", borderColor:"secondary.main"}}>
                    <BsDownload/>
                </IconButton>
            </Tooltip>


      </Box>

      <Typography variant={desktop?"subtitle1" : "subtitle2"} sx={{fontWeight:"bold",p:1, width:desktop?"100%":"17em", mx:"auto"}}>{ampRemove(post.title)}</Typography>


    </Grid>
  );
}

export default Wallpaper;