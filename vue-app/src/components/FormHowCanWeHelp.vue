<template>
	<form class="get-involved" @submit.prevent="getValuesOnSubmit">
		<span>I am </span>
		<select name="choose-entity">
			<option value="individual">an Individual</option>
			<option value="company">a Company</option>
		</select>
		<span>and I </span>
		<select name="choose-action">
			<option value="learn">want to learn</option>
			<option value="help">want to help</option>
		</select>
		<input type="submit" value="Start now">
	</form>
</template>

<script>
export default {
	methods: {
		getValuesOnSubmit: function(submitEvent) {
			console.log(submitEvent.target.elements['choose-entity'].value,submitEvent.target.elements['choose-action'].value);

			this.$store.commit({
				type: 'updateHowHelpFormValues',
				entity: submitEvent.target.elements['choose-entity'].value,
				action: submitEvent.target.elements['choose-action'].value
			});
		}
	}
}
</script>
