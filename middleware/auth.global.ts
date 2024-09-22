// middleware/auth.middleware.ts
import { defineNuxtRouteMiddleware, useCookie, navigateTo } from 'nuxt/app';

export default defineNuxtRouteMiddleware((to,from) => {
    const cookie = useCookie('authToken');

    // If the cookie does not exist and the user is not already on the login page
    if (!cookie.value && to.path !== '/login') {
        return navigateTo('/login');
    }




    // Additional checks can be added here
});
