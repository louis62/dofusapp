<script context="module">
	export async function preload(page, session){
		if (!session.user && (page.path !== '/login' && page.path !== '/register') ){
			this.redirect(302, 'login')
		}else if (session.user && page.path === '/login'){
			this.redirect(302, '/')
		}
	}
</script>
<script>
	import client from '../lib/apollo';
	import { setClient } from "svelte-apollo";
	import { stores, goto } from '@sapper/app';
	import Nav from '../components/Nav.svelte';
	setClient(client);
	const { session } = stores();

	$: if(!$session.user && (segment !== 'login' && segment !== 'register')){
		goto('login');
	}else if($session.user && segment === 'login'){
		goto('/');
	}
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