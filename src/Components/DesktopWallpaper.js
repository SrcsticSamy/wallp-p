import { Grid, Typography, Box, IconButton, Tooltip } from "@mui/material";

import { BsDownload } from "react-icons/bs";


function DesktopWallpaper() {

  return (
    <Grid item md={5} xs={12} m={1} sx={{textAlign:"left"}}>

      <Typography variant="subtitle2">Title Title</Typography>


      <Box sx={{position:"relative", backgroundImage:`url("https://preview.redd.it/jx615xqoa2f81.jpg?width=640&crop=smart&auto=webp&s=907feeb76476aa2554392189e59e6bea8444c0b3")`, backgroundRepeat:"no-repeat", 
          backgroundSize:"cover", backgroundPosition:"center", width:"100%", height:"300px", mx:"auto",
          border:"1px solid", borderColor:"secondary.main"}}>

            <Tooltip title="Download">
              <IconButton color="primary" sx={{position:"absolute", right:10, bottom:8, border:"1px solid", borderColor:"primary.light"}}>
                <BsDownload/>
              </IconButton>
            </Tooltip>

      </Box>

    </Grid>
  );
}

export default DesktopWallpaper;