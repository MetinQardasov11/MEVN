
<template>
    <div class="row">
        <div class="col-sm-6 col-md-4 col-xl-3 mb-5" v-for="book in books" :key="book.id">
            <RouterLink :to="`/book/${book._id}`">
                <Bookitem :book="book"/>
            </RouterLink>
        </div>
    </div>
</template>

<script>
    import Bookitem from '@/components/Bookitem.vue'
    export default {
    name: 'Booklist',
    components: {
        Bookitem
    },
    props: {
        books: {
            type: Array,
            default: () => ([])
        }
    }
    }
</script>

<style scoped> </style>