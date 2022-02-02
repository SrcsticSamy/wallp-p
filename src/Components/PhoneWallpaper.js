import { Grid, Typography, Box, IconButton, Tooltip } from "@mui/material";
import { BsDownload } from "react-icons/bs";


function PhoneWallpaper() {

  return (
    <Grid item md={2} xs={5} m={1} sx={{textAlign:"center"}}>

      <Typography variant="subtitle2">Title Title</Typography>


      <Box sx={{position:"relative", backgroundImage:`url("https://preview.redd.it/zuo92ee6t1f81.jpg?width=320&crop=smart&auto=webp&s=964ca1571596d822788fd20cfbc7a3f6df65e9f3")`, backgroundRepeat:"no-repeat", 
          backgroundSize:"cover", backgroundPosition:"center", width:"10em", height:"20em", mx:"auto",
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

export default PhoneWallpaper;