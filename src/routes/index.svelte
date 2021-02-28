<script>
    import { goto } from '@sapper/app'
    import Button, { Label } from '@smui/button'
</script>

<div class="container">
    <Button color="primary" on:click={() => goto('addDrago')} variant="raised"
        ><Label>Ajouter une dinde</Label></Button
    >
    <Button color="secondary" on:click={() => goto('myDragos')} variant="raised"
        ><Label>Voir mes dindes</Label></Button
    >
</div>

<style>
    .container {
        margin: 2em;
    }
</style>
