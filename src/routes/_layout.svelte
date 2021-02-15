<script>
	import Nav from '../components/Nav.svelte';
	import client from '../lib/apollo';
	import { setClient } from "svelte-apollo";
	setClient(client);
	export let segment;
</script>

<style lang="scss">
	@import '.././theme/global.scss';
</style>

<!-- <Nav {segment}/> -->

<main>
	<slot {segment} ></slot>
</main>