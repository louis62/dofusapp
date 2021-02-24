<script>
  import Textfield from '@smui/textfield';
  import {Icon as CommonIcon} from '@smui/common';
  import Snackbar, { Label } from '@smui/snackbar';
  import { mutation } from 'svelte-apollo';
  import Fab from '@smui/fab';
  import { goto, stores } from '@sapper/app';
  import { SIGN_UP } from "../queries";
  const signUp = mutation(SIGN_UP)
  const { session } = stores()
  let mySnackbar;
  export let errorMessage = '';
  export let name = '';
  export let email = '';
  export let password = '';
  export let passwordBis = '';
  async function register(e) {
      e.preventDefault()
      try {
        if(passwordBis !== password ){
          throw new Error("Passwords not matching")
        }
        const response = await signUp({ variables: { name, email, password } });
        const { user } = response.data.signup
        $session.user = user
        location.href = '/'
      } catch (error) {
          errorMessage = error;
          mySnackbar.open();
      }
  }
</script>
<form>
  <Textfield class="mdc-text-field--fullwidth" bind:value={name} label="" type="text">
    <span slot="label"><CommonIcon class="material-icons" style="font-size: 1em; line-height: normal; vertical-align: middle;">person</CommonIcon> Pseudo</span>
  </Textfield>
  <Textfield class="mdc-text-field--fullwidth" bind:value={email} label="" type="email">
      <span slot="label"><CommonIcon class="material-icons" style="font-size: 1em; line-height: normal; vertical-align: middle;">email</CommonIcon> Email</span>
  </Textfield>
  <Textfield class="mdc-text-field--fullwidth" bind:value={password} label="" type="password">
      <span slot="label"><CommonIcon class="material-icons" style="font-size: 1em; line-height: normal; vertical-align: middle;">lock</CommonIcon> Password</span>
  </Textfield>
  <Textfield class="mdc-text-field--fullwidth" bind:value={passwordBis} label="" type="password">
    <span slot="label"><CommonIcon class="material-icons" style="font-size: 1em; line-height: normal; vertical-align: middle;">lock</CommonIcon> Password confirmation</span>
  </Textfield>
  <Snackbar bind:this={mySnackbar}>
      <Label>{errorMessage}</Label>
  </Snackbar>
</form>
<Fab color="primary" style="margin-top: 1em;" extended on:click={e => register(e)}>Register</Fab>
<Fab style="margin-top: 1em;" extended on:click={() => goto('/login')}>Sign in</Fab>

<style lang="scss">
* :global(.mdc-text-field) {
  margin-top: 1em;
}
</style>