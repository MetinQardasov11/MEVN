<template>
    <Navbar/>
    <RouterView/>
    <Footer/>
    
</template>

<script>
    import Navbar from './components/Navbar.vue'
    import Footer from './components/Footer.vue'

    export default {
        name: 'App',
        components: {
            Navbar,
            Footer
        },
    data() {
        return {
            message: 'Hello my site!',
            count: 0,
            isVisible: true
            }
        }
    }
</script>

<style> </style>