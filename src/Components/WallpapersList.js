import { Box, Typography, Grid } from "@mui/material";

import { useContext } from "react";
import { DeviceContext } from "../Context/DeviceContext";

import { useInfiniteQuery } from "react-query";

import Wallpaper from "./Wallpaper";

function WallpapersList() {

    const [desktop] = useContext(DeviceContext)

    const baseUrl = desktop ? "https://www.reddit.com/r/wallpaper/hot.json?limit=20&" : "https://www.reddit.com/r/Amoledbackgrounds/hot.json?hot.json?limit=20&"
    const queryName = desktop ? "desktopWallpapers" : "phoneWallpapers"

    const fetchWallpapers = async ({pageParam = null}) => {
        const res = await fetch(`${baseUrl}?after=${pageParam}&limit=20`)
        return res.json()
    }

    const {isLoading, isFetchingNextPage, hasNextPage, isError, data, fetchNextPage} = useInfiniteQuery(queryName, fetchWallpapers, 
        { getNextPageParam: (lastPage)=> lastPage.data.after} )

    if(isLoading){
        return (<Typography variant="h1" sx={{my:5}}>Loading</Typography>)
    }

    return (
        <Box>

            <Typography variant="h1" sx={{my:5}}>Wallpapers</Typography>

            <Grid container justifyContent="space-evenly" maxWidth="lg" sx={{mx:"auto"}}>

                {data.pages.map((page, i)=>{
                    return(
                            page.data.children.map((post, i)=>{
                                if(post.data.stickied || post.data.is_gallery || post.data.selftext) return

                                const resURL = post.data.preview.images[0].resolutions[2].url
                                const imgURL = resURL.replace(/amp;/g, "")

                                return ( <Wallpaper post={post.data} imgURL={imgURL} key={i+1}/> )
                                
                            })
                        
                    )
                })}
                
            </Grid>

        </Box>
    );
}

export default WallpapersList;
