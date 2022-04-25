import { Grid, Typography, Box, IconButton, Tooltip, Chip } from "@mui/material";

import { useContext, useState } from "react";
import { DeviceContext } from "../Context/DeviceContext";
import ConfirmDialog from "./ConfirmDialog";

import { BsDownload } from "react-icons/bs";
import { FcLike } from "react-icons/fc";


function Wallpaper({post, preview}) {

  const [openDialog, setOpenDialog] = useState(false)

  function ampRemove(url) {
    return url.replace(/amp;/g, "")
  }

  const [desktop] = useContext(DeviceContext)

  return (
      <Grid item lg={desktop? 5 : 2} md={desktop? 5 : 3} sm={desktop? 12 : 5} xs={desktop? 12: 8} mb={5} mx={0.25} pb={0.25}
       sx={{height:desktop? "25em" :"30em", display:"flex", flexDirection:"column", justifyContent:"space-between",
        bgcolor:"secondary.dark", borderRadius:"0 0 15px 15px", width: desktop? "100%": "15em", textAlign:"center"}}>



      <Box p={10}
        sx={{position:"relative", backgroundImage:`url(${preview})`, backgroundRepeat:"no-repeat", 
        backgroundSize:"cover", backgroundPosition:"center", width:desktop? "100%" : "100%" , height:desktop? "20em" :"25em", mx:"auto"
        }} alt={post.title}>

            <Chip icon={<FcLike/>} color="secondary" label={post.ups} sx={{position:"absolute", left:10, top:8}}/>


            <Tooltip title="Download Wallpaper">
                <IconButton color="primary" size={desktop? "medium" : "small"} onClick={()=>setOpenDialog(true)}
                sx={{position:"absolute", right:10, bottom:8, border:"1px solid", borderColor:"primary.main"}}>
                    <BsDownload/>
                </IconButton>
            </Tooltip>


      </Box>

      <Typography variant={desktop?"subtitle1" : "subtitle2"} sx={{fontWeight:"bold",p:1, width:desktop?"100%":"80%", mx:"auto", height:"fit-content"}}>{ampRemove(post.title)}</Typography>

      <ConfirmDialog openDialog={openDialog} setOpenDialog={setOpenDialog} title={ampRemove(post.title)} downloadURL={ampRemove(post.preview.images[0].source.url)}/>

    </Grid>
    
  );
}

export default Wallpaper;