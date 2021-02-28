import { writable } from 'svelte/store'

const defaultDrago = {
    name: '',
    gender: 'MALE',
    fecund: false,
    behaviour: 'PET',
    city: 'BRAKMAR',
    object: null,
    storage: 'BARN',
    type: '',
}

export const dragoToUpdate = createDragoTemplate()

function createDragoTemplate() {
    const { subscribe, set, update } = writable(defaultDrago)
    return {
        subscribe,
        set,
        update,
        reset: () => set({
            name: '',
            gender: 'MALE',
            fecund: false,
            behaviour: 'PET',
            city: 'BRAKMAR',
            object: null,
            storage: 'BARN',
            type: '',
        }),
    }
}

export const dragoToAdd = createDragoTemplate()
