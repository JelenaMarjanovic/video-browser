<template>
	<div class="container">
		<SearchBar @termChange="onTermChange"></SearchBar>
		<VideoList @videoSelect="onVideoSelect" :videos="videos"></VideoList>
	</div>
</template>

<script>
import axios from "axios";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";

const API_KEY = "AIzaSyDOthGbDGslko3tMBzCmm1aoy8Sfd3_Azg";

export default {
	name: "App",
	components: {
		SearchBar,
		VideoList
	},
	data() {
		return {
			videos: [],
			selectedVideo: null
		};
	},
	methods: {
		onTermChange: function(searchTerm) {
			axios
				.get("https://www.googleapis.com/youtube/v3/search", {
					params: {
						key: API_KEY,
						type: "video",
						part: "snippet",
						q: searchTerm
					}
				})
				.then(response => (this.videos = response.data.items));
		},
		onVideoSelect(video) {
			this.selectedVideo = video;
		}
	}
};
</script>
