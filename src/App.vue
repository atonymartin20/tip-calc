<template>
	<div id="app">
		<logo />
		<router-view />
	</div>
</template>

<script>
	import Logo from './components/logo/logo.vue';

	export default {
		name: 'App', 
		components: { Logo }
	}
</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');

	#app {
		font-family: 'Space Mono', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%; 
		height: 1024px;
		min-height: 100vh;
		flex-direction: column;
		background: #C5E4E7;
	}

	@media (max-width: 720px) {
		#app {
			height: 933px;
			justify-content: flex-start;
		}
	}
</style>
