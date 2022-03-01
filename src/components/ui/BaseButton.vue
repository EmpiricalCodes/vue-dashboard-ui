<template>
    <button class="base-button">
        <p><slot></slot></p>
    </button>
</template>


<style scoped>
    .base-button {
        background: var(--primary-color);
        color: var(--vt-c-white);
        font-family: 'Inter', 'sans-serif';
        border-radius: 4px;
        border: none;
        padding: 10px;
        width: 100%;
        cursor: pointer;
    }

    .base-button:hover {
        background: var(--primary-color);
    }

    .base-button p {
        font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        font-weight: 400;
        font-size: 16px;
    }
</style>