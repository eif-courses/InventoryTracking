import {defineStore} from "pinia";
import {useUserStore} from "~/stores/auth";

export const useNotificationsStore = defineStore('notifications', {

    state: () => ({
        notifications: [] as string [],
    }),
    actions: {
        showNotification(message: string) {

        },
        clearNotifications: () => {

        }
    }
})

if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate(useNotificationsStore, import.meta.hot));
}