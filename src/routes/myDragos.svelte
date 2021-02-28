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
    import { goto } from '@sapper/app'
    import client from '../lib/apollo'
    import { query, mutation } from 'svelte-apollo'
    import { GET_MY_DRAGOS, UPDATE_ONE_DRAGOTURKEY, GET_ONE_DRAGO } from '../queries'
    import { dragoToUpdate } from '../store'
    import Loading from '../components/Loading.svelte'
    import UpdateDragoForm from '../components/UpdateDragoForm.svelte'

    const myDragos = query(GET_MY_DRAGOS)
    const updateOneDrago = mutation(UPDATE_ONE_DRAGOTURKEY)

    let dialog

    async function saveDrago() {
        let data = {}
        Object.keys($dragoToUpdate).forEach(key => {
            data[key] = { set: $dragoToUpdate[key] } 
        })
        delete data.id
        delete data.__typename
        delete data.type
        const where = { id: $dragoToUpdate.id }
        await updateOneDrago({ variables: { data, where } })
        myDragos.refetch()
    }

    async function openDialog(id) {
        const dragoFetch = await client.query({ query: GET_ONE_DRAGO, variables: { id }, fetchPolicy: 'no-cache' })
        $dragoToUpdate = { ...dragoFetch.data && dragoFetch.data.dragoTurkey }
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
        >
            <Title id="dialog-title"
                >{$dragoToUpdate && $dragoToUpdate.name}</Title
            >
            <Content id="dialog-content">
                <UpdateDragoForm />
            </Content>
            <DialogActions>
                <Button
                    color="secondary"
                    on:click={() => saveDrago()}
                    action="accept"
                >
                    <Label>Enregistrer</Label>
                </Button>
            </DialogActions>
        </Dialog>
    
    <div class="wrapper">
        {#if $myDragos.loading}
            <Loading />
        {:else}
            {#each $myDragos.data.userDragos as dragoTurkey}
                <Card>
                    <PrimaryAction on:click={() => openDialog(dragoTurkey.id)}>
                        <Media
                            style="background-image: url(dragos/{dragoTurkey
                                .type.imageName}); background-color: #33425b;"
                            aspectRatio="square"
                        >
                            <MediaContent>
                                <div class="media__wrapper">
                                    <h2
                                        class="mdc-typography--headline6"
                                        style="margin: 0; font-weight: 600"
                                    >
                                        {dragoTurkey.name}
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
                            <Label>Voir le détail</Label>
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
