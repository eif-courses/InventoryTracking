export default defineEventHandler(async (event) => {
    // Clear the authentication cookie
    deleteCookie(event, 'authToken')

    return { success: true }
})