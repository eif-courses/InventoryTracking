export const useAuth = () => {
    const authToken = useCookie('authToken');
    const user = ref(null);
    const roles = ref([]);

    const fetchUser = async () => {
        console.log('All Cookies:', document.cookie);
        console.log('Auth Token:', authToken.value);

        if (!authToken.value) {
            console.log('No auth token found');
            return { error: 'No auth token found' };
        }

        try {
            const { data, error } = await useFetch('/api/auth/user', {
                method: 'GET',
                credentials: 'include'
            });

            if (error.value) {
                console.error('Error fetching user:', error.value);
                return { error: error.value };
            }

            user.value = data.value;
            roles.value = data.value.roles || []; // Ensure roles is an array

            // Print the fetched user and roles for testing
            console.log('Fetched User:', user.value);
            console.log('User Roles:', roles.value);

            return { user: user.value, roles: roles.value };
        } catch (err) {
            console.error('An error occurred:', err);
            return { error: err };
        }
    };

    return {
        user,
        roles,
        fetchUser
    };
};
