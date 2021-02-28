<script>
    import { dragoToUpdate } from '../store'
    import Textfield from '@smui/textfield'
    import Button, { Group, Label } from '@smui/button'

    $: if($dragoToUpdate.city !== 'OTHER'){
        delete $dragoToUpdate.pos
    }

    $: if($dragoToUpdate.storage !== 'BARN'){
        $dragoToUpdate.object = null
    }

</script>

<div>
    <Textfield
        class="mdc-text-field--fullwidth"
        bind:value="{$dragoToUpdate.name}"
        label="Nom"
    />
    <div>
        <Label>Genre</Label>
        <Group
            variant="outlined"
            style="display: flex; justify-content: stretch;"
        >
            <Button
                on:click={() => ($dragoToUpdate.gender = 'MALE')}
                variant={$dragoToUpdate.gender === 'MALE'
                    ? 'unelevated'
                    : 'outlined'}
                color="primary"><Label>Mâle</Label></Button
            >
            <Button
                on:click={() => ($dragoToUpdate.gender = 'FEMALE')}
                variant={$dragoToUpdate.gender === 'FEMALE'
                    ? 'unelevated'
                    : 'outlined'}
                color="primary"><Label>Femelle</Label></Button
            >
        </Group>
    </div>
    <div>
        <Label>Comportement</Label>
        <Group
            variant="outlined"
            style="display: flex; justify-content: stretch;"
        >
            <Button
                on:click={() => ($dragoToUpdate.behaviour = 'WILD')}
                variant={$dragoToUpdate.behaviour === 'WILD'
                    ? 'unelevated'
                    : 'outlined'}
                color="primary"><Label>Sauvage</Label></Button
            >
            <Button
                on:click={() => ($dragoToUpdate.behaviour = 'PET')}
                variant={$dragoToUpdate.behaviour === 'PET'
                    ? 'unelevated'
                    : 'outlined'}
                color="primary"><Label>Apprivoisée</Label></Button
            >
        </Group>
    </div>
</div>
<div>
    <Label>Statut</Label>
    <Group variant="outlined" style="display: flex; justify-content: stretch;">
        <Button
            on:click={() => ($dragoToUpdate.fecund = false)}
            variant={!$dragoToUpdate.fecund ? 'unelevated' : 'outlined'}
            color="primary"><Label>Non Féconde</Label></Button
        >
        <Button
            on:click={() => ($dragoToUpdate.fecund = true)}
            variant={$dragoToUpdate.fecund ? 'unelevated' : 'outlined'}
            color="primary"><Label>Féconde</Label></Button
        >
    </Group>
</div>
<div>
    <Label>Emplacement</Label>
    <Group variant="outlined" style="display: flex; justify-content: stretch;">
        <Button
            on:click={() => ($dragoToUpdate.storage = 'INVENTORY')}
            variant={$dragoToUpdate.storage === 'INVENTORY'
                ? 'unelevated'
                : 'outlined'}
            color="primary"><Label>Inventaire</Label></Button
        >
        <Button
            on:click={() => ($dragoToUpdate.storage = 'BARN')}
            variant={$dragoToUpdate.storage === 'BARN' ? 'unelevated' : 'outlined'}
            color="primary"><Label>Etable</Label></Button
        >
        <Button
            on:click={() => ($dragoToUpdate.storage = 'EQUIPED')}
            variant={$dragoToUpdate.storage === 'EQUIPED'
                ? 'unelevated'
                : 'outlined'}
            color="primary"><Label>Equipée</Label></Button
        >
    </Group>
</div>
{#if $dragoToUpdate.storage == 'BARN'}
    <div>
        <Label>Localisation</Label>
        <Group
            variant="outlined"
            style="display: flex; justify-content: stretch;"
        >
            <Button
                on:click={() => ($dragoToUpdate.city = 'BONTA')}
                variant={$dragoToUpdate.city === 'BONTA'
                    ? 'unelevated'
                    : 'outlined'}
                color={$dragoToUpdate.city === 'BONTA' ? 'secondary' : 'primary'}
                ><Label>Bonta</Label></Button
            >
            <Button
                on:click={() => ($dragoToUpdate.city = 'BRAKMAR')}
                variant={$dragoToUpdate.city === 'BRAKMAR'
                    ? 'unelevated'
                    : 'outlined'}
                color="primary"><Label>Brakmar</Label></Button
            >
            <Button
                on:click={() => {
                    $dragoToUpdate.city = 'OTHER'
                    $dragoToUpdate.pos = { lat: '', long: '' }
                }}
                variant={$dragoToUpdate.city === 'OTHER'
                    ? 'unelevated'
                    : 'outlined'}
                color="primary"><Label>Enclos privé</Label></Button
            >
        </Group>
    </div>
{/if}
{#if $dragoToUpdate.city && $dragoToUpdate.city === 'OTHER'}
    <Textfield
        class="mdc-text-field--fullwidth"
        bind:value={$dragoToUpdate.pos.lat}
        label="Latitude de la loc"
    />
    <Textfield
        class="mdc-text-field--fullwidth"
        bind:value={$dragoToUpdate.pos.long}
        label="Longitude de la loc"
    />
{/if}
{#if $dragoToUpdate.storage === 'BARN'}
    <div>
        <Label>Objet</Label>
        <div>
            <Button
                on:click={() => ($dragoToUpdate.object = null)}
                variant={$dragoToUpdate.object === null
                    ? 'unelevated'
                    : 'outlined'}
                color={$dragoToUpdate.object === null ? 'secondary' : 'primary'}
                ><Label>Aucun</Label></Button
            >
        </div>
        <Group
            variant="outlined"
            style="display: flex; justify-content: stretch; margin-top:5px;"
        >
            <Button
                on:click={() => ($dragoToUpdate.object = 'DRAGOBUTT')}
                variant={$dragoToUpdate.object === 'DRAGOBUTT'
                    ? 'unelevated'
                    : 'outlined'}
                color="primary"><Label>Dragofesses</Label></Button
            >
            <Button
                on:click={() => ($dragoToUpdate.object = 'PATTER')}
                variant={$dragoToUpdate.object === 'PATTER'
                    ? 'unelevated'
                    : 'outlined'}
                color="primary"><Label>Caresseurs</Label></Button
            >
            <Button
                on:click={() => ($dragoToUpdate.object = 'DRINKINGTROUGH')}
                variant={$dragoToUpdate.object === 'DRINKINGTROUGH'
                    ? 'unelevated'
                    : 'outlined'}
                color="primary"><Label>Abreuvoirs</Label></Button
            >
        </Group>
        <Group
            variant="outlined"
            style="display: flex; justify-content: stretch; margin-top:5px;"
        >
            <Button
                on:click={() => ($dragoToUpdate.object = 'LIGHTNINGTHROWER')}
                variant={$dragoToUpdate.object === 'LIGHTNINGTHROWER'
                    ? 'unelevated'
                    : 'outlined'}
                color="primary"><Label>Foudroyeurs</Label></Button
            >
            <Button
                on:click={() => ($dragoToUpdate.object = 'SLAPPER')}
                variant={$dragoToUpdate.object === 'SLAPPER'
                    ? 'unelevated'
                    : 'outlined'}
                color="primary"><Label>Baffeurs</Label></Button
            >
            <Button
                on:click={() => ($dragoToUpdate.object = 'MANGER')}
                variant={$dragoToUpdate.object === 'MANGER'
                    ? 'unelevated'
                    : 'outlined'}
                color="primary"><Label>Mangeoires</Label></Button
            >
        </Group>
    </div>
{/if}
