<template>
    <div class="grid">
        <div><kbd>F</kbd></div>
        <p>Fullscreen</p>

        <div>
            <kbd>→</kbd>
            <kbd>↓</kbd>
            <kbd>Enter</kbd>
        </div>
        <p>Next</p>

        <div>
            <kbd>←</kbd>
            <kbd>↑</kbd>
        </div>
        <p>Previous</p>

        <div>
            <kbd>Space</kbd>
            <kbd>P</kbd>
        </div>
        <p>Pause</p>

        <div><kbd>M</kbd></div>
        <p>Mute</p>
    </div>
</template>

<style scoped>
.grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 2rem;
    align-items: baseline;
}

kbd {
    background: rgb(36, 36, 36);
    padding: 2px 6px;
    border-radius: 6px;
    margin: 0 2px;
    user-select: none;
}
</style>
