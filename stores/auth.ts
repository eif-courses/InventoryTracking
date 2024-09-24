import {acceptHMRUpdate, defineStore} from "pinia";


export const useUserStore = defineStore('auth', {

    state: () => ({
        user: null as User | null,
        userFetched: false,
    }),
    actions: {

        async login(username, password) {
            const {data, error} = await useFetch('/api/auth/login', {
                method: 'POST',
                body: JSON.stringify({username, password}),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (error.value) {
                console.error('Login failed:', error.value);
                return;
            }
            await this.fetchUser();
            await navigateTo('/dashboard');
        },
        async logout() {
            const notificationStore = useNotificationsStore();
            this.user = null
            await navigateTo('/login');
            notificationStore.showNotification("Sėkmingai atsijungėte nuo sistemos")
        },
        async fetchUser() {
            try {
                const {data, error} = await useFetch('/api/auth/user', {
                    method: 'GET',
                });

                if (error.value) {
                    console.error('Failed to fetch user:', error.value);
                    return;
                }
                this.user = data.value.user;
                this.userFetched = true;

            } catch (err) {
                console.error('Error during user fetch:', err);
            }
        },
        hasRole(role) {
            return this.user?.roles?.includes(role);
        },
    },
});

interface User {
    email: string;
    userName: string;
    userId: string;
    roles: string[];
}

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
