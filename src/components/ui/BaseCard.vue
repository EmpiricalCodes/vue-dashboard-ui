<template>
<div class="base-card">
    <slot></slot>
</div>
</template>


<style scoped>
    .base-card {
        background: white;
        box-shadow: 0 5px 10px 0 rgba(160, 163, 189, .1);
        border-radius: 10px;
        padding: 10px;
        width: 100%;
    }
</style>