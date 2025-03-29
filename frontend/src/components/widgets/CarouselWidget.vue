<template>
    <div class="position-relative w-100">
        <Transition name="fade" mode="out-in">
            <div :key="selectedItem.imageUrl" class="position-relative">
                <img :src="selectedItem.imageUrl" alt="" class="w-100" :style="{ objectFit: 'cover', height: height }">
                <div
                    class="custom-carousel-caption position-absolute top-0 start-0 bottom-0 end-0 d-flex justify-content-center text-light p-4 align-selectedItems-center">
                    <div class="container">
                        <h6 class="fw-bold text-uppercase" style="color: var(--secondary-color)">{{
                            selectedItem.subtitle }}
                        </h6>
                        <h1 class="display-4">{{ selectedItem.title }}</h1>
                        <p class="lead">{{ selectedItem.description }}</p>
                    </div>
                </div>
            </div>
        </Transition>
        <div class="custom-carousel-controls position-absolute d-flex gap-1">
            <button @click="prevItem" class="border-0 rounded-circle d-flex justify-content-center align-items-center">
                <span class="carousel-control-prev-icon"></span>
            </button>
            <button @click="nextItem" class="border-0 rounded-circle d-flex justify-content-center align-items-center">
                <span class="carousel-control-next-icon"></span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CarouselWidget',
    props: {
        items: {
            type: Array,
            required: true
        },
        height: {
            type: String,
            default: '100%'
        }
    },
    data() {
        return {
            currentItemIndex: 0,
            selectedItem: null
        }
    },
    created() {
        this.selectedItem = this.items[this.currentItemIndex]
    },
    methods: {
        nextItem() {
            this.currentItemIndex = (this.currentItemIndex + 1) % this.items.length
            this.selectedItem = this.items[this.currentItemIndex]
        },
        prevItem() {
            this.currentItemIndex = (this.currentItemIndex - 1 + this.items.length) % this.items.length
            this.selectedItem = this.items[this.currentItemIndex]
        }
    }
}
</script>

<style scoped>

</style>