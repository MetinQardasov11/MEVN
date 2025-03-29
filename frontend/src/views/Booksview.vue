<template>
    <section>
        <div class="container">
            <Sectionheader :title="title" :text="text" />
            <Booklist :books="paginatedBooks" />
            <PaginationWidget :currentPage="currentPage" :totalPages="totalPages" @page-changed="updatePage" />
        </div>
    </section>
</template>

<script>
import Sectionheader from '@/components/Sectionheader.vue'
import Booklist from "@/components/Booklist.vue";
import PaginationWidget from "@/components/widgets/PaginationWidget.vue";
import { mapState } from 'pinia'
import { useBookStore } from '@/stores/bookStore';

export default {
    name: 'BooksView',
    components: {
        Sectionheader,
        Booklist,
        PaginationWidget,
    },
    data() {
        return {
            title: "Books",
            text: "A book description is part of your book's metadata, which is essential to get right for better sales.",
            currentPage: 1,
            itemsPerPage: 8,
        }
    },
    computed: {
        ...mapState(useBookStore, ['books', 'isLoading']),
        totalPages() {
            return Math.ceil(this.books.length / this.itemsPerPage)
        },
        paginatedBooks() {
            const startIndex = (this.currentPage - 1) * this.itemsPerPage
            const endIndex = startIndex + this.itemsPerPage
            return this.books.slice(startIndex, endIndex)
        }
    },
    methods: {
        updatePage(page) {
            this.currentPage = page
        },
    },
}
</script>

<style scoped></style>