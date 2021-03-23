<template>
	<main>
		<section class="bg-task-blue">
			<h1>Get Involved</h1>
			<FormHowCanWeHelp />
		</section>
	</main>
</template>

<script>
import FormHowCanWeHelp from './FormHowCanWeHelp';

export default {
	name: 'GetInvolved',
	components: {
		FormHowCanWeHelp
	},
	props: {
		msg: String
	}
}
</script>
