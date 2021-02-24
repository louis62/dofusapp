<script context="module">
	export async function preload(page, session){
		if (!session.user && (page.path !== '/login' && page.path !== '/register') ){
			this.redirect(302, 'login')
		}
	}
</script>
<script>
	import client from '../lib/apollo';
	import { setClient } from "svelte-apollo";
	import Nav from '../components/Nav.svelte';

	setClient(client);
	export let segment;
	segment = segment;
</script>

<main>
	<Nav {segment} />
	<slot></slot>
</main>
<style global>
    @import '../theme/global.scss';
</style>