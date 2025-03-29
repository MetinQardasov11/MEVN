<template>
    <section>
        <CarouselWidget :items="carouselItems" height="400px" />
    </section>

    <section class="my-5" style="margin-bottom: 200px !important;">
        <div class="container">
            <Sectionheader title="Featured books" text="Lorem ipsum dolor sit amet" />

            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="list-group">
                            <button type="button" class="list-group-item list-group-item-action"
                                :class="{ 'active': selectedFilter === 'latest' }" @click="selectFilter('latest')">
                                Latest Books
                            </button>
                            <button type="button" class="list-group-item list-group-item-action"
                                :class="{ 'active': selectedFilter === 'best' }" @click="selectFilter('best')">
                                Best Ratings
                            </button>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div v-if="isLoading" class="d-flex justify-content-center">
                            <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                        <div v-else class="accordion">
                            <div class="accordion-item" v-for="(book, index) in filteredBooks" :key="index">
                                <h2 class="accordion-header">
                                    <button class="accordion-button" type="button"
                                        :class="{ 'collapsed': openAccordionIndex !== index }"
                                        @click="toogleAccordion(index)">
                                        <strong>{{ book.title }} - {{ book.author }}</strong>
                                    </button>
                                </h2>
                                <div class="accordion-collapse collapse"
                                    :class="{ 'show': openAccordionIndex === index }">
                                    <div class="accordion-body">
                                        <div class="row">
                                            <div class="col-md-4">
                                                <img src="../assets/images/b1.jpg" alt="" class="img-fluid">
                                            </div>
                                            <div class="col-md-8 d-flex flex-column justify-content-center">
                                                <p>{{ book.description }}</p>
                                                <div class="badge align-self-start"
                                                    style="background-color: var(--secondary-color);">
                                                    {{ book.rating }}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import CarouselWidget from '@/components/widgets/CarouselWidget.vue'
import hero_1 from '@/assets/images/hero_1.jpg'
import hero_2 from '@/assets/images/hero_2.jpg'
import hero_3 from '@/assets/images/hero_3.jpg'
import Sectionheader from '@/components/Sectionheader.vue'
import { useBookStore } from '@/stores/bookStore'
import { mapState } from 'pinia'

export default {
    name: 'HomeView',
    components: {
        CarouselWidget,
        Sectionheader
    },
    data() {
        return {
            carouselItems: [
                { imageUrl: hero_1, subtitle: 'Liberte', title: 'Lorem Ipsum Dolor Sit Amet', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
                { imageUrl: hero_2, subtitle: 'Egalite', title: 'Excepteur Sint Occaecat Cupidatat', description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
                { imageUrl: hero_3, subtitle: 'Fraternite', title: 'Neque Porro Quisquam Est', description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.' }
            ],
            selectedFilter: 'latest',
            openAccordionIndex: null,
        }
    },
    methods: {
        selectFilter(filter) {
            this.selectedFilter = filter
        },
        toogleAccordion(index) {
            if (this.openAccordionIndex === index) {
                this.openAccordionIndex = -1
            } else {
                this.openAccordionIndex = index
            }
        }
    },
    computed: {
        ...mapState(useBookStore, ['books', 'isLoading']),
        filteredBooks() {
            const copiedBooks = [...this.books]

            if (this.selectedFilter === 'latest') {
                return copiedBooks.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).slice(0, 10)
            } else if (this.selectedFilter === 'best') {
                return copiedBooks.sort((a, b) => b.rating - a.rating).slice(0, 10)
            }
            return copiedBooks
        }
    }
}
</script>

<style scoped>

</style>