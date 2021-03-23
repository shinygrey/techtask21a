<template>
	<footer>
		<p>&copy; 2021 <samp>Vuex state - current form choices: {{formEntity}} {{formAction}}</samp></p>
	</footer>
</template>

<script>
export default {
	computed: {
		formAction() {
			return this.$store.state.form.action;
		},
		formEntity() {
			return this.$store.state.form.entity;
		}
	}
}
</script>
