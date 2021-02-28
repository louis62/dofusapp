<script>
    import { dragoToAdd } from '../store'
    import Textfield from '@smui/textfield'
    import Button, { Group, Label } from '@smui/button'

    $: if($dragoToAdd.city !== 'OTHER'){
        delete $dragoToAdd.pos
    }

    $: if($dragoToAdd.storage !== 'BARN'){
        $dragoToAdd.object = null
    }

</script>

<div>
    <Textfield
        class="mdc-text-field--fullwidth"
        bind:value={$dragoToAdd.name}
        label="Nom"
    />
    <div>
        <Label>Genre</Label>
        <Group
            variant="outlined"
            style="display: flex; justify-content: stretch;"
        >
            <Button
                on:click={() => ($dragoToAdd.gender = 'MALE')}
                variant={$dragoToAdd.gender === 'MALE'
                    ? 'unelevated'
                    : 'outlined'}
                color="primary"><Label>Mâle</Label></Button
            >
            <Button
                on:click={() => ($dragoToAdd.gender = 'FEMALE')}
                variant={$dragoToAdd.gender === 'FEMALE'
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
                on:click={() => ($dragoToAdd.behaviour = 'WILD')}
                variant={$dragoToAdd.behaviour === 'WILD'
                    ? 'unelevated'
                    : 'outlined'}
                color="primary"><Label>Sauvage</Label></Button
            >
            <Button
                on:click={() => ($dragoToAdd.behaviour = 'PET')}
                variant={$dragoToAdd.behaviour === 'PET'
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
            on:click={() => ($dragoToAdd.fecund = false)}
            variant={!$dragoToAdd.fecund ? 'unelevated' : 'outlined'}
            color="primary"><Label>Non Féconde</Label></Button
        >
        <Button
            on:click={() => ($dragoToAdd.fecund = true)}
            variant={$dragoToAdd.fecund ? 'unelevated' : 'outlined'}
            color="primary"><Label>Féconde</Label></Button
        >
    </Group>
</div>
<div>
    <Label>Emplacement</Label>
    <Group variant="outlined" style="display: flex; justify-content: stretch;">
        <Button
            on:click={() => ($dragoToAdd.storage = 'INVENTORY')}
            variant={$dragoToAdd.storage === 'INVENTORY'
                ? 'unelevated'
                : 'outlined'}
            color="primary"><Label>Inventaire</Label></Button
        >
        <Button
            on:click={() => ($dragoToAdd.storage = 'BARN')}
            variant={$dragoToAdd.storage === 'BARN' ? 'unelevated' : 'outlined'}
            color="primary"><Label>Etable</Label></Button
        >
        <Button
            on:click={() => ($dragoToAdd.storage = 'EQUIPED')}
            variant={$dragoToAdd.storage === 'EQUIPED'
                ? 'unelevated'
                : 'outlined'}
            color="primary"><Label>Equipée</Label></Button
        >
    </Group>
</div>
{#if $dragoToAdd.storage == 'BARN'}
    <div>
        <Label>Localisation</Label>
        <Group
            variant="outlined"
            style="display: flex; justify-content: stretch;"
        >
            <Button
                on:click={() => ($dragoToAdd.city = 'BONTA')}
                variant={$dragoToAdd.city === 'BONTA'
                    ? 'unelevated'
                    : 'outlined'}
                color={$dragoToAdd.city === 'BONTA' ? 'secondary' : 'primary'}
                ><Label>Bonta</Label></Button
            >
            <Button
                on:click={() => ($dragoToAdd.city = 'BRAKMAR')}
                variant={$dragoToAdd.city === 'BRAKMAR'
                    ? 'unelevated'
                    : 'outlined'}
                color="primary"><Label>Brakmar</Label></Button
            >
            <Button
                on:click={() => {
                    $dragoToAdd.city = 'OTHER'
                    $dragoToAdd.pos = { lat: '', long: '' }
                }}
                variant={$dragoToAdd.city === 'OTHER'
                    ? 'unelevated'
                    : 'outlined'}
                color="primary"><Label>Enclos privé</Label></Button
            >
        </Group>
    </div>
{/if}
{#if $dragoToAdd.city && $dragoToAdd.city === 'OTHER'}
    <Textfield
        class="mdc-text-field--fullwidth"
        bind:value={$dragoToAdd.pos.lat}
        label="Latitude de la loc"
    />
    <Textfield
        class="mdc-text-field--fullwidth"
        bind:value={$dragoToAdd.pos.long}
        label="Longitude de la loc"
    />
{/if}
{#if $dragoToAdd.storage === 'BARN'}
    <div>
        <Label>Objet</Label>
        <div>
            <Button
                on:click={() => ($dragoToAdd.object = null)}
                variant={$dragoToAdd.object === null
                    ? 'unelevated'
                    : 'outlined'}
                color={$dragoToAdd.object === null ? 'secondary' : 'primary'}
                ><Label>Aucun</Label></Button
            >
        </div>
        <Group
            variant="outlined"
            style="display: flex; justify-content: stretch; margin-top:5px;"
        >
            <Button
                on:click={() => ($dragoToAdd.object = 'DRAGOBUTT')}
                variant={$dragoToAdd.object === 'DRAGOBUTT'
                    ? 'unelevated'
                    : 'outlined'}
                color="primary"><Label>Dragofesses</Label></Button
            >
            <Button
                on:click={() => ($dragoToAdd.object = 'PATTER')}
                variant={$dragoToAdd.object === 'PATTER'
                    ? 'unelevated'
                    : 'outlined'}
                color="primary"><Label>Caresseurs</Label></Button
            >
            <Button
                on:click={() => ($dragoToAdd.object = 'DRINKINGTROUGH')}
                variant={$dragoToAdd.object === 'DRINKINGTROUGH'
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
                on:click={() => ($dragoToAdd.object = 'LIGHTNINGTHROWER')}
                variant={$dragoToAdd.object === 'LIGHTNINGTHROWER'
                    ? 'unelevated'
                    : 'outlined'}
                color="primary"><Label>Foudroyeurs</Label></Button
            >
            <Button
                on:click={() => ($dragoToAdd.object = 'SLAPPER')}
                variant={$dragoToAdd.object === 'SLAPPER'
                    ? 'unelevated'
                    : 'outlined'}
                color="primary"><Label>Baffeurs</Label></Button
            >
            <Button
                on:click={() => ($dragoToAdd.object = 'MANGER')}
                variant={$dragoToAdd.object === 'MANGER'
                    ? 'unelevated'
                    : 'outlined'}
                color="primary"><Label>Mangeoires</Label></Button
            >
        </Group>
    </div>
{/if}
