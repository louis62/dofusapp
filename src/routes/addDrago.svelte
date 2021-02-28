<script>
    import Button, { Label } from '@smui/button'
    import Dialog, {
        Title,
        Content,
        Actions as DialogActions,
    } from '@smui/dialog'
    import Card, {
        PrimaryAction,
        Media,
        MediaContent,
        Actions,
    } from '@smui/card'
    import Loading from '../components/Loading.svelte'
    import AddDragoForm from '../components/AddDragoForm.svelte'
    import { goto, stores } from '@sapper/app'
    import { query, mutation } from 'svelte-apollo'
    import { dragoToAdd } from '../store'
    import { GET_DRAGOTYPES, CREATE_ONE_DRAGOTURKEY } from '../queries'

    const dragotypes = query(GET_DRAGOTYPES)

    const createOneDragoTurkey = mutation(CREATE_ONE_DRAGOTURKEY)

    const { session } = stores()

    let dialog

    async function addDrago() {
        const data = {
            ...$dragoToAdd,
            type: { connect: { name: $dragoToAdd.type } },
            user: { connect: { id: $session.user.userId } },
        }
        await createOneDragoTurkey({ variables: { data } })
    }

    async function addDragoAndRedirect(){
        await addDrago()
        goto('myDragos')
    }

    function resetDrago(){
        dragoToAdd.reset()
    }

    function openDialog(dragotypeName) {
        $dragoToAdd.type = dragotypeName
        dialog.open()
    }
</script>

<div class="container">
    <Button
        style="margin: 2em;"
        color="secondary"
        on:click={() => goto('/')}
        variant="outlined"
    >
        <Label>Retour</Label>
    </Button>

    <Dialog
        bind:this={dialog}
        aria-labelledby="dialog-title"
        aria-describedby="dialog-content"
        on:MDCDialog:closed={resetDrago}
    >
        <Title id="dialog-title">Dragodinde {$dragoToAdd.type}</Title>
        <Content id="dialog-content">
            <AddDragoForm />
        </Content>
        <DialogActions>
            <Button color="secondary" on:click={() => addDragoAndRedirect()} action="accept">
                <Label>Ajouter et voir mes dindes</Label>
            </Button>
            <Button color="secondary" on:click={() => addDrago()} action="accept">
                <Label>Ajouter</Label>
            </Button>
        </DialogActions>
    </Dialog>

    <div class="wrapper">
        {#if $dragotypes.loading}
            <Loading />
        {:else}
            {#each $dragotypes.data.dragoTypes as dragotype}
                <Card>
                    <PrimaryAction on:click={() => openDialog(dragotype.name)}>
                        <Media
                            style="background-image: url(dragos/{dragotype.imageName}); background-color: #33425b;"
                            aspectRatio="square"
                        >
                            <MediaContent>
                                <div class="media__wrapper">
                                    <h2
                                        class="mdc-typography--headline6"
                                        style="margin: 0; font-weight: 600"
                                    >
                                        {dragotype.name}
                                    </h2>
                                </div>
                            </MediaContent>
                        </Media>
                    </PrimaryAction>
                    <Actions fullBleed>
                        <Button
                            class="info-btn"
                            on:click={() => console.log('Not yet')}
                        >
                            <Label>Voir la fiche</Label>
                            <i class="material-icons" aria-hidden="true"
                                >arrow_forward</i
                            >
                        </Button>
                    </Actions>
                </Card>
            {/each}
        {/if}
    </div>
</div>

<style scoped>
    * :global(.mdc-card) {
        flex-basis: 250px;
        margin: 1em;
    }
    .container {
        margin: auto;
    }
    .wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .media__wrapper {
        color: #d8e9f0;
        position: absolute;
        bottom: 16px;
        left: 0.5em;
    }

    @media screen and (max-width: 768px) {
        * :global(.mdc-card) {
            flex-basis: 40%;
            margin: 1em;
        }
        * :global(.info-btn) {
            font-size: 0.6em;
        }
        * :global(.mdc-typography--headline6) {
            font-size: 1em;
        }
    }
</style>
