import { Box, Button, Dialog, DialogContent, DialogActions } from "@mui/material";
import { saveAs } from "file-saver"
import { useState } from "react";

function ConfirmDialog({openDialog, setOpenDialog, title, downloadURL}) {

    const [confirmed, setConfirmed] = useState(false);

    function saveImage() {
        setConfirmed(true)
        saveAs(`https://radiant-fjord-32800.herokuapp.com/${downloadURL}` , title)
        setTimeout(()=>{
            setOpenDialog(false)
            setConfirmed(false)
        }, 2500)
      }


    return (
        <Dialog open={openDialog}>

            {confirmed?
                <DialogContent>
                    Your Download Should be Starting :)
                </DialogContent>
                :
                <DialogContent>
                    Are you sure you want to download <Box sx={{display:"inline", fontWeight:"900", color:"primary.main"}}>{title}</Box>?
                </DialogContent>
            }
            

            <DialogActions>
                <Button color="secondary" variant="contained" size="small" onClick={()=>setOpenDialog(false)} disableElevation>Cancel</Button>
                <Button variant="contained" size="small" onClick={saveImage} disabled={confirmed} disableElevation>Download</Button>
            </DialogActions>
        </Dialog>
    );
}

export default ConfirmDialog;
