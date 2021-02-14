<script>
    import { mutation } from 'svelte-apollo';
    import { SIGN_IN } from "../queries";
    const signIn = mutation(SIGN_IN)

    let email;
    let password;
    let passwordBis;

    async function login(e) {
        e.preventDefault()
        try {
            if(password == passwordBis) {
                const user = await signIn({ variables: { email, password } });
                console.log(user)
            }else{
                throw new Error("Passwords don't match")
            }
        } catch (error) {
            console.error(error)
        }
    }
</script>

<form>
    <label for="email">Email</label>
    <input bind:value={email} id="email" type="email" />
    <label for="password">Password</label>
    <input bind:value={password} id="password" type="password" />
    <label for="password-retry">Confirm password</label>
    <input bind:value={passwordBis} id="password-retry" type="password" />
    <button on:click={e => login(e)}>SignIn</button>
</form>

