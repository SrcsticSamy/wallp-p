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
    <Grid item md={desktop? 5 : 2} sm={desktop? 12 : 5} xs={desktop? 12: 5} mb={5} mx={0.25} p={0.25}
       sx={{height:"24em", display:"flex", flexDirection:"column", justifyContent:"space-between",
        bgcolor:"rgba(19,80,33,0.35)", borderRadius:"10px 10px 0 0",}}>

      <Typography variant={desktop?"subtitle1" : "subtitle2"} sx={{fontWeight:"bold",p:1}}>{ampRemove(post.title)}</Typography>


      <Box 
        sx={{position:"relative", backgroundImage:`url(${preview})`, backgroundRepeat:"no-repeat", 
        backgroundSize:"cover", backgroundPosition:"center", width:"100%" , height:"20em", mx:"auto"
        }} alt={post.title}>

            <Tooltip title="Download Wallpaper">
                <IconButton color="secondary" size={desktop? "medium" : "small"} onClick={saveImage}
                sx={{position:"absolute", right:10, bottom:8, border:"1px solid", borderColor:"secondary.main"}}>
                    <BsDownload/>
                </IconButton>
            </Tooltip>


      </Box>

    </Grid>
  );
}

export default Wallpaper;