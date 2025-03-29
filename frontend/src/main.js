import 'bootstrap/dist/css/bootstrap.min.css';
import '@/assets/styles.css'
import { createApp } from "vue";
import App from "./App.vue";
import router from './router/index.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faArrowLeft, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { createPinia } from 'pinia';
import { useBookStore } from '@/stores/bookStore';
import { useAuthStore } from '@/stores/authStore';

library.add(faArrowLeft, faThumbsUp);

const pinia = createPinia();

const storedUser = localStorage.getItem("user");
if (storedUser) {
    const userData = JSON.parse(storedUser);
    useAuthStore(pinia).user = userData;
}

const app = createApp(App);

app.use(pinia).use(router).component("font-awesome-icon", FontAwesomeIcon);

const bookStore = useBookStore();

bookStore.fetchBooks().then(() => {
    app.mount("#app");
});