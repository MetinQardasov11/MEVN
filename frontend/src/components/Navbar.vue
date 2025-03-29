
<template>
    <nav class="navbar navbar-expand-md custom-nav">
        <div class="container">
            <RouterLink v-bind:to="{ name: 'home' }" class="navbar-brand">{{ siteName }}</RouterLink>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <RouterLink v-bind:to="{ name: 'home' }" class="nav-link">Home</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink v-bind:to="{ name: 'books' }" class="nav-link">Books</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink v-bind:to="{ name: 'dashboard' }" class="nav-link">Dashboard</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink v-bind:to="{ name: 'login' }" class="nav-link">Login</RouterLink>
                </li>
                <li class="nav-item" v-if="!isLoggedIn">
                    <RouterLink v-bind:to="{ name: 'register' }" class="nav-link">Register</RouterLink>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import { useAuthStore } from '@/stores/authStore.js';
import { mapState } from 'pinia';

export default {
    name: 'Bostorek',
    data() {
        return {
            siteName: 'Bostorek',       
        }
    },
    computed: {
        ...mapState(useAuthStore, ['isLoggedIn'])
    }
}
    
</script>

<style scoped> </style>