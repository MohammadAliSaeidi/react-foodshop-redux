import axios from "axios";


const axiosInstance = axios.create({
	baseURL: 'http://localhost:3001'
})

export async function GetMenuData() {
	return axiosInstance.get('/menu')
		.then(result => result.data)
		.catch(error => {
			console.log(error.message)
			throw error
		});
}

export async function GetCartItems() {
	return await axiosInstance.get('/cart-items')
		.then(result => result.data)
}

export async function GetMenuItemById(id) {
	return await axiosInstance.get(`/menu/${id}`)
		.then(result => result.data)
}