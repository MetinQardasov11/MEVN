<template>
    <section class="full-section-height">
        <div class="container">
            <form @submit.prevent="submitForm">
                <div class="row justify-content-center">
                    <div class="col-md-6 col-8 mb-3">
                        <label for="username" class="form-label">Username</label>
                        <input type="text" class="form-control" id="username" v-model.lazy="formData.username" name="username" required>
                    </div>
                </div>

                <div class="row justify-content-center">
                    <div class="col-md-6 col-8 mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" v-model.lazy="formData.email" name="email" required>
                    </div>
                </div>

                <div class="row justify-content-center">
                    <div class="col-md-6 col-8 mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" v-model.lazy="formData.password" name="password" required>
                    </div>
                </div>

                <div class="row justify-content-center">
                    <div class="col-md-6 col-8 mb-3">
                        <button type="submit" class="btn w-100"
                            style="background-color: #073547; border-color: #073547; color: white;">
                            Register
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
import { useAuthStore } from '@/stores/authStore.js';
import { mapActions } from 'pinia';
    
    export default {
    name: 'RegisterView',
    data() {
        return {
            formData: {
                username: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        ...mapActions(useAuthStore, ['register']),
        async submitForm() {
            try {
                await this.register(this.formData);
                this.$router.push('/login');
            } catch (error) {
                console.log('Error in register', error);
            }
        }
    }
    }
    
</script>

<style scoped>
    
</style>