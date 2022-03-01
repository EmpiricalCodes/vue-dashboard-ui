<template>
    <form>
        <div class="form-control">
            <label for="email">Email</label>
            <input type="email" name="email" placeholder="Enter your email" v-model="email.val">
            <div class="error">
                <p>Incorrect Email ID.</p>
            </div>
        </div>

        <div class="form-control">
            <label for="password">Password</label>
            <input type="password" name="password" placeholder="Enter your password" v-model="password.val">
            <div class="error">
                <p>Incorrect Email ID.</p>
            </div>
        </div>

        <a href="#" id="forgot-password">Forgot your password ?</a>

        <div class="form-control checkbox">
            <input type="checkbox" name="remember" id="remember">
            <label for="remember">Remember me next time</label>
        </div>

        <div>
            <BaseButton>
                Sign In
            </BaseButton>
        </div>
    </form>
</template>

<script>
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseFormInput from '@/components/ui/BaseFormInput.vue'

export default {
    components: {
        BaseButton,
        BaseFormInput
    },
    data() {
        return {
            email: {
                val: '',
                hasError: false,
                error: '',
            },
            password : {
                val: '',
                hasError: false,
                error: '',
            },
            hasError: false,
        }
    }
}
</script>

<style scoped>
@import "@/assets/css/form.css";
form {
    margin: 22px 20px;
}

#forgot-password {
    text-decoration: none;
    font-size: var(--text-size-body);
    color: var(--color-info);
    font-weight: 500;
    margin-top: 10px;
    margin-bottom: 100px;
}
</style>