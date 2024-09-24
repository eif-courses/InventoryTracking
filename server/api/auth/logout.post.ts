export default defineEventHandler(async (event) => {
    deleteCookie(event, 'authToken')
    return {success: true}
})