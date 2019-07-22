<template>
	<div>
		<input @input="onInput" type="text" />
	</div>
</template>

<script>
export default {
	name: "SearchBar",
	methods: {
		onInput: function(event) {
			this.$emit("termChange", event.target.value);
		}
	}
};
</script>

<style scoped>
div {
	margin: 20px;
	text-align: center;
}

input {
	width: 75%;
}
</style>
