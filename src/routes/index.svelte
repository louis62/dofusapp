<script context="module">
  import client from '../lib/apollo';
  import { ME } from '../queries';
 
  export async function preload(page, session) {
    if (typeof window !== 'undefined') {
      try{
        const data = await client.query({
          query: ME
        })
        return { data }
      }catch(error){
        this.redirect(302, 'login');
      }
    }
  }
</script> 
 
<script>
  import { setClient } from 'svelte-apollo';
 
  export let data;

  setClient(client);
 
</script>
{#await data}
  <p>loading</p>
{:then me} 
  <p>Bienvenue {me && me.data.me.id} !</p>
{/await}