<template>
    <section>
        <div class="container" v-if="!loading">
            <Sectionheader :title="book.title" :text="book.author" />
            <font-awesome-icon icon="arrow-left" size="2xl" class="mb-2" style="cursor: pointer;" @click="goToBackBooks" />
            <div class="row mb-4">
                <div class="col-lg-6">
                    <img src="../assets/images/b1.jpg" alt="">
                </div>
                <div class="col-lg-6 details-wrapper">
                    <p class="lead description">
                        {{ book.description }}
                    </p>

                    <div class="mb-4">
                        <div class="row border-bottom pb-2">
                            <div class="col-lg-6"> <strong> Page </strong> </div>
                            <div class="col-lg-6"> {{ book.pageNumber }} </div>
                        </div>
                        <div class="row border-bottom pb-2">
                            <div class="col-lg-6"> <strong> Category </strong> </div>
                            <div class="col-lg-6"> Fantastic </div>
                        </div>
                        <div class="row border-bottom pb-2">
                            <div class="col-lg-6"> <strong> Rating </strong> </div>
                            <div class="col-lg-6"> {{ book.rating }} </div>
                        </div>
                        <div class="row border-bottom pb-2">
                            <div class="col-lg-6"> <strong> Upload Date </strong> </div>
                            <div class="col-lg-6"> {{ book.updatedAt }} </div>
                        </div>
                    </div>
                    <div class="comments-section">
                        <h3 class="display-6 mb-2">Comments</h3>
                        <div class="card mb-4">
                            <div class="card-body">
                                <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, veritatis
                                    officiis! Perferendis explicabo eveniet facere maxime cumque. Hic, quam ut.</p>
                                <div class="d-flex justify-content-between">
                                    <p class="fw-bold fst-italic">John Doe</p>
                                    <div class="d-flex align-items-center">
                                        <font-awesome-icon icon="thumbs-up" />
                                        <p class="ps-2 mb-0"> <strong>8</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-4">
                            <div class="card-body">
                                <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, veritatis
                                    officiis! Perferendis explicabo eveniet facere maxime cumque. Hic, quam ut.</p>
                                <div class="d-flex justify-content-between">
                                    <p class="fw-bold fst-italic">John Doe</p>
                                    <div class="d-flex align-items-center">
                                        <font-awesome-icon icon="thumbs-up" />
                                        <p class="ps-2 mb-0"> <strong>8</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-4">
                            <div class="card-body">
                                <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, veritatis
                                    officiis! Perferendis explicabo eveniet facere maxime cumque. Hic, quam ut.</p>
                                <div class="d-flex justify-content-between">
                                    <p class="fw-bold fst-italic">John Doe</p>
                                    <div class="d-flex align-items-center">
                                        <font-awesome-icon icon="thumbs-up" />
                                        <p class="ps-2 mb-0"> <strong>8</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-4">
                            <div class="card-body">
                                <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, veritatis
                                    officiis! Perferendis explicabo eveniet facere maxime cumque. Hic, quam ut.</p>
                                <div class="d-flex justify-content-between">
                                    <p class="fw-bold fst-italic">John Doe</p>
                                    <div class="d-flex align-items-center">
                                        <font-awesome-icon icon="thumbs-up" />
                                        <p class="ps-2 mb-0"> <strong>8</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-4">
                            <div class="card-body">
                                <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, veritatis
                                    officiis! Perferendis explicabo eveniet facere maxime cumque. Hic, quam ut.</p>
                                <div class="d-flex justify-content-between">
                                    <p class="fw-bold fst-italic">John Doe</p>
                                    <div class="d-flex align-items-center">
                                        <font-awesome-icon icon="thumbs-up" />
                                        <p class="ps-2 mb-0"> <strong>8</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-4">
                            <div class="card-body">
                                <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, veritatis
                                    officiis! Perferendis explicabo eveniet facere maxime cumque. Hic, quam ut.</p>
                                <div class="d-flex justify-content-between">
                                    <p class="fw-bold fst-italic">John Doe</p>
                                    <div class="d-flex align-items-center">
                                        <font-awesome-icon icon="thumbs-up" />
                                        <p class="ps-2 mb-0"> <strong>8</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container" v-else>
            Book Data Loading
        </div>
    </section>
</template>

<script>
import Sectionheader from '@/components/Sectionheader.vue'
import { useBookStore } from '@/stores/bookStore';
import { mapState } from 'pinia'

    export default {
    name: "Book Detail View",
    components: {
        Sectionheader,
    },
    data() {
        return {
            title: "Book Detail",
            text: "A book description is part of your book's metadata, which is essential to get right for better sales.",
            book: null,
            loading: true
        }
    },
    created() {
        this.selectBook();
    },
    methods: {
        goToBackBooks() {
            this.$router.push({ name: "books" });
        },
        selectBook() {
            const bookId = this.$route.params.id;
            this.book = this.selectedBook(bookId)
            this.loading = false
        }
    },
    computed: {
        ...mapState(useBookStore, ['selectedBook']),
    }
    }
</script>

<style scoped> </style>