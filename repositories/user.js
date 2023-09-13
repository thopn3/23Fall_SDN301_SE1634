

const login = ({email, password}) =>{
    console.log(`Email: ${email}, Password: ${password}`);
}

const register = ({
    name,
    email, 
    password,
    phoneNumber,
    address
}) =>{
    //console.log(`Email: ${email}, Password: ${password}`);
}

export default {
    login,
    register
}