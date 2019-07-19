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
			console.log(event.target.value);
		}
	}
};
</script>
