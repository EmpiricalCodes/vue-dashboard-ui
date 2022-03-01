<template>
    <div class="form-control">
        <slot name="input"></slot>
        <input type="email" name="email">
        <div class="error">
            <p>Incorrect Email ID.</p>
        </div>
    </div>    
</template>

<style scoped>
    .form-control {
        display: flex;
        flex-direction: column;
    }    

</style>