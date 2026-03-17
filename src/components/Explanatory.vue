<script setup lang="ts">
import { ref } from 'vue';
import { getKeyDownEventHandlers } from '../assets/key-down-event-handlers';

const handlers = ref(getKeyDownEventHandlers());
</script>

<template>
    <div class="grid">
        <template v-for="handler in handlers">
            <p>{{ handler.description }}</p>
            <div>
                <kbd>{{ handler.symbol ?? handler.key.toUpperCase() }}</kbd>
            </div>
        </template>
    </div>
</template>

<style scoped>
.grid {
    align-items: baseline;
    column-gap: 2rem;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    row-gap: 0.5rem;
}

kbd {
    background: rgb(0, 95, 90);
    border-radius: 6px;
    margin: 0 2px;
    padding: 1rem;
    user-select: none;
}
</style>
