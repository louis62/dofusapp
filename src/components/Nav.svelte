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
    width: 100%;
    display: flex;
    justify-content: center;
    margin: auto;
    height: 15vh;
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
        display: flex;
        list-style-type: none;
        text-align: center;
        align-items: center;
        flex-wrap: wrap;
        flex-basis: 230px;
        height: 100%;
        div {
          position: relative;
          display: flex;
          align-items: center;
          justify-content:center;
          background: $primary;
          height: 100%;
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
  @media screen and (max-width: '580px'){
    h2,hr{
      display:none;
    }
  }
</style>

{#if $session.authenticated && !blackList.includes(segment)}
<nav>
  <ul>
    <li>
      <div>
        <img src="logo-144.png" alt="DofusApp"/>
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
