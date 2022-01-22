import { useInfiniteQuery} from "react-query";

export default function App() {


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
              <div key={i}>
                <h1>Page {i+1}</h1>

                {page.data.children.map((post, i)=>{

                  if(post.data.stickied || post.data.is_gallery) return

                  const resURL = post.data.preview.images[0].resolutions[1].url
                  const imgURL = resURL.replace(/amp;/g, "")

                  return(
                    <div key={i}>
                      <h3>{post.data.title}</h3>
                      <img src={imgURL} alt="AMOLED Background" />
                    </div>
                                        
                  )
                })}
              </div>
            )

          })}
    
    
          
        </>)

      }
           

      {/* <ReactQueryDevtools initialIsOpen={true}/> */}
      
    </div>
  );
}
