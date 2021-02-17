<script>
	import Nav from '../components/Nav.svelte';
	import client from '../lib/apollo';
	import { setClient } from "svelte-apollo";
	export let segment;
	setClient(client);
</script>

<style lang="scss">
	@import '.././theme/global.scss';
</style>

<main>
	<Nav {segment} />
	<slot></slot>
</main>