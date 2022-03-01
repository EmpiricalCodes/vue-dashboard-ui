<script>
import BaseCard from "@/components/ui/BaseCard.vue";
import TheLoginForm from "@/components/login/TheLoginForm.vue";

export default {
    components: { BaseCard, TheLoginForm },
    metaInfo: {
        title: 'Login Page'
    }
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

        <div class="profile">
            <div class="image">
                <img src="@/assets/images/bhanu.png" alt="" srcset="">
            </div>
            <p>This is a project created by <a href="https://www.linkedin.com/in/bhanukrsingh/" target="_blank">Bhanu Singh</a>.</p>
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

    .profile {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 30px;
    }

    .profile .image {
        width: 50px;
        height: 50px;
        border-radius: 50px;
        overflow: hidden;
    }

    .profile .image img {
        object-fit: contain;
        width: 100%;
        height: auto;
    }

    .profile p {
        font-size: 14px;
        color: var(--primary-color);
        font-weight: 500;
        margin-top: 7px;
    }

    .profile p a {
        text-decoration: none;
        color: var(--primary-color);
        font-weight: 500;
    }
</style>