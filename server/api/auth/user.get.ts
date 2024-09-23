import { BASE_URL } from "~/data/constants";

export default defineEventHandler(async (event) => {
    // Get the authToken from the cookies in the request
    const authToken = getCookie(event, 'authToken');

    // Debug: Log the authToken value
    console.log('authToken:', authToken);

    // If there's no authToken, return unauthorized
    if (!authToken) {
        return {
            statusCode: 401,
            message: 'Unauthorized, no auth token',
        };
    }

    try {
        // Make a request to your backend to get user details using the authToken
        const response = await fetch(`${BASE_URL}/auth/user`, {
            method: 'GET',
            headers: {
                Cookie: `authToken=${authToken}`,
            },
        });

        const user = await response.json();

        // Return the user details
        return {
            statusCode: 200,
            user,
        };
    } catch (error) {
        console.error('Error fetching user:', error); // Log error details for debugging
        // If there's an error (e.g., token invalid), return unauthorized or handle appropriately
        return {
            statusCode: 401,
            message: 'Unauthorized or failed to fetch user',
        };
    }
});
