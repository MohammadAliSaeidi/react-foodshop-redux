import axios from "axios";


const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001'
})

export async function GetMenuData() {
    return axiosInstance.get('/menu')
        .then(result => result.data)
        .catch(error => {
            console.log(error.message);
            throw error
        });
}