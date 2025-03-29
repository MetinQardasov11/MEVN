
<template>
    {{ user }}
</template>

<script>
import { useAuthStore } from '@/stores/authStore.js';
import { mapState } from 'pinia';

export default {
    name: 'DashboardView',
    computed: {
        ...mapState(useAuthStore, ['user'])
    },
};
</script>

<style scoped></style>