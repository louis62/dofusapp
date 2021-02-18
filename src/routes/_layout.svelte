<script>
	import client from '../lib/apollo';
	import { setClient } from "svelte-apollo";
	setClient(client);
	export let segment;
	segment = segment;
</script>

<main>
	<slot></slot>
</main>
<style>
    @import '../theme/global.scss';
</style>