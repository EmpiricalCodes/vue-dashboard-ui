<script>
import BaseCard from "@/components/ui/BaseCard.vue";
import TheLoginForm from "@/components/login/TheLoginForm.vue";

export default {
    components: { BaseCard, TheLoginForm }
}
</script>

<template>
    <div class="login">
        <div class="login-wrapper">
            <h1>Welcome Back !</h1>
            <p>Sign in to your account to continue</p>
            <div class="center">
                <BaseCard>
                    <TheLoginForm />
                </BaseCard>
            </div>
        </div>
    </div>
</template>

<style scoped>

    .login {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }

    .center {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 418px;
        margin: 10px auto 0 auto;
    }

    .login-wrapper h1 {
        font-weight: bold;
        text-align: center;
        color: var(--text-title);
        font-size: var(--text-size-h3);
    }

    .login-wrapper p {
        text-align: center;
        color: var(--text-body);
        font-size: var(--text-size-body);
        font-weight: 500;
    }
</style>