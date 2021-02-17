<script>
    import RegisterForm from '../components/RegisterForm.svelte';
</script>

<svelte:head>
	<title>DofusApp - Register</title>
</svelte:head>

<div class="bg">
    <div class="wrapper">
        <div class="form__wrapper">
            <RegisterForm />
        </div>
    </div>
</div>

<style lang="scss" scoped>
    @import ".././theme/variables.scss";
    .bg {
        min-height: 100%;
        width: 100%;
        background-color: $primary;
        display: flex;
        justify-content: center;
        align-items: center;
        .wrapper{
            flex-wrap: wrap;
            min-width: 30vw;
            max-width: 80vw;
            .form__wrapper{
                background: $secondary;
                border-radius: 20px;
                margin-top: -3em;
                background: #33425b;
                box-shadow:  5px 5px 10px #303e56,
                            -5px -5px 10px #364660;
                padding: 1em;
            }
        }
    }
</style>