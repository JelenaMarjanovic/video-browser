<template>
	<li class="list-group-item media">
		<img class="mr-3" :src="thumbnailUrl" :alt="videoTitle" />
		<div class="media-body">{{ videoTitle }}</div>
	</li>
</template>

<script>
export default {
	name: "VideoListItem",
	props: {
		video: Object
	},
	computed: {
		videoTitle() {
			return this.video.snippet.title;
		},
		thumbnailUrl() {
			return this.video.snippet.thumbnails.default.url;
		}
	}
};
</script>

<style scoped>
li {
	display: flex;
	cursor: pointer;
}

li:hover {
	background-color: lightgray;
}
</style>
