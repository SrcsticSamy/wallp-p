import { useState } from "react";
import { useInfiniteQuery} from "react-query";

export default function App() {

  const [imgLoaded, setImgLoaded] = useState(false);


  const fetchWallpapers = async ({pageParam = null}) => {
    const res = await fetch(`https://www.reddit.com/r/Amoledbackgrounds/hot.json?after=${pageParam}`)
    return res.json()
  }

  const {isLoading, isFetchingNextPage, hasNextPage, isError, data, fetchNextPage} = useInfiniteQuery('wallpapers', fetchWallpapers, 
  { getNextPageParam: (lastPage, page)=>{
    if (lastPage.data.after) return (lastPage.data.after)
      else return undefined
  }
  })

  return (
    <div className="App">

      {isError && <h1>An Error Has Ocurred</h1> }


      {isLoading? 
        (<h1>Loading...</h1>) 

        :

        (<>
          <button style={{padding:15, border:"2px solid cyan", backgroundColor:"black", color:"white", borderRadius:100, position:"fixed", bottom:15, right:15, cursor:"pointer"}} 
          disabled={!hasNextPage || isFetchingNextPage}
          onClick={()=>{
            fetchNextPage()
          }}>{isFetchingNextPage? "Loading..." : "Show More"}</button>

          {data.pages.map((page, i)=>{
            
            return(
              <div key={i} style={{textAlign: "center"}}>
                <h1>Page {i+1}</h1>
                <hr />

                {page.data.children.map((post, i)=>{

                  if(post.data.stickied || post.data.is_gallery || post.data.selftext) return

                  const resURL = post.data.preview.images[0].resolutions[1].url
                  const imgURL = resURL.replace(/amp;/g, "")

                  return(
                    <div key={i} style={{display:"inline-block", margin:10, padding:5, textAlign:"center", border:"3px dashed cyan"}}>
                      <h5>{i+1}) {post.data.title}</h5>
                      
                      <img loading="lazy" src={imgURL} alt="AMOLED Background" onLoad={()=>setImgLoaded(true)} style={{opacity: imgLoaded? "1": "0", transition: "opacity 1s", width:200}}/>
                    </div>
                                        
                  )
                })}
                <hr />
              </div>
            )

          })}
    
    
          
        </>)

      }
           

      {/* <ReactQueryDevtools initialIsOpen={true}/> */}
      
    </div>
  );
}
