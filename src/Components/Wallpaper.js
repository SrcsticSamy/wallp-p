import { Grid, Typography, Box, IconButton, Tooltip, Chip } from "@mui/material";
import { saveAs } from "file-saver"

import { useContext } from "react";
import { DeviceContext } from "../Context/DeviceContext";

import { BsDownload } from "react-icons/bs";
import { FcLike } from "react-icons/fc";


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
       sx={{height:desktop? "25em" :"30em", display:"flex", flexDirection:"column", justifyContent:"space-between",
        bgcolor:"secondary.dark", borderRadius:"0 0 5px 5px", width: desktop? "100%": "15em", textAlign:"center"}}>



      <Box p={10}
        sx={{position:"relative", backgroundImage:`url(${preview})`, backgroundRepeat:"no-repeat", 
        backgroundSize:"cover", backgroundPosition:"center", width:desktop? "100%" : "100%" , height:desktop? "20em" :"25em", mx:"auto"
        }} alt={post.title}>

            <Chip icon={<FcLike/>} color="secondary" label={post.ups} sx={{position:"absolute", left:10, top:8}}/>


            <Tooltip title="Download Wallpaper">
                <IconButton color="primary" size={desktop? "medium" : "small"} onClick={saveImage}
                sx={{position:"absolute", right:10, bottom:8, border:"1px solid", borderColor:"primary.main"}}>
                    <BsDownload/>
                </IconButton>
            </Tooltip>


      </Box>

      <Typography variant={desktop?"subtitle1" : "subtitle2"} sx={{fontWeight:"bold",p:1, width:desktop?"100%":"80%", mx:"auto", height:"fit-content"}}>{ampRemove(post.title)}</Typography>


    </Grid>
  );
}

export default Wallpaper;