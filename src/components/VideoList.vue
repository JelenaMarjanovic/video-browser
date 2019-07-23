<template>
	<ul class="list-group col-md-4">
		<VideoListItem
			@videoSelect="onVideoSelect"
			v-for="video in videos"
			:key="video.etag"
			:video="video"
		></VideoListItem>
	</ul>
</template>

<script>
import VideoListItem from "./VideoListItem";

export default {
	name: "VideoList",
	components: {
		VideoListItem
	},
	props: {
		videos: Array
	},
	methods: {
		onVideoSelect(video) {
			this.$emit("videoSelect", video);
		}
	}
};
</script>

<style scoped>
ul {
	padding-left: 15px;
}
</style>


