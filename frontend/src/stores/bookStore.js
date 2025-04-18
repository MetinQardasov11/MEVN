import { defineStore } from "pinia";
import axios from "axios";

export const useBookStore = defineStore("bookStore", {
    state: () => ({
        books: [],
        isLoading: false,
    }),
    actions: {
        async fetchBooks() {
            this.isLoading = true;
            try {
                const response = await axios.get("http://localhost:3000/api/v1/books");
                this.books = response.data.data;
            } catch (error) {
                console.error("Error fetching books:", error);
            } finally {
                this.isLoading = false;
            }
        },
    },
    getters: {
        selectedBook: (state) => {
            return (id) => state.books.find(book => book._id === id);
        }
    }
});