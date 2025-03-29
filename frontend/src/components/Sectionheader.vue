
<template>
    <div class="text-center mb-5 mt-3">
        <h2 class="display-4 fw-bolder">{{ title }}</h2>
        <p class="lead">{{ text }}</p>
    </div>
</template>

<script>
    export default {
    name: 'Sectionheader',
    props: {
        title: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        }
        }
    }
</script>

<style scoped> </style>