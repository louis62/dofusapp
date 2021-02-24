<script>
  import { stores } from '@sapper/app';
  const { session } = stores();
  export let segment;
  let blackList = ['register', 'login']

  import { mutation } from 'svelte-apollo';
  import Fab from '@smui/fab';
  import { SIGN_OUT } from "../queries";
  const signOut = mutation(SIGN_OUT)
  async function logout() {
      try {
          await signOut();
          $session.user = undefined
          location.href = '/login'
        } catch (error) {
          console.log(error)
      }
  }
</script>

<style>
  
  nav {
    display: block;
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  .selected {
    position: relative;
    display: inline-block;
  }

  .selected::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: yellow;
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style>

{#if $session.authenticated && !blackList.includes(segment)}
<nav>
  <ul>
    <li>
      <a class={segment === undefined ? 'selected' : ''} href=".">home</a>
    </li>
    <li>
      <a class={segment === 'register' ? 'selected' : ''} href="register">register</a>
    </li>
    <li>
      <a class={segment === 'login' ? 'selected' : ''} href="login">register</a>
    </li>
    <li>{$session.user.name}</li>
    <li><Fab extended on:click={() => logout()}>Logout</Fab></li>

    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
  </ul>
</nav>
{/if}
