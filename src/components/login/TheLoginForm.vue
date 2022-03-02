<template>
    <form @submit.prevent="submit">
        <div class="form-control" :class="{ error: v$.email.$errors.length }">
            <label for="email">Email</label>
            <input type="text" name="email" placeholder="Enter your email" v-model="email">
            <div class="error" v-for="error of v$.email.$errors" :key="error.$uid"> 
                <p>{{ error.$message }}</p>
            </div>
        </div>

        <div class="form-control" :class="{ error: v$.password.$errors.length }">
            <label for="password">Password</label>
            <input type="password" name="password" placeholder="Enter your password" v-model="password">
            <div class="error" v-for="error of v$.password.$errors" :key="error.$uid">
                <p>{{ error.$message }}</p>
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

import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import { mapActions, mapGetters } from 'vuex';
import router from '../../router';

export default {
    setup () {
        return { 
            v$: useVuelidate() 
        }
    },
    components: {
        BaseButton,
        BaseFormInput
    },
    data() {
        return {
            email: '',
            password : '',
            hasError: false,
        }
    },
    methods: {
        ...mapActions({
            setUserData: 'setUserData'
        }),
        submit() {
            this.v$.$touch();
            if (this.v$.$error) return;
            this.setUserData({
                email: this.email,
                password: this.password,
            });
            router.push({name: 'dashboard'});
        }
    },
    validations () {
        return {
            email: { required, email },
            password: { required, minLength : minLength(6) }
        }
    },
    computed: {
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