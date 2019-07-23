<template>
	<li class="list-group-item media" @click="onVideoSelect">
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
	},
	methods: {
		onVideoSelect() {
			this.$emit("videoSelect", this.video);
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
