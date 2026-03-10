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
    <nav>
        <a href="#/">Home</a>
        |
        <a href="#/about">About</a>
        |
        <a href="#/non-existent-path-2">Broken Link</a>
    </nav>

    <component :is="currentView" />
</template>
