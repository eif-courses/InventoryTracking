import {getSubjectsUrl} from "~/data/subjects";

export default defineEventHandler(async (event) => {
    try {
        return await $fetch(getSubjectsUrl);
    } catch (error) {
        console.error('Error fetching subjects:', error);
        return {error: 'Failed to fetch subjects'};
    }
});