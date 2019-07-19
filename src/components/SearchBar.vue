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
