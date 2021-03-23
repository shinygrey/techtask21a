<template>
	<main>
		<section class="hero-pic-bg">
			<h1>Get online week 2021</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			<button>Get involved now!</button>
		</section>
		<section class="social-change-charity">
			<div class="left-pic-bg"></div>
			<div class="right-text">
				<h2>We are a social change charity, helping people to improve their lives through digital.</h2>
				<p>We tackle the most pressing issues of our time, working with partners in thousands of communities across the UK and further afield.</p>
				<button>Learn more about us</button>
			</div>
		</section>
		<section class="how-can-we-help">
			<h2>How can we help you?</h2>
			<p>Let us know who you are and what you're looking for, and we'll help get you to the right place.</p>
			<FormHowCanWeHelp />
		</section>
		<section class="what-do-we-do">
			<h2>What do we do?</h2>
			<p>You might not have heard of us, but we're the people behind the following impactful programmes.</p>
			<div class="card-deck">
				<div class="card">
					<h3>Get online week</h3>
					<p>Lorem impsum dolor sit amet</p>
					<button>Read more</button>
				</div>
				<div class="card">
					<h3>Learn my way</h3>
					<p>Lorem impsum dolor sit amet</p>
					<button>Read more</button>
				</div>
				<div class="card">
					<h3>Make it click</h3>
					<p>Lorem impsum dolor sit amet</p>
					<button>Read more</button>
				</div>
				<div class="card">
					<h3>Digital you</h3>
					<p>Lorem impsum dolor sit amet</p>
					<button>Read more</button>
				</div>
			</div>
			<div class="more-about">
				<button>More about what we do</button>
			</div>			
		</section>
	</main>
</template>

<script>
import FormHowCanWeHelp from './FormHowCanWeHelp';

export default {
	name: 'Home',
	components: {
		FormHowCanWeHelp
	},
	props: {
		msg: String
	}
}
</script>
