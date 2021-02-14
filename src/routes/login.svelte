<script>
    import LoginForm from '../components/LoginForm.svelte';
    export let segment;
</script>

<svelte:head>
	<title>DofusApp - Login</title>
</svelte:head>

<div class="bg">
    <div class="wrapper">
        <img alt='Borat' src='logo-512.png'>
        <div class="form__wrapper">
            <LoginForm />
        </div>
    </div>
</div>

<style lang="scss" scoped>
    @import ".././theme/variables.scss";
    .bg {
        height: 100%;
        width: 100%;
        background-color: $primary;
        display: flex;
        justify-content: center;
        align-items: center;
        .wrapper{
            flex-wrap: wrap;
            flex-basis: 300px;
            .form__wrapper{
                margin-top: -3em;
                background: $secondary;
                padding: 1em;
            }
        }
    }
</style>