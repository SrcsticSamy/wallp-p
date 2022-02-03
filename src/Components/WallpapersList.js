import { Box, Typography, Grid, Fab } from "@mui/material";

import { useContext } from "react";
import { DeviceContext } from "../Context/DeviceContext";

import { useInfiniteQuery } from "react-query";

import Wallpaper from "./Wallpaper";

import { BsPlusCircle } from "react-icons/bs";

function WallpapersList() {

    const [desktop] = useContext(DeviceContext)

    const baseUrl = desktop ? "https://www.reddit.com/r/wallpaper/hot.json?limit=20&" : "https://www.reddit.com/r/Amoledbackgrounds/hot.json?hot.json?limit=20&"
    const queryName = desktop ? "desktopWallpapers" : "phoneWallpapers"

    const fetchWallpapers = async ({pageParam = null}) => {
        const res = await fetch(`${baseUrl}after=${pageParam}`)
        return res.json()
    }

    const {isLoading, isFetchingNextPage, hasNextPage, isError, error, data, fetchNextPage} = useInfiniteQuery(queryName, fetchWallpapers, 
        { getNextPageParam: (lastPage)=> lastPage.data.after} )

    if(isLoading){
        return (<Typography variant="h1" sx={{my:5}}>Loading</Typography>)
    }

    if(isError){
        return (<Typography variant="h1" sx={{my:5}}>
            An Error Has Ocurred. <br />
            {error}
            <br />

            </Typography>)
    }

    return (
        <Box mb={10}>

            <Typography variant="h1" sx={{my:5}}>Wallpapers</Typography>

            <Grid container justifyContent="space-evenly" maxWidth="lg" sx={{mx:"auto"}}>

                {data.pages.map((page)=>{
                    return(
                            page.data.children.map((post, i)=>{
                                if(post.data.stickied || post.data.is_gallery || post.data.selftext) return

                                const resURL = post.data.preview.images[0].resolutions[2].url
                                const previewURL = resURL.replace(/amp;/g, "")

                                return ( <Wallpaper post={post.data} preview={previewURL} key={i+1}/> )
                                
                            })
                        
                    )
                })}
                
            </Grid>

            <Fab variant="extended" color="primary" onClick={()=>fetchNextPage()} disabled={isFetchingNextPage || !hasNextPage}>
                {isFetchingNextPage?
                    "Loading..."
                    :
                    <>
                    <BsPlusCircle style={{marginRight:10}}/>Show More
                    </>
                    
                }
            </Fab>

        </Box>
    );
}

export default WallpapersList;
