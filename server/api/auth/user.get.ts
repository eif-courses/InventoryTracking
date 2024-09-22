export default defineEventHandler(async (event) => {
    // Get the authToken from the cookies in the request
    const authToken = getCookie(event, 'authToken')

    // If there's no authToken, return unauthorized
    if (!authToken) {
        return {
            statusCode: 401,
            message: 'Unauthorized, no auth token',
        }
    }

    try {
        // Make a request to your backend to get user details using the authToken
        const user = await $fetch('http://localhost:5254/auth/user', {
            headers: {
                Cookie: `authToken=${authToken}`, // Pass the cookie to the backend API
            },
        })

        // Return the user details
        return {
            statusCode: 200,
            user,
        }
    } catch (error) {
        // If there's an error (e.g., token invalid), return unauthorized or handle appropriately
        return {
            statusCode: 401,
            message: 'Unauthorized or failed to fetch user',
        }
    }
})