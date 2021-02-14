<script>
    import Textfield from '@smui/textfield';
    import CommonIcon from '@smui/common/Icon';
    import Snackbar, {Actions, Label} from '@smui/snackbar';
    import { mutation } from 'svelte-apollo';
    import Fab from '@smui/fab';
    import { goto } from '@sapper/app';
    import { SIGN_IN } from "../queries";
    const signIn = mutation(SIGN_IN)

    let mySnackbar;
    export let errorMessage = '';

    export let email = '';
    export let password = '';

    async function login(e) {
        e.preventDefault()
        try {
            const user = await signIn({ variables: { email, password } });
        } catch (error) {
            errorMessage = error;
            mySnackbar.open();
        }
    }
</script>

<form>
    <Textfield class="mdc-text-field--fullwidth" bind:value={email} label="" type="email">
        <span slot="label"><CommonIcon class="material-icons" style="font-size: 1em; line-height: normal; vertical-align: middle;">email</CommonIcon> Email</span>
    </Textfield>
    <Textfield class="mdc-text-field--fullwidth" bind:value={password} label="" type="password">
        <span slot="label"><CommonIcon class="material-icons" style="font-size: 1em; line-height: normal; vertical-align: middle;">lock</CommonIcon> Password</span>
    </Textfield>
    <Snackbar bind:this={mySnackbar}>
        <Label>{errorMessage}</Label>
    </Snackbar>
</form>
<Fab color="primary" style="margin-top: 1em;" extended on:click={e => login(e)}>Sign in</Fab>
<Fab style="margin-top: 1em;" extended on:click={e => goto('/register')}>Register</Fab>

<style lang="scss">
* :global(.mdc-text-field) {
    margin-top: 1em;
}
</style>
