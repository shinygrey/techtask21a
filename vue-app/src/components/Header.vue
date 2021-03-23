<template>
	<header>
		<div>
			<img class="logo" src="" />
		</div>
		<nav class="top">
			<ul>
				<li><router-link class="menu-link" to="/">Home</router-link></li>
				<li><router-link class="menu-link" to="/what-we-do">What we do</router-link></li>
				<li><router-link class="menu-link" to="/digital-divide">The digital divide</router-link></li>
				<li><router-link class="menu-link" to="/get-involved">Get involved</router-link></li>
				<li><router-link class="menu-link" to="/our-network">Our network</router-link></li>
				<li><router-link class="menu-link" to="/insights">Insights</router-link></li>
			</ul>
		</nav>
	</header>
</template>

<script>
export default {
	name: 'Header',
	props: {
		msg: String
	}
}
</script>
