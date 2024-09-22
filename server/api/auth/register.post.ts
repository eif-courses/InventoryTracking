interface RegisterRequest{
    email?: string;
    password?: string;
}
export default defineEventHandler(async (event) =>{
    const {username, password} = await readBody<RegisterRequest>(event)
    if (typeof username === 'string' && typeof password === 'string') {
        if(username.length >= 1){
            if(password.length >= 8){
               // const isCreated = await createUser(username, password)

                // if(isCreated){
                //     return {error:null}
                // }

            }else{
                return {error: 'password too short'}
            }
        }else{
            return {error: 'username is empty'};
        }
    }
    return {error: 'sign up failed'};
})