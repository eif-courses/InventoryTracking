import {BASE_URL} from "~/data/constants";

export default defineEventHandler(async (event) => {

    const authToken = getCookie(event, 'authToken');

    if (!authToken) {
        return {
            statusCode: 401,
            message: 'Unauthorized, no auth token',
        };
    }

    try {
        const response = await fetch(`${BASE_URL}/auth/user`, {
            method: 'GET',
            headers: {
                Cookie: `authToken=${authToken}`,
            },
        });

        const user = await response.json();

        return {
            statusCode: 200,
            user,
        };
    } catch (error) {
        console.error('Error fetching user:', error);
        return {
            statusCode: 401,
            message: 'Unauthorized or failed to fetch user',
        };
    }
});
