export default defineNuxtRouteMiddleware(async (to, from) => {
    const authStore = useUserStore(); // Get the user store

    // Fetch user data



    if(!authStore.userFetched) {
        await authStore.fetchUser();
    }




    // Check if user exists after fetching
    if (!authStore.user) {
        //await authStore.fetchUser();
        // If user does not exist and not already on login page, redirect to login
        if (to.path !== '/login') {
            return navigateTo('/login');
        }
    } else {
        // If user exists and trying to access login page, redirect to dashboard
        if (to.path === '/login') {
            return navigateTo('/dashboard');
        }
    }
});
