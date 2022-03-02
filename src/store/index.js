import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            email: false,
            password: false,
        }
    },
    getters: {
        email(state) {
            return state.email;
        }
    },
    actions: {
        setUserData(context, payload) {
            context.commit('setUserData', payload);
        }
    },
    mutations: {
        setUserData(state, payload) {
            state.email = payload.email
            state.password = payload.password
        }
    }
})

export default store;