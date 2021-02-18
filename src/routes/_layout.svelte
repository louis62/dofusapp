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
main {
    height: 100vh;
    position: relative;
    width: 100vw;
    background-color: #d8e9f0;
    margin: 0 auto;
    box-sizing: border-box;
}
</style>