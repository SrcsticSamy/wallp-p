import { Box, Typography, Grid, Fab, Button, ButtonGroup } from "@mui/material";

import { useContext, useState } from "react";
import { DeviceContext } from "../Context/DeviceContext";

import { useInfiniteQuery } from "react-query";

import Wallpaper from "./Wallpaper";

import { BsPlusCircle } from "react-icons/bs";

function WallpapersList() {
	const [desktop] = useContext(DeviceContext);

	const [sort, setSort] = useState("hot");

	const baseUrl = desktop
		? `https://www.reddit.com/r/wallpaper`
		: `https://www.reddit.com/r/Amoledbackgrounds`;
	const queryName = desktop ? "desktopWallpapers" : "phoneWallpapers";

	const fetchWallpapers = async ({ pageParam = null }) => {
		const res = await fetch(
			`${baseUrl}/${sort}.json?after=${pageParam}&limit=20${
				sort === "top" ? "&t=all" : null
			}`
		);
		return res.json();
	};

	const {
		isLoading,
		isFetchingNextPage,
		hasNextPage,
		isError,
		error,
		data,
		fetchNextPage,
	} = useInfiniteQuery([queryName, sort], fetchWallpapers, {
		getNextPageParam: (lastPage) => lastPage.data.after,
	});

	if (isLoading) {
		return (
			<Typography variant="h1" sx={{ my: 5 }}>
				Loading...
			</Typography>
		);
	}

	if (isError) {
		return (
			<Typography variant="h1" sx={{ my: 5 }}>
				An Error Has Ocurred.
				<br />
				{error.message}
				<br />
			</Typography>
		);
	}

	return (
		<Box>
			<Typography variant="h6" sx={{ my: 2 }}>
				Sort By
			</Typography>

			<ButtonGroup
				aria-label="outlined primary button group"
				sx={{ mb: 8 }}>
				<Button
					variant={sort === "hot" ? "contained" : "outlined"}
					onClick={() => setSort("hot")}>
					🔥 Hot
				</Button>
				<Button
					variant={sort === "top" ? "contained" : "outlined"}
					onClick={() => setSort("top")}>
					🚀 Top of All Time
				</Button>
				<Button
					variant={sort === "new" ? "contained" : "outlined"}
					onClick={() => setSort("new")}>
					✨ New
				</Button>
			</ButtonGroup>

			<Grid
				container
				justifyContent="space-evenly"
				maxWidth="false"
				sx={{ mx: "auto", px: 2 }}>
				{data.pages.map((page) => {
					return page.data.children.map((post, i) => {
						if (post.data?.preview?.images && !post.data.stickied) {
							const resURL = desktop
								? post.data.preview.images[0].resolutions[2].url
								: post.data.preview.images[0].resolutions[3]
										.url;
							const previewURL = resURL.replace(/amp;/g, "");
							return (
								<Wallpaper
									post={post.data}
									preview={previewURL}
									key={i + 1}
								/>
							);
						} else return;
					});
				})}
			</Grid>

			<Fab
				variant="extended"
				color="primary"
				onClick={() => fetchNextPage()}
				disabled={isFetchingNextPage || !hasNextPage}>
				{isFetchingNextPage ? (
					"Loading..."
				) : (
					<>
						<BsPlusCircle style={{ marginRight: 10 }} />
						Show More
					</>
				)}
			</Fab>
		</Box>
	);
}

export default WallpapersList;
