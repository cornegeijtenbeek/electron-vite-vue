<script setup lang="ts">
import { computed, ref } from 'vue';
import { getView } from './routes';

const currentHash = ref(window.location.hash);

window.addEventListener('hashchange', () => {
    currentHash.value = window.location.hash;
});

const currentView = computed(() => getView(getPath(currentHash.value)));

function getPath(hash: string) {
    return hash.slice(1) || '/';
}
</script>

<template>
    <component :is="currentView" />
</template>
