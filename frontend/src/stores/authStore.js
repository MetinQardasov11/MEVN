import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("authStore", {
    state: () => ({
        user: null,
    }),
    getters: {
        isLoggedIn: (state) => {
            return !!state.user; 
        }
    },
    actions: {
        async register(newUserData) {
            try {
                const response = await axios.post("http://localhost:3000/api/v1/auth/register", newUserData);
                return response.data;
            } catch (error) {
                throw error;
            }
        },
         
        async login(userData) {
            try {
                const response = await axios.post("http://localhost:3000/api/v1/auth/login", userData);
                this.user = response.data.user;
                localStorage.setItem("user", JSON.stringify(response.data.user));
            } catch (error) {
                console.error("Error at login users:", error);
            }
        }
    },
    getters: {
        
    }
});