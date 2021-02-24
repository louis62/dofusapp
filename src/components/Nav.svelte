<script>
  import { stores } from '@sapper/app';
  import Button, {Label} from '@smui/button'
  const { session } = stores();
  export let segment;
  let blackList = ['register', 'login']

  import { mutation } from 'svelte-apollo';
  import { SIGN_OUT } from "../queries";
  const signOut = mutation(SIGN_OUT)
  async function logout() {
      try {
          await signOut();
          session.set({});
        } catch (error) {
          console.log(error)
      }
  }
</script>

<style scoped>
  @import '.././theme/variables.scss';
  nav{
    width: 85%;
    display: flex;
    justify-content: center;
    margin: auto;
    height: 15vh;
    border-radius: 25px;
    background: $secondary;
    box-shadow:  5px 5px 10px #d2e2e9,
                -5px -5px 10px #def0f7;
    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding-inline-start: 0;
      margin: 0;
      li{
        list-style-type: none;
        text-align: center;
        div {
          position: relative;
          background: $primary;
          height: 100%;
          border-top-left-radius: 25px;
          border-bottom-left-radius: 25px;
          img{
            width: 80%;
            text-align: center;
          }
        }
        h1 {
          font-size: 1.7em;
          strong{
            color: $tertiary;
          }
        }
        h2 {
          font-size: 1.2em;
          font-style: italic;
        }
        hr {
          width: 20%;
          height: 2px;
          border: none;
          background: $tertiary;
        }
      }
    }
  }
</style>

{#if $session.authenticated && !blackList.includes(segment)}
<nav>
  <ul>
    <li>
      <div>
        <img src="logo-144.png" />
      </div>
    </li>
    <li>
      <h1>Bienvenue <strong>{$session.user.name}</strong> ! </h1>
      <hr />
      <h2>Un jour je serai le meilleur éleveur...</h2>
    </li>
    <li>
      <Button on:click={ ()=>logout() } color="primary" variant='text'>
        <Label>Se déconnecter</Label>
      </Button>
    </li>
    <!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
  </ul>
</nav>
{/if}
