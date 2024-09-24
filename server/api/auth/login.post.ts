import { BASE_URL } from "~/data/constants";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    try {
        const response = await fetch(`${BASE_URL}/auth/login`, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
        });

        return response;
    } catch (error) {
        console.error('Login error:', error);
        return { error: 'Login failed' };
    }
});
