<script context="module">
  export async function preload(page, session) {
    const { token } = session;

    if (!token) {
      return this.redirect(302, "login");
    }

    return;
  }
</script>

<script>
import { query, getClient } from 'svelte-apollo';
import { ME } from '../queries';
getClient()
const me = query(ME);

</script>


<svelte:head>
  <title>Dofus App</title>
</svelte:head>

{#if $me.loading}
  Loading...
{:else if $me.error}
  Error: {$me.error.message}
{:else}
  {$me.name}
{/if}
