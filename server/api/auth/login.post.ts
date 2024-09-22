export default defineEventHandler(async (event) => {
    const body = await readBody(event);

    try {
        const response = await fetch('http://localhost:5254/auth/login', {
            method: 'POST',
            body: JSON.stringify(body),
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return response;
    } catch (error) {
        console.error('Login error:', error);
        return { error: 'Login failed' };
    }
});
