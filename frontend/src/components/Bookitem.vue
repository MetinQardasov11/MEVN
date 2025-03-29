
<template>
    <div class="card border-0 shadow position-relative">
        <img src="../assets/images/b1.jpg" class="card-img-top" alt="...">
        <div class="card-body">
            <div class="auth-box">
                <span class="py-1 px-3 text-white rounded-pill" style="background-color: var(--primary-color);">{{ book.author }}</span>
            </div>
            <h5 class="card-title mt-3 fw-semibold">{{ book.title }}</h5>
            <p class="card-text">{{ truncatedText }}</p>
            <div class="d-flex justify-content-between align-items-center">
                <a href="#" class="card-link">Read More</a>
                <p class="py-1 px-2 text-white badge mb-0" style="background-color: var(--primary-color);">{{ book.uploadDate }}</p>
            </div>
        </div>
        <span
            :class="ratingBadgeClass"
            class="position-absolute top-0 start-100 translate-middle p-2 text-white rounded-circle border border-2 border-white"
            style="background-color: var(--primary-color);">{{ book.rating }}</span>
    </div>
</template>

<script>
    export default {
    name: "Bookitem",
    props: {
        book: {
            type: Object,
            default: () => ([])
        }
    },
    computed: {
        ratingBadgeClass() {
            if (this.book.rating > 7) {
                return 'bg-success'
            } else if (this.book.rating > 4) {
                return 'bg-warning'
            } else {
                return 'bg-danger'
            } 
        },
        truncatedText() {
            if (this.book.description.length > 80) {
                return this.book.description.substring(0, 80) + '...'
            } else {
                return this.book.description
            }
        }
    }
    }
</script>

<style scoped> </style>