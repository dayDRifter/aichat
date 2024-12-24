import axios from "axios"
const loginUser = async (data) => {
    try {
        // console.log(data)
        const response = await axios.post(`http://localhost:5000/api/v1/users/login`, data);
        console.log(response)
        return response.data;

    } catch (error) {

        console.log(error)
        return error;
    }
}
const registerUser = async (data) => {
    try {
        const response = await axios.post(`http://localhost:5000/api/v1/users/register`, data);
        console.log(response)
        return response.data;

    } catch (error) {
        console.log(error)
        return error;
    }
}
export { loginUser, registerUser }